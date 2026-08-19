<?php
define( 'WP_USE_THEMES', false );
require_once dirname( __DIR__, 4 ) . '/wp-load.php';

$prods = get_posts( array(
    'post_type'   => 'product',
    'numberposts' => -1,
    'post_status' => 'any',
) );

$new_img = get_template_directory_uri() . '/snapshot/wp-content/uploads/2021/05/about-dv1-separated.jpg';

foreach ( $prods as $p ) {
    if ( strpos( strtolower( $p->post_title ), 'dv1' ) !== false || strpos( strtolower( $p->post_name ), 'dv1' ) !== false ) {
        update_post_meta( $p->ID, '_digilens_image_url', $new_img );
        echo "Updated Dv1 product ID {$p->ID} image meta to {$new_img}\n";
    }
}
