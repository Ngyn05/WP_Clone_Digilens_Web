<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3-150x150.png' ); ?>" sizes="32x32" />
<link rel="icon" href="<?php echo esc_url( get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3-300x300.png' ); ?>" sizes="192x192" />
<link rel="apple-touch-icon" href="<?php echo esc_url( get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3.png' ); ?>" />
<meta name="msapplication-TileImage" content="<?php echo esc_url( get_template_directory_uri() . '/snapshot/wp-content/uploads/2025/06/New-Site-Icon-v3.png' ); ?>" />
<?php wp_head(); ?>
</head>
<body <?php body_class( 'ast-desktop ast-page-builder-template astra-4.8.10 ast-header-custom-item-inside' ); ?>><?php wp_body_open(); ?>
<div class="hfeed site" id="page">
<?php
if ( function_exists( 'digilens_render_master_header' ) ) {
    echo digilens_render_master_header(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}
?>
<div id="content" class="site-content">
