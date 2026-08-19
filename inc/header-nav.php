<?php
/**
 * DigiLens Master Header Navigation
 * Synchronized across all dynamic templates and snapshot pages.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

function digilens_render_master_header() {
    $logo_url = function_exists( 'digilens_snapshot_asset_url' ) 
        ? digilens_snapshot_asset_url( 'wp-content/uploads/2021/03/LRG-Logo-White-Full-MAR21-207x39.png' )
        : get_template_directory_uri() . '/snapshot/wp-content/uploads/2021/03/LRG-Logo-White-Full-MAR21-207x39.png';
    $home_url = esc_url( home_url( '/' ) );
    
    $argo_url       = esc_url( home_url( '/argo/' ) );
    $waveguides_url = esc_url( home_url( '/waveguides/' ) );
    $partners_url   = esc_url( home_url( '/partners/' ) );
    $store_url      = esc_url( home_url( '/store/' ) );
    $company_url    = esc_url( home_url( '/company/' ) );
    $media_url      = esc_url( home_url( '/media/' ) );
    $careers_url    = esc_url( home_url( '/careers/' ) );
    $contact_url    = esc_url( home_url( '/contact/' ) );

    return '<header class="site-header dl-master-header" id="masthead" itemid="#masthead" itemscope="itemscope" itemtype="https://schema.org/WPHeader">
        <!-- Desktop Header Bar -->
        <div class="dl-desktop-header-wrap" id="ast-desktop-header">
            <div class="dl-header-container">
                <div class="dl-header-row">
                    <!-- Brand Logo -->
                    <div class="dl-header-brand">
                        <a href="' . $home_url . '" class="dl-header-logo-link" rel="home" title="DigiLens">
                            <img src="' . esc_url( $logo_url ) . '" alt="DigiLens" class="dl-header-logo-img" width="207" height="39" />
                        </a>
                    </div>

                    <!-- Navigation Links (Desktop) -->
                    <nav class="dl-header-nav" id="primary-site-navigation-desktop" aria-label="Điều hướng chính">
                        <ul class="dl-nav-list" id="ast-hf-menu-1">
                            <!-- Menu Item: ARGO -->
                            <li class="dl-nav-item dl-has-dropdown" id="menu-item-argo">
                                <a href="' . $argo_url . '" class="dl-nav-link">
                                    ARGO™
                                    <svg class="dl-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                <ul class="dl-dropdown-menu">
                                    <li><a href="' . $argo_url . '">ARGO™</a></li>
                                    <li><a href="https://developer.digilens.com/" target="_blank" rel="noopener">Cổng thông tin nhà phát triển</a></li>
                                </ul>
                            </li>

                            <!-- Menu Item: Ống dẫn sóng -->
                            <li class="dl-nav-item" id="menu-item-waveguides">
                                <a href="' . $waveguides_url . '" class="dl-nav-link">ỐNG DẪN SÓNG</a>
                            </li>

                            <!-- Menu Item: Đối tác -->
                            <li class="dl-nav-item" id="menu-item-partners">
                                <a href="' . $partners_url . '" class="dl-nav-link">ĐỐI TÁC</a>
                            </li>

                            <!-- Menu Item: Cửa hàng -->
                            <li class="dl-nav-item" id="menu-item-store">
                                <a href="' . $store_url . '" class="dl-nav-link dl-nav-store">CỬA HÀNG</a>
                            </li>

                            <!-- Menu Item: Giới thiệu -->
                            <li class="dl-nav-item dl-has-dropdown" id="menu-item-about">
                                <a href="' . $company_url . '" class="dl-nav-link">
                                    GIỚI THIỆU
                                    <svg class="dl-arrow-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                </a>
                                <ul class="dl-dropdown-menu">
                                    <li><a href="' . $company_url . '">Công ty</a></li>
                                    <li><a href="' . $media_url . '">Trung tâm truyền thông</a></li>
                                    <li><a href="' . $careers_url . '">Tuyển dụng</a></li>
                                    <li><a href="' . $contact_url . '">Liên hệ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Mobile Header Bar -->
        <div class="dl-mobile-header-wrap" id="ast-mobile-header">
            <div class="dl-header-container">
                <div class="dl-mobile-header-row">
                    <div class="dl-header-brand">
                        <a href="' . $home_url . '" class="dl-header-logo-link" rel="home">
                            <img src="' . esc_url( $logo_url ) . '" alt="DigiLens" class="dl-header-logo-img" />
                        </a>
                    </div>
                    <button type="button" class="dl-mobile-menu-trigger" id="dl-mobile-menu-btn" aria-label="Menu chính">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Drawer Modal -->
    <div class="dl-mobile-drawer" id="dl-mobile-drawer" style="display:none;">
        <div class="dl-mobile-drawer-overlay" id="dl-drawer-overlay"></div>
        <div class="dl-mobile-drawer-content">
            <div class="dl-drawer-header">
                <img src="' . esc_url( $logo_url ) . '" alt="DigiLens" style="height:32px;width:auto;">
                <button type="button" class="dl-drawer-close" id="dl-drawer-close" aria-label="Đóng menu">&times;</button>
            </div>
            <nav class="dl-drawer-nav">
                <ul>
                    <li><a href="' . $argo_url . '">ARGO™</a></li>
                    <li><a href="https://developer.digilens.com/" target="_blank" rel="noopener">Cổng thông tin nhà phát triển</a></li>
                    <li><a href="' . $waveguides_url . '">Ống dẫn sóng</a></li>
                    <li><a href="' . $partners_url . '">Đối tác</a></li>
                    <li><a href="' . $store_url . '">CỬA HÀNG</a></li>
                    <li><a href="' . $company_url . '">Công ty</a></li>
                    <li><a href="' . $media_url . '">Trung tâm truyền thông</a></li>
                    <li><a href="' . $careers_url . '">Tuyển dụng</a></li>
                    <li><a href="' . $contact_url . '">Liên hệ</a></li>
                </ul>
            </nav>
        </div>
    </div>
    
    <script>
    (function() {
        var btn = document.getElementById("dl-mobile-menu-btn");
        var drawer = document.getElementById("dl-mobile-drawer");
        var closeBtn = document.getElementById("dl-drawer-close");
        var overlay = document.getElementById("dl-drawer-overlay");
        
        function openDrawer() { if (drawer) drawer.style.display = "block"; }
        function closeDrawer() { if (drawer) drawer.style.display = "none"; }
        
        if (btn) btn.addEventListener("click", openDrawer);
        if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
        if (overlay) overlay.addEventListener("click", closeDrawer);
    })();
    </script>';
}
