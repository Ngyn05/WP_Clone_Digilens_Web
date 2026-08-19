<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function digilens_snapshot_extract( $html, $pattern, $default = '' ) {
    return preg_match( $pattern, $html, $m ) ? html_entity_decode( wp_strip_all_tags( $m[1] ), ENT_QUOTES | ENT_HTML5, 'UTF-8' ) : $default;
}

function digilens_snapshot_inner_main( $html ) {
    if ( preg_match( '#<main\b[^>]*>(.*?)</main>#is', $html, $m ) ) { return trim( $m[1] ); }
    return '';
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

function digilens_snapshot_import_all() {
    if ( ! current_user_can( 'manage_options' ) && ! doing_action( 'after_switch_theme' ) && ! doing_action( 'init' ) ) { return array( 0, 0 ); }

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
        $records[] = array(
            'rel'     => $rel,
            'route'   => $route,
            'title'   => $title,
            'html'    => $html,
            'is_post' => $is_post,
            'depth'   => $route === '' ? 0 : substr_count( $route, '/' ) + 1,
        );
    }

    // Parents must exist before nested pages such as /argo/terms-of-use/ and /media/2/.
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
            if ( $parent_route !== '.' && isset( $route_ids[ $parent_route ] ) ) { $parent_id = (int) $route_ids[ $parent_route ]; }
        }

        $post_id = digilens_snapshot_find_existing_by_meta( $rel, $post_type );
        if ( ! $post_id && ! $is_post && $route !== '' ) {
            $existing_page = get_page_by_path( $route, OBJECT, 'page' );
            if ( $existing_page ) { $post_id = (int) $existing_page->ID; }
        }
        if ( ! $post_id && $is_post ) {
            $existing_posts = get_posts( array( 'post_type' => 'post', 'name' => sanitize_title( $slug ), 'post_status' => 'any', 'posts_per_page' => 1, 'fields' => 'ids', 'no_found_rows' => true ) );
            if ( $existing_posts ) { $post_id = (int) $existing_posts[0]; }
        }

        if ( ! $post_id ) {
            $postarr = array(
                'post_type'    => $post_type,
                'post_status'  => 'publish',
                'post_title'   => $record['title'],
                'post_name'    => sanitize_title( $slug ),
                'post_content' => digilens_snapshot_inner_main( $html ),
                'post_parent'  => $parent_id,
            );
            if ( $is_post && preg_match( '#<meta\s+property=["\']article:published_time["\']\s+content=["\']([^"\']+)#i', $html, $dm ) ) {
                $ts = strtotime( $dm[1] );
                if ( $ts ) {
                    $postarr['post_date'] = wp_date( 'Y-m-d H:i:s', $ts );
                    $postarr['post_date_gmt'] = gmdate( 'Y-m-d H:i:s', $ts );
                }
            }
            $post_id = wp_insert_post( wp_slash( $postarr ) );
            if ( is_wp_error( $post_id ) || ! $post_id ) { continue; }
        } else {
            // Keep existing WordPress Pages and Posts synchronized with the translated snapshot.
            // Slugs/permalinks stay unchanged; only title, content and parent are refreshed.
            wp_update_post( wp_slash( array(
                'ID'           => $post_id,
                'post_title'   => $record['title'],
                'post_content' => digilens_snapshot_inner_main( $html ),
                'post_parent'  => $parent_id,
            ) ) );
        }

        update_post_meta( $post_id, '_digilens_snapshot_path', $rel );
        update_post_meta( $post_id, '_digilens_snapshot_route', digilens_snapshot_route_from_html( $rel ) );
        if ( ! $is_post ) { $route_ids[ $route ] = $post_id; }

        if ( $is_post ) { $posts++; } else { $pages++; }
        if ( $rel === 'index.htm' ) {
            update_option( 'show_on_front', 'page' );
            update_option( 'page_on_front', $post_id );
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
        echo '<div class="notice notice-success"><p>Đã đồng bộ snapshot: ' . esc_html( $pages ) . ' trang, ' . esc_html( $posts ) . ' bài viết.</p></div>';
    }
    $stats = get_option( 'digilens_snapshot_import_stats', array() );
    echo '<div class="wrap"><h1>DigiLens Snapshot</h1><p>Theme hiển thị snapshot WebCopy bằng tài nguyên local và đồng bộ các trang/bài viết đã chụp vào WordPress.</p>';
    if ( $stats ) { echo '<p><strong>Lần đồng bộ gần nhất:</strong> ' . esc_html( isset( $stats['pages'] ) ? $stats['pages'] : 0 ) . ' trang, ' . esc_html( isset( $stats['posts'] ) ? $stats['posts'] : 0 ) . ' bài viết.</p>'; }
    echo '<form method="post">'; wp_nonce_field( 'digilens_resync' ); submit_button( 'Đồng bộ snapshot', 'primary', 'digilens_resync' ); echo '</form></div>';
}
