<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function digilens_normalize_snapshot_path( $path ) {
    $path = str_replace( '\\', '/', (string) $path );
    // Cyotek/WebCopy encodes U+202F in filenames as the literal token #U202f.
    $path = str_replace( "\xE2\x80\xAF", '#U202f', $path );
    $parts = array();
    foreach ( explode( '/', $path ) as $part ) {
        if ( $part === '' || $part === '.' ) { continue; }
        if ( $part === '..' ) { array_pop( $parts ); continue; }
        $parts[] = $part;
    }
    return implode( '/', $parts );
}

function digilens_snapshot_candidates_for_request() {
    $path = parse_url( isset( $_SERVER['REQUEST_URI'] ) ? wp_unslash( $_SERVER['REQUEST_URI'] ) : '/', PHP_URL_PATH );
    $path = trim( rawurldecode( (string) $path ), '/' );
    $candidates = array();
    if ( $path === '' ) {
        $candidates[] = 'index.htm';
    } else {
        $candidates[] = $path . '/index.htm';
        $candidates[] = $path . '.htm';
        $candidates[] = $path;
    }
    return array_values( array_unique( $candidates ) );
}

function digilens_snapshot_for_current_request() {
    if ( is_admin() ) { return false; }

    $post_id = get_queried_object_id();
    if ( $post_id ) {
        $meta = get_post_meta( $post_id, '_digilens_snapshot_path', true );
        if ( $meta ) {
            $meta = digilens_normalize_snapshot_path( $meta );
            $file = DIGILENS_SNAPSHOT_DIR . '/' . $meta;
            if ( is_file( $file ) ) { return $meta; }
        }
    }

    foreach ( digilens_snapshot_candidates_for_request() as $rel ) {
        $rel = digilens_normalize_snapshot_path( $rel );
        if ( is_file( DIGILENS_SNAPSHOT_DIR . '/' . $rel ) && preg_match( '/\.htm$/i', $rel ) ) {
            return $rel;
        }
    }
    return false;
}


function digilens_snapshot_asset_url( $local_path ) {
    $segments = array_map( 'rawurlencode', explode( '/', ltrim( $local_path, '/' ) ) );
    return trailingslashit( DIGILENS_SNAPSHOT_URI ) . implode( '/', $segments );
}

function digilens_snapshot_route_from_html( $rel ) {
    $rel = digilens_normalize_snapshot_path( $rel );
    if ( $rel === 'index.htm' ) { return '/'; }
    $route = preg_replace( '#/index\.htm$#i', '/', $rel );
    if ( $route === $rel ) { $route = preg_replace( '/\.htm$/i', '/', $route ); }
    return '/' . ltrim( $route, '/' );
}

function digilens_resolve_relative_path( $base_file, $url_path ) {
    $url_path = rawurldecode( $url_path );
    if ( strpos( $url_path, '/' ) === 0 ) {
        return digilens_normalize_snapshot_path( ltrim( $url_path, '/' ) );
    }
    $base_dir = dirname( str_replace( '\\', '/', $base_file ) );
    if ( $base_dir === '.' ) { $base_dir = ''; }
    return digilens_normalize_snapshot_path( trim( $base_dir . '/' . $url_path, '/' ) );
}

function digilens_rewrite_url( $url, $snapshot_rel ) {
    $original = $url;
    $url = html_entity_decode( trim( (string) $url ), ENT_QUOTES | ENT_HTML5, 'UTF-8' );
    if ( $url === '' || $url[0] === '#' || preg_match( '#^(?:mailto:|tel:|javascript:|data:|blob:)#i', $url ) ) { return $original; }

    $scheme_relative = strpos( $url, '//' ) === 0;
    $is_absolute = (bool) preg_match( '#^https?://#i', $url ) || $scheme_relative;
    $query = '';
    $fragment = '';
    $local_path = '';

    if ( $is_absolute ) {
        $parse_url = $scheme_relative ? 'https:' . $url : $url;
        $parts = wp_parse_url( $parse_url );
        $host = isset( $parts['host'] ) ? strtolower( $parts['host'] ) : '';
        if ( ! in_array( $host, array( 'www.digilens.com', 'digilens.com', 'staging.digilens.com' ), true ) ) { return $original; }
        $local_path = digilens_normalize_snapshot_path( ltrim( isset( $parts['path'] ) ? $parts['path'] : '', '/' ) );
        $query = isset( $parts['query'] ) ? '?' . $parts['query'] : '';
        $fragment = isset( $parts['fragment'] ) ? '#' . $parts['fragment'] : '';
    } else {
        $hash_pos = strpos( $url, '#' );
        if ( $hash_pos !== false ) { $fragment = substr( $url, $hash_pos ); $url = substr( $url, 0, $hash_pos ); }
        $q_pos = strpos( $url, '?' );
        if ( $q_pos !== false ) { $query = substr( $url, $q_pos ); $url = substr( $url, 0, $q_pos ); }
        $local_path = digilens_resolve_relative_path( $snapshot_rel, $url );
    }

    if ( $local_path === '' ) { return home_url( '/' ) . $query . $fragment; }

    $candidate = DIGILENS_SNAPSHOT_DIR . '/' . $local_path;
    $html_candidate = is_dir( $candidate ) ? rtrim( $candidate, '/' ) . '/index.htm' : '';

    if ( preg_match( '/\.htm$/i', $local_path ) && is_file( $candidate ) ) {
        // Infrastructure captures are assets/endpoints, not public pages.
        if ( preg_match( '#^(?:wp-json|feed|comments/feed|forms/|gtag/)#i', $local_path ) ) {
            return digilens_snapshot_asset_url( $local_path ) . $query . $fragment;
        }
        return home_url( digilens_snapshot_route_from_html( $local_path ) ) . $query . $fragment;
    }
    if ( $html_candidate && is_file( $html_candidate ) ) {
        $rel_html = ltrim( str_replace( DIGILENS_SNAPSHOT_DIR, '', $html_candidate ), '/' );
        return home_url( digilens_snapshot_route_from_html( $rel_html ) ) . $query . $fragment;
    }
    if ( is_file( $candidate ) ) {
        return digilens_snapshot_asset_url( $local_path ) . $query . $fragment;
    }

    // If WebCopy missed a known original asset, keep a remote fallback instead of producing a broken local URL.
    if ( preg_match( '#^(?:wp-content|wp-includes|gtag|forms|@googlemaps|s|af|count)/#i', $local_path ) ) {
        if ( $is_absolute ) { return $original; }
        return 'https://www.digilens.com/' . implode( '/', array_map( 'rawurlencode', explode( '/', $local_path ) ) ) . $query . $fragment;
    }

    // Internal page link not captured locally: keep it on this WordPress site.
    if ( $is_absolute || preg_match( '/(?:index\.htm|\.htm)$/i', $local_path ) ) {
        $route = preg_replace( '#(?:/)?index\.htm$#i', '/', $local_path );
        $route = preg_replace( '/\.htm$/i', '/', $route );
        return home_url( '/' . ltrim( $route, '/' ) ) . $query . $fragment;
    }
    return $original;
}

function digilens_replace_main_content( $html, $snapshot_rel ) {
    $post_id = get_queried_object_id();
    if ( ! $post_id || get_post_meta( $post_id, '_digilens_snapshot_path', true ) !== $snapshot_rel ) { return $html; }
    $content = get_post_field( 'post_content', $post_id );
    if ( $content === '' ) { return $html; }
    $replacement = do_shortcode( $content );
    return preg_replace_callback(
        '#(<main\b[^>]*>)(.*?)(</main>)#is',
        function ( $m ) use ( $replacement ) { return $m[1] . $replacement . $m[3]; },
        $html,
        1
    );
}

function digilens_native_form_markup( $type = 'contact' ) {
    $sent = isset( $_GET['dl_sent'] ) ? sanitize_key( wp_unslash( $_GET['dl_sent'] ) ) : '';
    $notice = '';
    if ( $sent === $type ) { $notice = '<div class="digilens-form-notice">Cảm ơn bạn. Yêu cầu đã được gửi thành công.</div>'; }

    $action = esc_url( admin_url( 'admin-post.php' ) );
    $nonce = wp_nonce_field( 'digilens_' . $type, '_dl_nonce', true, false );
    if ( $type === 'newsletter' ) {
        return $notice . '<form class="digilens-native-form" method="post" action="' . $action . '">' . $nonce .
            '<input type="hidden" name="action" value="digilens_newsletter">' .
            '<label>Email<input type="email" name="email" required autocomplete="email"></label>' .
            '<label class="dl-hp">Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>' .
            '<button type="submit">Đăng ký</button></form>';
    }
    return $notice . '<form class="digilens-native-form" method="post" action="' . $action . '">' . $nonce .
        '<input type="hidden" name="action" value="digilens_contact">' .
        '<div class="dl-row"><label>Họ và tên<input type="text" name="name" required autocomplete="name"></label><label>Email<input type="email" name="email" required autocomplete="email"></label></div>' .
        '<div class="dl-row"><label>Công ty<input type="text" name="company" autocomplete="organization"></label><label>Số điện thoại<input type="tel" name="phone" autocomplete="tel"></label></div>' .
        '<label>Nội dung<textarea name="message" required></textarea></label>' .
        '<label class="dl-hp">Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>' .
        '<button type="submit">Gửi yêu cầu</button></form>';
}

function digilens_replace_hubspot_forms( $html ) {
    $forms = array(
        'c5265497-b30e-4bec-ab39-f832063f1401' => 'contact',
        'c43fead5-e9a3-4760-a56b-8d8b68ba70c4' => 'newsletter',
        'e6e8e8cc-c724-4c02-8710-12c785ae0892' => 'contact',
    );
    foreach ( $forms as $id => $type ) {
        $pattern = '#<script>\s*window\.hsFormsOnReady.*?formId:\s*["\']' . preg_quote( $id, '#' ) . '["\'].*?</script>\s*<div class="hbspt-form"[^>]*></div>#is';
        $html = preg_replace( $pattern, digilens_native_form_markup( $type ), $html );
    }
    return $html;
}

function digilens_strip_cookie_consent( $html ) {
    // 1. Remove the cookie law info banner markup and modal block
    $html = preg_replace( '#<!--googleoff:\s*all-->\s*<div[^>]*id=["\']cookie-law-info-bar["\'].*?<!--googleon:\s*all-->#is', '', $html );
    $html = preg_replace( '#<div\b[^>]*id=["\']cookie-law-info-bar["\'][^>]*>.*?</div>\s*</span>\s*</div>#is', '', $html );
    $html = preg_replace( '#<div\b[^>]*id=["\']cookie-law-info-again["\'][^>]*>.*?</div>#is', '', $html );
    $html = preg_replace( '#<div\b[^>]*id=["\']cliSettingsPopup["\'][^>]*>.*?(?:<div class=["\']cli-modal-backdrop[^>]*></div>\s*)+#is', '', $html );
    $html = preg_replace( '#<div\b[^>]*class=["\'][^"\']*cli-modal-backdrop[^"\']*["\'][^>]*></div>#is', '', $html );

    // 2. Remove cookie law info stylesheets and scripts
    $html = preg_replace( '#<link\b[^>]*id=["\']cookie-law-info[^"\'\s>]*["\'][^>]*>#is', '', $html );
    $html = preg_replace( '#<script\b[^>]*id=["\']cookie-law-info[^"\'\s>]*["\'][^>]*>.*?</script>#is', '', $html );
    $html = preg_replace( '#<script\b[^>]*src=["\'][^"\']*cookie-law-info[^"\']*["\'][^>]*>\s*</script>#is', '', $html );

    // 3. Remove inline script configuration
    $html = preg_replace( '#<script\b[^>]*>\s*var\s+Cli_Data\s*=.*?</script>#is', '', $html );
    $html = preg_replace( '#<script\b[^>]*>\s*var\s+cli_cookiebar_settings\s*=.*?</script>#is', '', $html );

    return $html;
}

function digilens_strip_footer_newsletter( $html ) {
    // Remove the 4th footer column (newsletter subscription form & heading)
    $html = preg_replace(
        '#<div\b[^>]*class=["\'][^"\']*elementor-element-44d31cd8[^"\']*["\'][^>]*>.*?</div>\s*</div>\s*</div>#is',
        '',
        $html
    );
    return $html;
}

function digilens_build_complete_footer() {
    $logo_url = digilens_snapshot_asset_url( 'wp-content/uploads/2021/03/LRG-Logo-White-Full-MAR21.png' );
    $home_url = esc_url( home_url( '/' ) );

    return '<footer class="digilens-master-footer">
        <div class="dl-f-container">
            <!-- 1. Header Bar: Brand + Slogan -->
            <div class="dl-f-header">
                <div class="dl-f-brand">
                    <a href="' . $home_url . '" class="dl-f-logo-link" title="DigiLens Việt Nam">
                        <img src="' . esc_url( $logo_url ) . '" alt="DigiLens" class="dl-f-logo-img">
                        <span class="dl-f-vn-badge">VIỆT NAM</span>
                    </a>
                </div>
                <div class="dl-f-slogan">
                    <p>Công nghệ ống dẫn sóng quang học đột phá, nâng cao trải nghiệm thực tế ảo tăng cường (AR/XR) thế hệ mới.</p>
                </div>
            </div>

            <!-- 2. Customer Support Section (3 Cards) -->
            <div class="dl-f-support-section">
                <div class="dl-f-support-title">HỖ TRỢ KHÁCH HÀNG</div>
                <div class="dl-f-support-grid">
                    <!-- Card 1: Hà Nội -->
                    <div class="dl-f-card">
                        <div class="dl-f-card-header">
                            <div class="dl-f-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <span class="dl-f-card-badge">MIỀN BẮC</span>
                        </div>
                        <h4 class="dl-f-card-title">Văn phòng Hà Nội</h4>
                        <p class="dl-f-card-address">226 Đường Láng, Phường Thịnh Quang,<br>Quận Đống Đa, Hà Nội</p>
                        <div class="dl-f-card-hotline">
                            <a href="tel:02473048700" class="dl-f-phone-link">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                024.7304.8700
                            </a>
                        </div>
                    </div>

                    <!-- Card 2: Hồ Chí Minh -->
                    <div class="dl-f-card">
                        <div class="dl-f-card-header">
                            <div class="dl-f-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <span class="dl-f-card-badge">MIỀN NAM</span>
                        </div>
                        <h4 class="dl-f-card-title">Văn phòng Hồ Chí Minh</h4>
                        <p class="dl-f-card-address">137 Hòa Hưng, Phường Hòa Hưng,<br>TP. Hồ Chí Minh</p>
                        <div class="dl-f-card-hotline">
                            <a href="tel:02873048700" class="dl-f-phone-link">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                028.7304.8700
                            </a>
                        </div>
                    </div>

                    <!-- Card 3: Hotline Tổng Đài -->
                    <div class="dl-f-card dl-f-card-cta">
                        <div class="dl-f-card-header">
                            <div class="dl-f-icon-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                            </div>
                            <span class="dl-f-card-badge">TƯ VẤN 24/7</span>
                        </div>
                        <h4 class="dl-f-card-title">Hotline Tổng Đài</h4>
                        <div class="dl-f-cta-wrapper">
                            <a href="tel:1900638400" class="dl-f-btn-hotline">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 9 4.38c0-.55-.45-1-1-1H4.5c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
                                1900.63.8400
                            </a>
                            <span class="dl-f-cta-subtitle">Hỗ trợ và tư vấn mọi lúc, mọi nơi</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Navigation Links: 3 Cột căn giữa (Desktop) & Sổ Accordion (Mobile) -->
            <div class="dl-f-nav-grid">
                <div class="dl-f-nav-col">
                    <h5 class="dl-f-nav-title" role="button" tabindex="0">
                        <span>CÔNG NGHỆ</span>
                        <svg class="dl-f-acc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </h5>
                    <ul class="dl-f-nav-list">
                        <li><a href="' . esc_url( home_url( '/waveguides/' ) ) . '">Ống dẫn sóng</a></li>
                        <li><a href="' . esc_url( home_url( '/argo/' ) ) . '">ARGO™</a></li>
                    </ul>
                </div>

                <div class="dl-f-nav-col">
                    <h5 class="dl-f-nav-title" role="button" tabindex="0">
                        <span>GIỚI THIỆU</span>
                        <svg class="dl-f-acc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </h5>
                    <ul class="dl-f-nav-list">
                        <li><a href="' . esc_url( home_url( '/company/' ) ) . '">Công ty</a></li>
                        <li><a href="' . esc_url( home_url( '/media/' ) ) . '">Trung tâm truyền thông</a></li>
                        <li><a href="' . esc_url( home_url( '/careers/' ) ) . '">Tuyển dụng</a></li>
                        <li><a href="' . esc_url( home_url( '/partners/' ) ) . '">Đối tác</a></li>
                    </ul>
                </div>

                <div class="dl-f-nav-col">
                    <h5 class="dl-f-nav-title" role="button" tabindex="0">
                        <span>PHÁP LÝ</span>
                        <svg class="dl-f-acc-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </h5>
                    <ul class="dl-f-nav-list">
                        <li><a href="' . esc_url( home_url( '/terms-of-use/' ) ) . '">Điều khoản sử dụng</a></li>
                        <li><a href="' . esc_url( home_url( '/argo/terms-of-use/' ) ) . '">Điều khoản sử dụng ARGO</a></li>
                        <li><a href="' . esc_url( home_url( '/privacy-policy/' ) ) . '">Chính sách quyền riêng tư</a></li>
                        <li><a href="' . esc_url( home_url( '/contact/' ) ) . '">Liên hệ</a></li>
                    </ul>
                </div>
            </div>

            <script>
            (function() {
                function initFooterAccordion() {
                    var titles = document.querySelectorAll(".dl-f-nav-col .dl-f-nav-title");
                    titles.forEach(function(title) {
                        if (title._accBound) return;
                        title._accBound = true;
                        title.addEventListener("click", function(e) {
                            if (window.innerWidth <= 767) {
                                e.preventDefault();
                                var parent = this.closest(".dl-f-nav-col");
                                if (parent) {
                                    parent.classList.toggle("is-open");
                                }
                            }
                        });
                    });
                }
                if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", initFooterAccordion);
                } else {
                    initFooterAccordion();
                }
            })();
            </script>

            <!-- 4. Bottom Row: Copyright + Social Icons -->
            <div class="dl-f-bottom-row">
                <div class="dl-f-copyright">
                    &copy; ' . gmdate( 'Y' ) . ' DigiLens Inc. DigiLens Việt Nam. Tất cả quyền được bảo lưu.
                </div>
                <div class="dl-f-socials">
                    <a href="https://twitter.com/DigiLensInc" target="_blank" rel="noopener" aria-label="X Twitter" class="dl-f-social-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/digilensinc/" target="_blank" rel="noopener" aria-label="Facebook" class="dl-f-social-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/company/digilensinc/" target="_blank" rel="noopener" aria-label="LinkedIn" class="dl-f-social-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="https://www.youtube.com/@DigiLensInc" target="_blank" rel="noopener" aria-label="YouTube" class="dl-f-social-btn">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>';
}

function digilens_replace_entire_footer( $html ) {
    $new_footer = digilens_build_complete_footer();

    // Match the outer Elementor location footer container
    $pattern = '#<footer\b[^>]*class=["\'][^"\']*elementor-location-footer[^"\']*["\'][^>]*>.*?</footer>\s*</footer>#is';
    if ( preg_match( $pattern, $html ) ) {
        return preg_replace( $pattern, $new_footer, $html, 1 );
    }

    // Fallback: match any outermost <footer class="elementor...
    $fallback_pattern = '#<footer\b[^>]*class=["\'][^"\']*elementor-24518[^"\']*["\'][^>]*>.*?</footer>\s*</footer>#is';
    if ( preg_match( $fallback_pattern, $html ) ) {
        return preg_replace( $fallback_pattern, $new_footer, $html, 1 );
    }

    return $html;
}

function digilens_rewrite_snapshot_html( $html, $snapshot_rel ) {
    $html = digilens_strip_cookie_consent( $html );
    $html = digilens_replace_entire_footer( $html );
    $html = digilens_replace_main_content( $html, $snapshot_rel );
    $html = digilens_replace_hubspot_forms( $html );

    // Exact original-domain asset roots inside JS/CSS strings.
    $asset_roots = array( 'wp-content/', 'wp-includes/', 'forms/', 'gtag/', '@googlemaps/', 's/', 'af/', 'count/' );
    foreach ( $asset_roots as $root ) {
        $html = str_replace(
            array( 'https://www.digilens.com/' . $root, 'http://www.digilens.com/' . $root, 'https://digilens.com/' . $root ),
            trailingslashit( DIGILENS_SNAPSHOT_URI ) . $root,
            $html
        );
    }

    $html = preg_replace_callback(
        '#\b(href|src|action|poster|data-src|data-lazy-src)=("|\')(.*?)\2#is',
        function ( $m ) use ( $snapshot_rel ) {
            return $m[1] . '=' . $m[2] . esc_attr( digilens_rewrite_url( $m[3], $snapshot_rel ) ) . $m[2];
        },
        $html
    );

    $html = preg_replace_callback(
        '#\bsrcset=("|\')(.*?)\1#is',
        function ( $m ) use ( $snapshot_rel ) {
            $items = array();
            foreach ( explode( ',', $m[2] ) as $item ) {
                $item = trim( $item );
                if ( $item === '' ) { continue; }
                $parts = preg_split( '/\s+/', $item, 2 );
                $items[] = digilens_rewrite_url( $parts[0], $snapshot_rel ) . ( isset( $parts[1] ) ? ' ' . $parts[1] : '' );
            }
            return 'srcset=' . $m[1] . esc_attr( implode( ', ', $items ) ) . $m[1];
        },
        $html
    );

    $html = preg_replace_callback(
        '#url\(\s*(["\']?)([^)"\']+)\1\s*\)#i',
        function ( $m ) use ( $snapshot_rel ) {
            return 'url("' . esc_url( digilens_rewrite_url( trim( $m[2] ), $snapshot_rel ) ) . '")';
        },
        $html
    );

    // Add WordPress hooks without replacing the captured document shell.
    ob_start(); wp_head(); $wp_head = ob_get_clean();
    ob_start(); wp_footer(); $wp_footer = ob_get_clean();
    if ( stripos( $html, '</head>' ) !== false ) { $html = preg_replace( '#</head>#i', $wp_head . "\n</head>", $html, 1 ); }
    if ( stripos( $html, '<body' ) !== false && function_exists( 'wp_body_open' ) ) {
        ob_start(); wp_body_open(); $body_open = ob_get_clean();
        $html = preg_replace( '#(<body\b[^>]*>)#i', '$1' . $body_open, $html, 1 );
    }
    if ( stripos( $html, '</body>' ) !== false ) { $html = preg_replace( '#</body>#i', $wp_footer . "\n</body>", $html, 1 ); }
    return $html;
}

function digilens_render_snapshot( $snapshot_rel ) {
    $snapshot_rel = digilens_normalize_snapshot_path( $snapshot_rel );
    $file = DIGILENS_SNAPSHOT_DIR . '/' . $snapshot_rel;
    if ( ! is_file( $file ) ) { return; }
    $html = file_get_contents( $file );
    if ( $html === false ) { return; }
    echo digilens_rewrite_snapshot_html( $html, $snapshot_rel ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
