<?php
$snapshot = digilens_snapshot_for_current_request();
if ( $snapshot ) { status_header( 200 ); digilens_render_snapshot( $snapshot ); return; }
get_header(); ?>
<main style="max-width:900px;margin:80px auto;padding:0 24px"><h1>404</h1><p><?php esc_html_e( 'Không tìm thấy trang bạn yêu cầu.', 'digilens-snapshot' ); ?></p></main>
<?php get_footer();
