<?php
/**
 * The template for displaying Category Archive pages dynamically from WordPress Database.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>

<style>
.dl-archive-header {
    background: linear-gradient(135deg, #00163f 0%, #000a73 100%);
    color: #ffffff;
    padding: 50px 0 45px 0;
    text-align: center;
}
.dl-archive-title {
    font-size: clamp(1.6rem, 5vw, 2.5rem);
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 10px 0;
    line-height: 1.3;
}
.dl-archive-desc {
    font-size: clamp(0.95rem, 3vw, 1.1rem);
    color: #cbd5e1;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
}
.dl-archive-body {
    background: #ffffff;
    padding: 45px 0 80px 0;
}
.dl-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 28px;
    margin-bottom: 50px;
}
.dl-card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0,0,0,0.04);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.dl-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}
.dl-card-img-link {
    display: block;
    overflow: hidden;
    height: 210px;
    background: #f8fafc;
}
.dl-card-body {
    padding: 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

@media (max-width: 640px) {
    .dl-archive-header {
        padding: 35px 0 30px 0;
    }
    .dl-archive-body {
        padding: 25px 0 50px 0;
    }
    .dl-posts-grid {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 35px;
    }
    .dl-card-img-link {
        height: 180px;
    }
    .dl-card-body {
        padding: 16px;
    }
    .dl-card-title {
        font-size: 1.15rem !important;
    }
}
</style>

<div class="dl-archive-header">
    <div class="ast-container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        <span style="display: inline-block; background: rgba(0,176,240,0.2); border: 1px solid #00b0f0; color: #00b0f0; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; letter-spacing: 1.5px; margin-bottom: 12px;">
            CHUYÊN MỤC
        </span>
        <h1 class="dl-archive-title">
            <?php single_cat_title(); ?>
        </h1>
        <?php if ( category_description() ) : ?>
            <div class="dl-archive-desc">
                <?php echo category_description(); ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="dl-archive-body">
    <div class="ast-container" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
        
        <?php if ( have_posts() ) : ?>
            <div class="dl-posts-grid">
                <?php while ( have_posts() ) : the_post(); 
                    $feat_img = '';
                    if ( has_post_thumbnail() ) {
                        $feat_img = get_the_post_thumbnail_url( get_the_ID(), 'large' );
                    } else {
                        $meta_img = get_post_meta( get_the_ID(), '_digilens_featured_image_url', true );
                        if ( $meta_img ) { $feat_img = $meta_img; }
                    }
                    $ext_url = get_post_meta( get_the_ID(), '_digilens_external_url', true );
                    $card_link = $ext_url ? $ext_url : get_permalink();
                    $target_attr = $ext_url ? ' target="_blank" rel="noopener noreferrer"' : '';
                    $btn_text = ( is_category( 'media' ) || has_category( 'media' ) ) ? 'Xem thêm' : 'Đọc thêm';
                ?>
                <article id="post-<?php the_ID(); ?>" class="dl-card">
                    <?php if ( $feat_img ) : ?>
                        <a href="<?php echo esc_url( $card_link ); ?>"<?php echo $target_attr; // phpcs:ignore ?> class="dl-card-img-link">
                            <img src="<?php echo esc_url( $feat_img ); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                        </a>
                    <?php endif; ?>
                    
                    <div class="dl-card-body">
                        <div class="dl-card-meta" style="margin-bottom: 8px;">
                            <span class="dl-card-date" style="font-size: 0.85rem; color: #94a3b8;">
                                <?php echo esc_html( get_the_date( 'j \t\h\á\n\g n, Y' ) ); ?>
                            </span>
                        </div>
                        
                        <h2 class="dl-card-title" style="font-size: 1.22rem; font-weight: 700; line-height: 1.4; margin: 0 0 10px 0;">
                            <a href="<?php echo esc_url( $card_link ); ?>"<?php echo $target_attr; // phpcs:ignore ?> style="color: #000a73; text-decoration: none;">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="dl-card-excerpt" style="font-size: 0.92rem; color: #64748b; line-height: 1.6; margin-bottom: 18px; flex-grow: 1;">
                            <?php echo wp_trim_words( get_the_excerpt(), 22, '...' ); ?>
                        </div>
                        
                        <div class="dl-card-action">
                            <a href="<?php echo esc_url( $card_link ); ?>"<?php echo $target_attr; // phpcs:ignore ?> style="color: #00b0f0; font-weight: 700; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                                <?php echo esc_html( $btn_text ); ?> <span style="font-size: 1.1rem;">&raquo;</span>
                            </a>
                        </div>
                    </div>
                </article>
                <?php endwhile; ?>
            </div>

            <!-- Dynamic Pagination -->
            <div class="dl-pagination" style="text-align: center; margin-top: 40px;">
                <?php
                echo paginate_links( array(
                    'prev_text' => '&laquo; Trước',
                    'next_text' => 'Tiếp &raquo;',
                    'type'      => 'list',
                ) );
                ?>
            </div>

        <?php else : ?>
            <div style="text-align: center; padding: 60px 0;">
                <h3 style="color: #64748b;">Chưa có bài viết nào trong chuyên mục này.</h3>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color: #00b0f0; font-weight: 700; text-decoration: none; margin-top: 16px; display: inline-block;">Quay về trang chủ</a>
            </div>
        <?php endif; ?>

    </div>
</div>

<?php
get_footer();
