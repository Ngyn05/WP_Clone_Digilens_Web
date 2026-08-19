<?php
/**
 * The template for displaying General Archive pages dynamically from WordPress Database.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>

<div class="dl-archive-header" style="background: linear-gradient(135deg, #00163f 0%, #000a73 100%); color: #ffffff; padding: 60px 0; text-align: center;">
    <div class="ast-container" style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
        <span style="display: inline-block; background: rgba(0,176,240,0.2); border: 1px solid #00b0f0; color: #00b0f0; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; padding: 4px 12px; border-radius: 20px; letter-spacing: 1.5px; margin-bottom: 12px;">
            LƯU TRỮ
        </span>
        <h1 class="dl-archive-title" style="font-size: 2.5rem; font-weight: 700; color: #ffffff; margin: 0 0 12px 0;">
            <?php the_archive_title(); ?>
        </h1>
        <?php if ( get_the_archive_description() ) : ?>
            <div class="dl-archive-desc" style="font-size: 1.1rem; color: #cbd5e1; max-width: 700px; margin: 0 auto;">
                <?php the_archive_description(); ?>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="dl-archive-body" style="background: #ffffff; padding: 60px 0 100px 0;">
    <div class="ast-container" style="max-width: 1200px; margin: 0 auto; padding: 0 24px;">
        
        <?php if ( have_posts() ) : ?>
            <div class="dl-posts-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 32px; margin-bottom: 60px;">
                <?php while ( have_posts() ) : the_post(); 
                    $feat_img = '';
                    if ( has_post_thumbnail() ) {
                        $feat_img = get_the_post_thumbnail_url( get_the_ID(), 'large' );
                    } else {
                        $meta_img = get_post_meta( get_the_ID(), '_digilens_featured_image_url', true );
                        if ( $meta_img ) { $feat_img = $meta_img; }
                    }
                ?>
                <article id="post-<?php the_ID(); ?>" class="dl-card" style="background: #ffffff; border: 1px solid #f1f5f9; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04); display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s;">
                    <?php if ( $feat_img ) : ?>
                        <a href="<?php the_permalink(); ?>" class="dl-card-img-link" style="display: block; overflow: hidden; height: 210px; background: #f8fafc;">
                            <img src="<?php echo esc_url( $feat_img ); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;" />
                        </a>
                    <?php endif; ?>
                    
                    <div class="dl-card-body" style="padding: 24px; display: flex; flex-direction: column; flex-grow: 1;">
                        <div class="dl-card-meta" style="margin-bottom: 10px;">
                            <span class="dl-card-date" style="font-size: 0.85rem; color: #94a3b8;">
                                <?php echo esc_html( get_the_date( 'j \t\h\á\n\g n, Y' ) ); ?>
                            </span>
                        </div>
                        
                        <h2 class="dl-card-title" style="font-size: 1.25rem; font-weight: 700; line-height: 1.4; margin: 0 0 12px 0;">
                            <a href="<?php the_permalink(); ?>" style="color: #000a73; text-decoration: none;">
                                <?php the_title(); ?>
                            </a>
                        </h2>
                        
                        <div class="dl-card-excerpt" style="font-size: 0.95rem; color: #64748b; line-height: 1.6; margin-bottom: 20px; flex-grow: 1;">
                            <?php echo wp_trim_words( get_the_excerpt(), 24, '...' ); ?>
                        </div>
                        
                        <div class="dl-card-action">
                            <a href="<?php the_permalink(); ?>" style="color: #00b0f0; font-weight: 700; font-size: 0.9rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px;">
                                Đọc thêm <span style="font-size: 1.1rem;">&raquo;</span>
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
                <h3 style="color: #64748b;">Chưa có bài viết nào trong mục lưu trữ này.</h3>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color: #00b0f0; font-weight: 700; text-decoration: none; margin-top: 16px; display: inline-block;">Quay về trang chủ</a>
            </div>
        <?php endif; ?>

    </div>
</div>

<?php
get_footer();
