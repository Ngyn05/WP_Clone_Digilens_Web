<?php
define( 'WP_USE_THEMES', false );
require_once dirname( __DIR__, 4 ) . '/wp-load.php';

$posts = get_posts( array(
    'post_type'      => 'product',
    'posts_per_page' => -1,
    'post_status'    => 'publish',
) );

echo "=== ALL WOOCOMMERCE PRODUCTS & IMAGES ===\n";
foreach ( $posts as $p ) {
    $img_url = get_post_meta( $p->ID, '_digilens_image_url', true );
    $thumb_id = get_post_thumbnail_id( $p->ID );
    $thumb_url = $thumb_id ? wp_get_attachment_url( $thumb_id ) : '';
    echo "- ID: {$p->ID} | Title: {$p->post_title}\n";
    echo "  Meta Image: {$img_url}\n";
    echo "  Thumb URL: {$thumb_url}\n";
}
