<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function digilens_snapshot_extract( $html, $pattern, $default = '' ) {
    return preg_match( $pattern, $html, $m ) ? html_entity_decode( wp_strip_all_tags( $m[1] ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) : $default;
}

function digilens_snapshot_is_infrastructure( $rel ) {
    return (bool) preg_match( '#^(?:wp-json|feed/|comments/|forms/|gtag/|category/|author/|wp-content/|wp-includes/)#i', $rel );
}

function digilens_snapshot_find_existing_by_meta( $rel, $post_type ) {
    $ids = get_posts( array(
        'post_type'      => $post_type,
        'post_status'    => 'any',
        'posts_per_page' => 1,
        'fields'         => 'ids',
        'meta_key'       => '_digilens_snapshot_path',
        'meta_value'     => $rel,
        'no_found_rows'  => true,
    ) );
    return $ids ? (int) $ids[0] : 0;
}

/**
 * Exactly 4 Core WordPress Categories for DigiLens:
 * 1. Thông cáo báo chí (press-release)
 * 2. Blog (blogs)
 * 3. Truyền thông (media)
 * 4. Tin tức (news)
 */
function digilens_get_or_create_4_categories() {
    $cat_definitions = array(
        'press-release' => 'Thông cáo báo chí',
        'blogs'         => 'Blog',
        'media'         => 'Truyền thông',
        'news'          => 'Tin tức',
    );

    // Delete obsolete thought-pieces term if exists to keep exactly 4 categories
    $old_tp = get_term_by( 'slug', 'thought-pieces', 'category' );
    if ( $old_tp ) {
        wp_delete_term( $old_tp->term_id, 'category' );
    }

    $cat_ids = array();
    foreach ( $cat_definitions as $slug => $name ) {
        $term = get_term_by( 'slug', $slug, 'category' );
        if ( ! $term ) {
            $inserted = wp_insert_term( $name, 'category', array( 'slug' => $slug ) );
            if ( ! is_wp_error( $inserted ) && isset( $inserted['term_id'] ) ) {
                $cat_ids[ $slug ] = (int) $inserted['term_id'];
            }
        } else {
            if ( $term->name !== $name ) {
                wp_update_term( $term->term_id, 'category', array( 'name' => $name ) );
            }
            $cat_ids[ $slug ] = (int) $term->term_id;
        }
    }
    return $cat_ids;
}

function digilens_extract_clean_content( $html, $is_post = true ) {
    if ( ! $is_post ) {
        if ( preg_match( '#<main\b[^>]*>(.*?)</main>#is', $html, $m ) ) {
            $content = trim( $m[1] );
        } else {
            $content = $html;
        }
    } else {
        if ( preg_match( '#<div\b[^>]*class=["\'][^"\']*entry-content[^"\']*["\'][^>]*>(.*?)(?:</div>\s*<!-- \.entry-content|</div>\s*</div>\s*</article>|<footer\b[^>]*class=["\'][^"\']*entry-footer|</article>)#is', $html, $m ) ) {
            $content = trim( $m[1] );
        } elseif ( preg_match( '#<main\b[^>]*>(.*?)</main>#is', $html, $m ) ) {
            $content = trim( $m[1] );
            $content = preg_replace( '#<header\b[^>]*class=["\'][^"\']*entry-header[^"\']*["\'][^>]*>.*?</header>#is', '', $content );
            $content = preg_replace( '#<footer\b[^>]*class=["\'][^"\']*entry-footer[^"\']*["\'][^>]*>.*?</footer>#is', '', $content );
            $content = preg_replace( '#<nav\b[^>]*class=["\'][^"\']*post-navigation[^"\']*["\'][^>]*>.*?</nav>#is', '', $content );
        } else {
            $content = $html;
        }
    }

    $theme_snapshot_uri = trailingslashit( get_template_directory_uri() ) . 'snapshot/';
    $content = preg_replace( '#(?:\.\./)+wp-content/#i', $theme_snapshot_uri . 'wp-content/', $content );
    $content = preg_replace( '#\b(src|href|poster|srcset)=(["\'])wp-content/#i', '$1=$2' . $theme_snapshot_uri . 'wp-content/', $content );
    $content = preg_replace( '#<script\b[^>]*>.*?</script>#is', '', $content );

    return trim( $content );
}

function digilens_detect_post_category( $html, $slug ) {
    // Map blog slugs (including thought pieces) to 'blogs'
    $blog_slugs = array(
        'ar-niche-to-necessary',
        'eradex-argospower-fow',
        'eradex-results',
        'evaluating-ar-impact-on-manufacturing-training',
        'work-first-play-later',
        'building-sota-headworn-company',
        'digilens-is-making-strides-in-extending-reality-and-augmenting-life-in-2022',
        'visualizing-the-future-of-head-worn',
        'xr-will-be-next-big-thing',
        'xr-will-shape-the-future-of-work',
    );

    if ( in_array( $slug, $blog_slugs, true ) ) {
        return 'blogs';
    }

    return 'press-release';
}

function digilens_snapshot_import_all() {
    if ( ! current_user_can( 'manage_options' ) && ! doing_action( 'after_switch_theme' ) && ! doing_action( 'init' ) ) { 
        return array( 0, 0 ); 
    }

    $cat_ids = digilens_get_or_create_4_categories();

    $files = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( DIGILENS_SNAPSHOT_DIR, FilesystemIterator::SKIP_DOTS ) );
    $records = array();
    foreach ( $files as $file ) {
        if ( ! $file->isFile() || strtolower( $file->getFilename() ) !== 'index.htm' ) { continue; }
        $rel = ltrim( str_replace( '\\', '/', substr( $file->getPathname(), strlen( DIGILENS_SNAPSHOT_DIR ) ) ), '/' );
        if ( digilens_snapshot_is_infrastructure( $rel ) ) { continue; }
        $html = file_get_contents( $file->getPathname() );
        if ( ! $html || stripos( $html, '<body' ) === false ) { continue; }
        $is_post = (bool) preg_match( '#<body[^>]+class=["\'][^"\']*(?:^|\s)single-post(?:\s|$)[^"\']*["\']#i', $html );
        $route = trim( digilens_snapshot_route_from_html( $rel ), '/' );
        $title = digilens_snapshot_extract( $html, '#<meta\s+property=["\']og:title["\']\s+content=["\']([^"\']+)#i' );
        if ( $title === '' ) { $title = digilens_snapshot_extract( $html, '#<title[^>]*>(.*?)</title>#is', 'DigiLens' ); }
        $title = preg_replace( '/\s+-\s+DigiLens Inc\.?\s*$/i', '', $title );
        $title = preg_replace( '/\s+-\s+DigiLens Việt Nam\s*$/i', '', $title );
        
        $records[] = array(
            'rel'     => $rel,
            'route'   => $route,
            'title'   => $title,
            'html'    => $html,
            'is_post' => $is_post,
            'depth'   => $route === '' ? 0 : substr_count( $route, '/' ) + 1,
        );
    }

    usort( $records, function ( $a, $b ) {
        if ( $a['is_post'] !== $b['is_post'] ) { return $a['is_post'] ? 1 : -1; }
        if ( $a['depth'] === $b['depth'] ) { return strcmp( $a['route'], $b['route'] ); }
        return $a['depth'] <=> $b['depth'];
    } );

    $route_ids = array();
    $pages = 0;
    $posts = 0;
    
    foreach ( $records as $record ) {
        $rel = $record['rel'];
        $route = $record['route'];
        $html = $record['html'];
        $is_post = $record['is_post'];
        $post_type = $is_post ? 'post' : 'page';
        $slug = $route === '' ? 'home' : basename( $route );
        $parent_id = 0;

        if ( ! $is_post && $route !== '' && strpos( $route, '/' ) !== false ) {
            $parent_route = dirname( $route );
            if ( $parent_route !== '.' && isset( $route_ids[ $parent_route ] ) ) { 
                $parent_id = (int) $route_ids[ $parent_route ]; 
            }
        }

        $post_id = digilens_snapshot_find_existing_by_meta( $rel, $post_type );
        if ( ! $post_id && ! $is_post && $route !== '' ) {
            $existing_page = get_page_by_path( $route, OBJECT, 'page' );
            if ( $existing_page ) { $post_id = (int) $existing_page->ID; }
        }
        if ( ! $post_id && $is_post ) {
            $existing_posts = get_posts( array( 
                'post_type'      => 'post', 
                'name'           => sanitize_title( $slug ), 
                'post_status'    => 'any', 
                'posts_per_page' => 1, 
                'fields'         => 'ids', 
                'no_found_rows'  => true 
            ) );
            if ( $existing_posts ) { $post_id = (int) $existing_posts[0]; }
        }

        $clean_content = digilens_extract_clean_content( $html, $is_post );
        $post_cat_slug = $is_post ? digilens_detect_post_category( $html, $slug ) : '';
        $assigned_cat_id = isset( $cat_ids[ $post_cat_slug ] ) ? $cat_ids[ $post_cat_slug ] : ( isset( $cat_ids['press-release'] ) ? $cat_ids['press-release'] : 0 );

        $feat_img = '';
        if ( preg_match( '#<meta\s+property=["\']og:image["\']\s+content=["\']([^"\']+)#i', $html, $im ) ) {
            $feat_img = trim( $im[1] );
            if ( strpos( $feat_img, 'http' ) !== 0 ) {
                $feat_img = trailingslashit( get_template_directory_uri() ) . 'snapshot/' . ltrim( $feat_img, '/' );
            }
        }

        $excerpt = digilens_snapshot_extract( $html, '#<meta\s+property=["\']og:description["\']\s+content=["\']([^"\']+)#i' );
        if ( $excerpt === '' ) {
            $excerpt = digilens_snapshot_extract( $html, '#<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)#i' );
        }

        $postarr = array(
            'post_type'    => $post_type,
            'post_status'  => 'publish',
            'post_title'   => $record['title'],
            'post_name'    => sanitize_title( $slug ),
            'post_content' => $clean_content,
            'post_excerpt' => $excerpt,
            'post_parent'  => $parent_id,
        );

        if ( $is_post && $assigned_cat_id ) {
            $postarr['post_category'] = array( $assigned_cat_id );
        }

        if ( $is_post && preg_match( '#<meta\s+property=["\']article:published_time["\']\s+content=["\']([^"\']+)#i', $html, $dm ) ) {
            $ts = strtotime( $dm[1] );
            if ( $ts ) {
                $postarr['post_date'] = wp_date( 'Y-m-d H:i:s', $ts );
                $postarr['post_date_gmt'] = gmdate( 'Y-m-d H:i:s', $ts );
            }
        }

        if ( ! $post_id ) {
            $post_id = wp_insert_post( wp_slash( $postarr ) );
            if ( is_wp_error( $post_id ) || ! $post_id ) { continue; }
        } else {
            $postarr['ID'] = $post_id;
            wp_update_post( wp_slash( $postarr ) );
            if ( $is_post && $assigned_cat_id ) {
                wp_set_post_categories( $post_id, array( $assigned_cat_id ) );
            }
        }

        if ( $is_post && preg_match( '#<meta\s+name=["\']keywords["\']\s+content=["\']([^"\']+)#i', $html, $km ) ) {
            $tags = array_map( 'trim', explode( ',', $km[1] ) );
            wp_set_post_tags( $post_id, $tags, false );
        }

        update_post_meta( $post_id, '_digilens_snapshot_path', $rel );
        update_post_meta( $post_id, '_digilens_snapshot_route', digilens_snapshot_route_from_html( $rel ) );
        if ( $feat_img ) {
            update_post_meta( $post_id, '_digilens_featured_image_url', $feat_img );
        }

        if ( ! $is_post ) { $route_ids[ $route ] = $post_id; }
        if ( $is_post ) { $posts++; } else { $pages++; }
        if ( $rel === 'index.htm' ) {
            update_option( 'show_on_front', 'page' );
            update_option( 'page_on_front', $post_id );
        }
    }

    // Now import external Media and News articles from category archives
    $theme_snapshot_uri = trailingslashit( get_template_directory_uri() ) . 'snapshot/';
    foreach ( array( 'media' => 'Truyền thông', 'news' => 'Tin tức' ) as $ext_cat_slug => $ext_cat_name ) {
        $ext_cat_dir = DIGILENS_SNAPSHOT_DIR . '/category/' . $ext_cat_slug;
        if ( ! is_dir( $ext_cat_dir ) ) { continue; }
        $assigned_cat_id = isset( $cat_ids[ $ext_cat_slug ] ) ? $cat_ids[ $ext_cat_slug ] : 0;
        $seen_titles = array();

        $cat_files = new RecursiveIteratorIterator( new RecursiveDirectoryIterator( $ext_cat_dir, FilesystemIterator::SKIP_DOTS ) );
        foreach ( $cat_files as $cfile ) {
            if ( ! $cfile->isFile() || strtolower( $cfile->getFilename() ) !== 'index.htm' ) { continue; }
            $chtml = file_get_contents( $cfile->getPathname() );
            if ( ! $chtml ) { continue; }

            if ( preg_match_all( '#<article\b[^>]*>(.*?)</article>#is', $chtml, $am ) ) {
                foreach ( $am[1] as $art_html ) {
                    if ( ! preg_match( '#<h[1-6]\b[^>]*class=["\'][^"\']*entry-title[^"\']*["\'][^>]*>\s*<a\b[^>]*href=["\']([^"\']*)["\'][^>]*>(.*?)</a>#is', $art_html, $tm ) ) {
                        continue;
                    }
                    $ext_url = $tm[1];
                    $title = trim( html_entity_decode( wp_strip_all_tags( $tm[2] ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) );
                    if ( isset( $seen_titles[ $title ] ) ) { continue; }
                    $seen_titles[ $title ] = true;

                    $art_slug = sanitize_title( $title );
                    if ( strlen( $art_slug ) > 60 ) { $art_slug = substr( $art_slug, 0, 60 ); }

                    // Image
                    $feat_img = '';
                    if ( preg_match( '#<img\b[^>]*src=["\']([^"\']+)["\']#i', $art_html, $im ) ) {
                        $raw_img = $im[1];
                        if ( strpos( $raw_img, 'http' ) === 0 ) {
                            $feat_img = $raw_img;
                        } else {
                            $clean_img_path = preg_replace( '#^(?:\.\./)+#', '', $raw_img );
                            $feat_img = $theme_snapshot_uri . $clean_img_path;
                        }
                    }

                    // Excerpt
                    $excerpt = '';
                    if ( preg_match( '#<div\b[^>]*class=["\'][^"\']*ast-excerpt-container[^"\']*["\'][^>]*>(.*?)</div>#is', $art_html, $em ) ) {
                        $excerpt = trim( html_entity_decode( wp_strip_all_tags( $em[1] ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) );
                    }

                    // Body content
                    $content_body = '<div class="dl-ext-article-body">';
                    if ( $feat_img ) {
                        $content_body .= '<p><img src="' . esc_url( $feat_img ) . '" alt="' . esc_attr( $title ) . '" style="max-width:100%;height:auto;border-radius:8px;"></p>';
                    }
                    if ( $excerpt ) {
                        $content_body .= '<p class="dl-lead" style="font-size:1.15rem;line-height:1.7;color:#1e293b;">' . esc_html( $excerpt ) . '</p>';
                    }
                    if ( $ext_url ) {
                        $content_body .= '<p style="margin-top:28px;"><a href="' . esc_url( $ext_url ) . '" target="_blank" rel="noopener noreferrer" class="dl-source-btn" style="display:inline-block;background:#00B0F0;color:#ffffff;padding:12px 24px;border-radius:6px;font-weight:700;text-decoration:none;">Xem nguồn bài viết / video đầy đủ &raquo;</a></p>';
                    }
                    $content_body .= '</div>';

                    // Check existing post
                    $existing_posts = get_posts( array(
                        'post_type'      => 'post',
                        'name'           => $art_slug,
                        'post_status'    => 'any',
                        'posts_per_page' => 1,
                        'fields'         => 'ids',
                        'no_found_rows'  => true
                    ) );

                    $postarr = array(
                        'post_type'     => 'post',
                        'post_status'   => 'publish',
                        'post_title'    => $title,
                        'post_name'     => $art_slug,
                        'post_content'  => $content_body,
                        'post_excerpt'  => $excerpt,
                        'post_category' => array( $assigned_cat_id ),
                    );

                    if ( ! empty( $existing_posts ) ) {
                        $postarr['ID'] = (int) $existing_posts[0];
                        wp_update_post( wp_slash( $postarr ) );
                        $art_post_id = (int) $existing_posts[0];
                    } else {
                        $art_post_id = wp_insert_post( wp_slash( $postarr ) );
                    }

                    if ( $art_post_id && ! is_wp_error( $art_post_id ) ) {
                        if ( $feat_img ) {
                            update_post_meta( $art_post_id, '_digilens_featured_image_url', $feat_img );
                        }
                        if ( $ext_url ) {
                            update_post_meta( $art_post_id, '_digilens_external_url', $ext_url );
                        }
                        wp_set_post_categories( $art_post_id, array( $assigned_cat_id ) );
                        $posts++;
                    }
                }
            }
        }
    }

    if ( ! get_option( 'permalink_structure' ) ) { update_option( 'permalink_structure', '/%postname%/' ); }
    flush_rewrite_rules();
    update_option( 'digilens_snapshot_import_stats', array( 'pages' => $pages, 'posts' => $posts, 'time' => time() ) );
    return array( $pages, $posts );
}

function digilens_snapshot_install() {
    digilens_snapshot_import_all();
}

function digilens_snapshot_admin_page() {
    if ( ! current_user_can( 'manage_options' ) ) { return; }
    if ( isset( $_POST['digilens_resync'] ) ) {
        check_admin_referer( 'digilens_resync' );
        list( $pages, $posts ) = digilens_snapshot_import_all();
        echo '<div class="notice notice-success"><p>Đã đồng bộ 4 chuyên mục vào database: ' . esc_html( $pages ) . ' trang, ' . esc_html( $posts ) . ' bài viết.</p></div>';
    }
    $stats = get_option( 'digilens_snapshot_import_stats', array() );
    echo '<div class="wrap"><h1>DigiLens Snapshot &amp; 4 Chuyên Mục Database</h1><p>Đồng bộ toàn bộ bài viết theo đúng 4 Chuyên mục (Thông cáo báo chí, Blog, Truyền thông, Tin tức) vào WordPress database.</p>';
    if ( $stats ) { echo '<p><strong>Lần đồng bộ gần nhất:</strong> ' . esc_html( isset( $stats['pages'] ) ? $stats['pages'] : 0 ) . ' trang, ' . esc_html( isset( $stats['posts'] ) ? $stats['posts'] : 0 ) . ' bài viết.</p>'; }
    echo '<form method="post">'; wp_nonce_field( 'digilens_resync' ); submit_button( 'Đồng bộ lại toàn bộ Database', 'primary', 'digilens_resync' ); echo '</form></div>';
}
