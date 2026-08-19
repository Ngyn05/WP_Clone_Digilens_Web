<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

$snapshot = digilens_snapshot_for_current_request();
if ( $snapshot ) {
    if ( is_404() ) { status_header( 200 ); }
    digilens_render_snapshot( $snapshot );
    return;
}

get_header();
?>
<main id="primary" class="site-main" style="max-width:1200px;margin:60px auto;padding:0 24px">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<article <?php post_class(); ?>>
    <h1><?php the_title(); ?></h1>
    <?php the_content(); ?>
</article>
<?php endwhile; else : ?>
<h1><?php esc_html_e( 'Không tìm thấy trang', 'digilens-snapshot' ); ?></h1>
<?php endif; ?>
</main>
<?php get_footer(); ?>
