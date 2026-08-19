<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'DIGILENS_THEME_VERSION', '1.2.6' );
define( 'DIGILENS_THEME_DIR', get_template_directory() );
define( 'DIGILENS_THEME_URI', get_template_directory_uri() );
define( 'DIGILENS_SNAPSHOT_DIR', DIGILENS_THEME_DIR . '/snapshot' );
define( 'DIGILENS_SNAPSHOT_URI', DIGILENS_THEME_URI . '/snapshot' );

require_once DIGILENS_THEME_DIR . '/inc/snapshot-renderer.php';
require_once DIGILENS_THEME_DIR . '/inc/snapshot-importer.php';
require_once DIGILENS_THEME_DIR . '/inc/forms.php';

add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'script', 'style' ) );
    register_nav_menus( array( 'primary' => __( 'Menu chính', 'digilens-snapshot' ) ) );
} );

add_action( 'wp_enqueue_scripts', function () {
    // Only the small compatibility/form stylesheet is enqueued by WordPress.
    // The captured site CSS/JS remains loaded from the original snapshot markup.
    wp_enqueue_style( 'digilens-theme', get_stylesheet_uri(), array(), DIGILENS_THEME_VERSION );
}, 100 );

add_action( 'template_redirect', function () {
    if ( is_admin() ) { return; }
    $snapshot = digilens_snapshot_for_current_request();
    if ( $snapshot ) {
        status_header( 200 );
        digilens_render_snapshot( $snapshot );
        exit;
    }
}, 1 );

add_filter( 'redirect_canonical', function ( $redirect_url ) {
    return digilens_snapshot_for_current_request() ? false : $redirect_url;
}, 10, 1 );

add_action( 'after_switch_theme', 'digilens_snapshot_install' );

add_action( 'admin_menu', function () {
    add_theme_page(
        __( 'DigiLens Snapshot', 'digilens-snapshot' ),
        __( 'DigiLens Snapshot', 'digilens-snapshot' ),
        'manage_options',
        'digilens-snapshot',
        'digilens_snapshot_admin_page'
    );
} );


/**
 * v1.1.0: one-time synchronization of translated Page content into WordPress.
 * This keeps wp-admin Page titles/content aligned with the translated snapshot
 * without using any runtime JavaScript translation.
 */
add_action( 'init', function () {
    if ( get_option( 'digilens_vi_page_sync_version' ) === DIGILENS_THEME_VERSION ) { return; }
    if ( function_exists( 'digilens_snapshot_import_all' ) ) {
        digilens_snapshot_import_all();
        update_option( 'digilens_vi_page_sync_version', DIGILENS_THEME_VERSION );
    }
} );
