<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

define( 'DIGILENS_THEME_VERSION', '1.3.0' );
define( 'DIGILENS_THEME_DIR', get_template_directory() );
define( 'DIGILENS_THEME_URI', get_template_directory_uri() );
define( 'DIGILENS_SNAPSHOT_DIR', DIGILENS_THEME_DIR . '/snapshot' );
define( 'DIGILENS_SNAPSHOT_URI', DIGILENS_THEME_URI . '/snapshot' );

require_once DIGILENS_THEME_DIR . '/inc/snapshot-renderer.php';
require_once DIGILENS_THEME_DIR . '/inc/snapshot-importer.php';
require_once DIGILENS_THEME_DIR . '/inc/forms.php';
require_once DIGILENS_THEME_DIR . '/inc/header-nav.php';
require_once DIGILENS_THEME_DIR . '/inc/post-metaboxes.php';

add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo' );
    add_theme_support( 'responsive-embeds' );
    add_theme_support( 'editor-styles' );
    add_editor_style( 'assets/css/editor-style.css' );
    add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'script', 'style' ) );
    register_nav_menus( array( 'primary' => __( 'Menu chính', 'digilens-snapshot' ) ) );
} );

// Force Classic Editor for posts & pages to match user layout
add_filter( 'use_block_editor_for_post', '__return_false', 10 );
add_filter( 'use_block_editor_for_post_type', '__return_false', 10 );

// Output Favicons in <head> for all dynamic pages
add_action( 'wp_head', function () {
    $icon_32    = get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3-150x150.png';
    $icon_192   = get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3-300x300.png';
    $icon_apple = get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3.png';
    
    echo '<link rel="icon" href="' . esc_url( $icon_32 ) . '" sizes="32x32" />' . "\n";
    echo '<link rel="icon" href="' . esc_url( $icon_192 ) . '" sizes="192x192" />' . "\n";
    echo '<link rel="apple-touch-icon" href="' . esc_url( $icon_apple ) . '" />' . "\n";
    echo '<meta name="msapplication-TileImage" content="' . esc_url( $icon_apple ) . '" />' . "\n";
}, 1 );

// Enqueue styles for Classic Editor (TinyMCE)
add_filter( 'mce_css', function ( $mce_css ) {
    $editor_style = get_template_directory_uri() . '/assets/css/editor-style.css';
    return ! empty( $mce_css ) ? $mce_css . ',' . $editor_style : $editor_style;
} );

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style( 'digilens-theme', get_stylesheet_uri(), array(), DIGILENS_THEME_VERSION );
}, 100 );

add_action( 'template_redirect', function () {
    if ( is_admin() ) { return; }

    // Dynamic WordPress rendering: Let single posts, categories, tags, author, and search run through WordPress templates
    if ( is_single() || is_singular( 'post' ) || is_category() || is_tag() || is_tax() || is_home() || is_archive() || is_search() ) {
        return;
    }

    $queried_id = get_queried_object_id();
    if ( $queried_id && get_post_type( $queried_id ) === 'post' ) {
        return;
    }

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
 * Initial one-time import of snapshot into WordPress Database on first run.
 * Once imported, database is the primary source of truth and user edits are preserved forever.
 */
add_action( 'init', function () {
    if ( get_option( 'digilens_initial_db_imported' ) ) { return; }
    update_option( 'digilens_initial_db_imported', 1 );
    if ( function_exists( 'digilens_snapshot_import_all' ) ) {
        digilens_snapshot_import_all();
    }
} );
