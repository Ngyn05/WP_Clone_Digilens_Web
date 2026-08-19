<?php
/**
 * The template for displaying all single posts dynamically from WordPress Database.
 * Supports DigiLens Metaboxes: Subtitle, Featured Image, Author, PDF, Media Contact & External Sources.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

get_header();
?>

<div class="dl-single-post-wrapper" style="background:#ffffff;padding: 40px 0 80px 0;">
    <div class="ast-container" style="max-width: 1040px; margin: 0 auto; padding: 0 24px;">
        
        <?php while ( have_posts() ) : the_post(); 
            $post_id       = get_the_ID();
            $subtitle      = get_post_meta( $post_id, '_digilens_subtitle', true );
            $custom_author = get_post_meta( $post_id, '_digilens_custom_author', true );
            if ( ! $custom_author ) { $custom_author = 'DigiLens Inc.'; }
            $source_name   = get_post_meta( $post_id, '_digilens_source_name', true );
            $pdf_url       = get_post_meta( $post_id, '_digilens_pdf_url', true );
            $media_contact = get_post_meta( $post_id, '_digilens_media_contact', true );
            if ( $media_contact ) {
                $media_contact = preg_replace( '/[a-zA-Z0-9._%+-]+@(?:digilens|DigiLens)\.[a-zA-Z0-9._%+-]+/i', 'contact@digilens.vn', $media_contact );
            }

            $feat_img = '';
            if ( has_post_thumbnail() ) {
                $feat_img = get_the_post_thumbnail_url( $post_id, 'full' );
            } else {
                $meta_img = get_post_meta( $post_id, '_digilens_featured_image_url', true );
                if ( $meta_img ) { $feat_img = $meta_img; }
            }
        ?>
        
        <!-- Breadcrumbs -->
        <nav class="dl-breadcrumbs" style="font-size: 0.9rem; color: #6b7280; margin-bottom: 24px;">
            <a href="<?php echo esc_url( home_url( '/' ) ); ?>" style="color: #00b0f0; text-decoration: none;">Trang chủ</a>
            <span style="margin: 0 8px;">&raquo;</span>
            <span class="dl-cat-links"><?php the_category( ', ' ); ?></span>
            <span style="margin: 0 8px;">&raquo;</span>
            <span style="color: #111827;"><?php the_title(); ?></span>
        </nav>

        <article id="post-<?php the_ID(); ?>" <?php post_class( 'dl-article-single' ); ?>>
            
            <header class="dl-article-header" style="margin-bottom: 32px;">
                <div class="dl-article-badge" style="margin-bottom: 12px;">
                    <?php
                    $categories = get_the_category();
                    if ( ! empty( $categories ) ) {
                        foreach ( $categories as $cat ) {
                            echo '<a href="' . esc_url( get_category_link( $cat->term_id ) ) . '" class="dl-badge-link" style="display:inline-block;background:#00b0f0;color:#ffffff;font-size:0.75rem;font-weight:700;text-transform:uppercase;padding:4px 10px;border-radius:4px;text-decoration:none;margin-right:6px;letter-spacing:1px;">' . esc_html( $cat->name ) . '</a>';
                        }
                    }
                    ?>
                </div>

                <h1 class="entry-title" style="font-size: 2.25rem; font-weight: 700; line-height: 1.35; color: #000a73; margin: 0 0 16px 0; letter-spacing: -0.01em;">
                    <?php the_title(); ?>
                </h1>

                <?php if ( $subtitle ) : ?>
                <div class="dl-article-lead" style="font-size: 1.2rem; font-weight: 600; line-height: 1.6; color: #1e293b; margin-bottom: 20px; padding: 14px 18px; background: #f8fafc; border-left: 4px solid #00b0f0; border-radius: 0 6px 6px 0;">
                    <?php echo esc_html( $subtitle ); ?>
                </div>
                <?php endif; ?>

                <div class="dl-article-meta" style="font-size: 0.95rem; color: #6b7280; display: flex; align-items: center; gap: 18px; flex-wrap: wrap; margin-bottom: 8px;">
                    <span class="dl-meta-date">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:4px;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        <?php echo esc_html( get_the_date( 'j \t\h\á\n\g n, Y' ) ); ?>
                    </span>
                    <span class="dl-meta-author">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:4px;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        <?php echo esc_html( $custom_author ); ?>
                    </span>
                    <?php if ( $source_name ) : ?>
                    <span class="dl-meta-source" style="background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:4px;font-size:0.85rem;font-weight:600;">
                        Nguồn: <?php echo esc_html( $source_name ); ?>
                    </span>
                    <?php endif; ?>
                </div>
            </header>

            <?php if ( $feat_img ) : ?>
            <div class="dl-article-featured-image" style="margin-bottom: 36px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); text-align: center;">
                <img src="<?php echo esc_url( $feat_img ); ?>" alt="<?php the_title_attribute(); ?>" style="width: 100%; max-height: 540px; object-fit: cover; display: block;" />
            </div>
            <?php endif; ?>

            <div class="entry-content dl-article-content" itemprop="text" style="font-size: 1.0625rem; line-height: 1.8; color: #374151;">
                <?php the_content(); ?>
            </div>

            <!-- PDF Download & External Link Actions -->
            <?php if ( $pdf_url || $external_url ) : ?>
            <div class="dl-article-actions" style="margin-top: 36px; padding: 20px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
                <?php if ( $pdf_url ) : ?>
                <a href="<?php echo esc_url( $pdf_url ); ?>" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #000a73; color: #ffffff; padding: 10px 20px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 0.95rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Tải Thông cáo báo chí (PDF)
                </a>
                <?php endif; ?>

                <?php if ( $external_url ) : ?>
                <a href="<?php echo esc_url( $external_url ); ?>" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background: #00b0f0; color: #ffffff; padding: 10px 20px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 0.95rem;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Xem nguồn bài viết / video gốc
                </a>
                <?php endif; ?>
            </div>
            <?php endif; ?>

            <!-- Media Contact Info Box -->
            <?php if ( $media_contact ) : ?>
            <div class="dl-media-contact-box" style="margin-top: 32px; padding: 18px 24px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; color: #166534;">
                <strong style="display: block; font-size: 1rem; margin-bottom: 4px;">📞 Liên hệ truyền thông &amp; Báo chí:</strong>
                <span><?php echo esc_html( $media_contact ); ?></span>
            </div>
            <?php endif; ?>

            <?php if ( get_the_tags() ) : ?>
            <footer class="dl-article-footer" style="margin-top: 48px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
                <div class="dl-tags" style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                    <span style="font-weight: 700; color: #111827; font-size: 0.9rem;">Thẻ:</span>
                    <?php
                    $tags = get_the_tags();
                    foreach ( $tags as $t ) {
                        echo '<a href="' . esc_url( get_tag_link( $t->term_id ) ) . '" style="background:#f3f4f6;color:#4b5563;font-size:0.8rem;padding:4px 10px;border-radius:4px;text-decoration:none;transition:background 0.2s;">#' . esc_html( $t->name ) . '</a>';
                    }
                    ?>
                </div>
            </footer>
            <?php endif; ?>

            <!-- Next / Previous Post Navigation -->
            <nav class="dl-post-navigation" style="margin-top: 48px; padding-top: 32px; border-top: 1px solid #e5e7eb; display: flex; justify-content: space-between; gap: 20px; flex-wrap: wrap;">
                <div class="dl-nav-previous" style="flex: 1; min-width: 240px;">
                    <?php
                    $prev_post = get_previous_post();
                    if ( ! empty( $prev_post ) ) : ?>
                        <span style="font-size: 0.8rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">&laquo; Bài trước</span>
                        <a href="<?php echo esc_url( get_permalink( $prev_post->ID ) ); ?>" style="color: #000a73; font-weight: 700; text-decoration: none; font-size: 1rem; line-height: 1.4;">
                            <?php echo esc_html( get_the_title( $prev_post->ID ) ); ?>
                        </a>
                    <?php endif; ?>
                </div>
                <div class="dl-nav-next" style="flex: 1; min-width: 240px; text-align: right;">
                    <?php
                    $next_post = get_next_post();
                    if ( ! empty( $next_post ) ) : ?>
                        <span style="font-size: 0.8rem; color: #6b7280; text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 4px;">Bài tiếp theo &raquo;</span>
                        <a href="<?php echo esc_url( get_permalink( $next_post->ID ) ); ?>" style="color: #000a73; font-weight: 700; text-decoration: none; font-size: 1rem; line-height: 1.4;">
                            <?php echo esc_html( get_the_title( $next_post->ID ) ); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </nav>

        </article>

        <?php endwhile; ?>

    </div>
</div>

<?php
get_footer();
