<?php
/**
 * DigiLens Custom Post Metaboxes & Admin Editor Layout
 * Layout: Title -> Featured Image Box -> Content Editor -> Metadata Box (Author, Subtitle, Links, PDF)
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * 1. Render Featured Image Box directly AFTER TITLE (as shown in user mockup)
 */
add_action( 'edit_form_after_title', function ( $post ) {
    if ( 'post' !== $post->post_type ) { return; }

    $thumbnail_id = get_post_thumbnail_id( $post->ID );
    $featured_url = get_post_meta( $post->ID, '_digilens_featured_image_url', true );
    if ( ! $featured_url && $thumbnail_id ) {
        $featured_url = wp_get_attachment_image_url( $thumbnail_id, 'full' );
    }
    ?>
    <div class="postbox dl-after-title-img-box" id="dl-featured-image-after-title" style="margin-top:16px;margin-bottom:20px;">
        <div class="postbox-header" style="display:flex;justify-content:space-between;align-items:center;padding:10px 15px;background:#f8fafc;border-bottom:1px solid #e2e8f0;">
            <h2 class="hndle" style="margin:0;font-size:14px;font-weight:700;color:#0f172a;">🖼️ Ảnh đại diện (Featured Image)</h2>
        </div>
        <div class="inside" style="padding:16px;">
            <input type="hidden" id="dl_featured_image_url" name="dl_featured_image_url" value="<?php echo esc_url( $featured_url ); ?>" />
            <input type="hidden" id="dl_thumbnail_id" name="dl_thumbnail_id" value="<?php echo esc_attr( $thumbnail_id ); ?>" />
            
            <div id="dl_image_preview_wrapper" style="<?php echo $featured_url ? '' : 'display:none;'; ?>margin-bottom:12px;">
                <img id="dl_image_preview_tag" src="<?php echo esc_url( $featured_url ); ?>" alt="Preview" style="max-width:360px;max-height:200px;border-radius:6px;border:1px solid #cbd5e1;box-shadow:0 2px 8px rgba(0,0,0,0.06);display:block;" />
            </div>

            <div class="dl-img-btn-actions" style="display:flex;gap:10px;align-items:center;">
                <button type="button" class="button button-primary" id="dl_set_image_btn">
                    <?php echo $featured_url ? 'Thay đổi ảnh đại diện' : 'Đặt ảnh đại diện'; ?>
                </button>
                <button type="button" class="button" id="dl_delete_image_btn" style="<?php echo $featured_url ? '' : 'display:none;'; ?>color:#b91c1c;background:#fee2e2;border-color:#fca5a5;">
                    Xóa ảnh đại diện
                </button>
            </div>
            <p class="description" style="margin-top:6px;color:#64748b;font-size:12px;">
                Ảnh này sẽ hiển thị làm banner đầu bài viết và thumbnail đại diện trên trang danh mục / trang chủ.
            </p>
        </div>
    </div>

    <!-- Media Uploader Script for After-Title Image Box -->
    <script>
    jQuery(document).ready(function($) {
        var file_frame;
        $('#dl_set_image_btn').on('click', function(e) {
            e.preventDefault();
            if (file_frame) {
                file_frame.open();
                return;
            }
            file_frame = wp.media({
                title: 'Chọn hoặc Tải lên Ảnh Đại Diện',
                button: { text: 'Chọn ảnh này' },
                multiple: false
            });
            file_frame.on('select', function() {
                var attachment = file_frame.state().get('selection').first().toJSON();
                $('#dl_featured_image_url').val(attachment.url);
                $('#dl_thumbnail_id').val(attachment.id);
                $('#dl_image_preview_tag').attr('src', attachment.url);
                $('#dl_image_preview_wrapper').show();
                $('#dl_delete_image_btn').show();
                $('#dl_set_image_btn').text('Thay đổi ảnh đại diện');
                
                // Sync with WP native featured image if exists
                if ($('#_thumbnail_id').length) {
                    $('#_thumbnail_id').val(attachment.id);
                }
            });
            file_frame.open();
        });

        $('#dl_delete_image_btn').on('click', function(e) {
            e.preventDefault();
            $('#dl_featured_image_url').val('');
            $('#dl_thumbnail_id').val('');
            $('#dl_image_preview_wrapper').hide();
            $(this).hide();
            $('#dl_set_image_btn').text('Đặt ảnh đại diện');
            if ($('#_thumbnail_id').length) {
                $('#_thumbnail_id').val('-1');
            }
        });
    });
    </script>
    <?php
} );

/**
 * 2. Register Metabox below Content Editor for Subtitle, Author, Links, PDF, Media Contact
 */
add_action( 'add_meta_boxes', function () {
    add_meta_box(
        'digilens_post_settings_box',
        '⭐ Cấu hình chi tiết bài viết (DigiLens Post Metadata)',
        'digilens_render_post_settings_box',
        'post',
        'normal',
        'high'
    );
} );

/**
 * Render Metadata Box
 */
function digilens_render_post_settings_box( $post ) {
    wp_nonce_field( 'digilens_save_post_settings', 'digilens_post_nonce' );

    $subtitle       = get_post_meta( $post->ID, '_digilens_subtitle', true );
    $custom_author  = get_post_meta( $post->ID, '_digilens_custom_author', true );
    if ( ! $custom_author ) { $custom_author = 'DigiLens Inc.'; }
    $source_name    = get_post_meta( $post->ID, '_digilens_source_name', true );
    $external_url   = get_post_meta( $post->ID, '_digilens_external_url', true );
    $pdf_url        = get_post_meta( $post->ID, '_digilens_pdf_url', true );
    $media_contact  = get_post_meta( $post->ID, '_digilens_media_contact', true );
    ?>
    <div class="dl-admin-metabox-wrapper">
        
        <!-- Row 1: Subtitle / Dẫn nhập -->
        <div class="dl-admin-field-row">
            <label for="dl_subtitle" class="dl-admin-label">
                <strong>1. Phụ đề / Lời dẫn nổi bật (Subtitle / Lead)</strong>
                <span class="dl-admin-desc">Dòng mô tả in đậm nổi bật ngay dưới tiêu đề bài viết ngoài trang web.</span>
            </label>
            <textarea id="dl_subtitle" name="dl_subtitle" rows="2" class="dl-admin-textarea" placeholder="Nhập lời dẫn ngắn hoặc tóm tắt nổi bật cho bài viết..."><?php echo esc_textarea( $subtitle ); ?></textarea>
        </div>

        <!-- Row 2: Author & Source Name -->
        <div class="dl-admin-grid-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
            <div class="dl-admin-field-row" style="margin-bottom:0;">
                <label for="dl_custom_author" class="dl-admin-label">
                    <strong>2. Tên Tác giả (Author Name)</strong>
                    <span class="dl-admin-desc">Tên tác giả hiển thị ở đầu bài viết.</span>
                </label>
                <input type="text" id="dl_custom_author" name="dl_custom_author" value="<?php echo esc_attr( $custom_author ); ?>" class="dl-admin-input" placeholder="DigiLens Inc., Chris Pickett, Nima Shams..." />
            </div>
            <div class="dl-admin-field-row" style="margin-bottom:0;">
                <label for="dl_source_name" class="dl-admin-label">
                    <strong>3. Nguồn trích dẫn (Source Reference)</strong>
                    <span class="dl-admin-desc">Ví dụ: Forbes, CNET, VentureBeat, YouTube... (nếu có).</span>
                </label>
                <input type="text" id="dl_source_name" name="dl_source_name" value="<?php echo esc_attr( $source_name ); ?>" class="dl-admin-input" placeholder="Forbes, CNET, YouTube..." />
            </div>
        </div>

        <!-- Row 3: External / Video Source URL -->
        <div class="dl-admin-field-row">
            <label for="dl_external_url" class="dl-admin-label">
                <strong>4. Link nguồn ngoài / Video URL (External / Media Link)</strong>
                <span class="dl-admin-desc">Dành cho bài viết Tin tức hoặc Video truyền thông (YouTube, Vimeo, Forbes...).</span>
            </label>
            <input type="url" id="dl_external_url" name="dl_external_url" value="<?php echo esc_url( $external_url ); ?>" class="dl-admin-input" placeholder="https://www.youtube.com/watch?v=... hoặc https://forbes.com/..." />
        </div>

        <!-- Row 4: PDF Download Link & Media Contact -->
        <div class="dl-admin-grid-2col" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            <div class="dl-admin-field-row" style="margin-bottom:0;">
                <label for="dl_pdf_url" class="dl-admin-label">
                    <strong>5. Link tải Thông cáo báo chí (PDF Download URL)</strong>
                    <span class="dl-admin-desc">Đường dẫn tải file PDF tài liệu đính kèm.</span>
                </label>
                <input type="text" id="dl_pdf_url" name="dl_pdf_url" value="<?php echo esc_url( $pdf_url ); ?>" class="dl-admin-input" placeholder="https://.../press-release.pdf" />
            </div>

            <div class="dl-admin-field-row" style="margin-bottom:0;">
                <label for="dl_media_contact" class="dl-admin-label">
                    <strong>6. Liên hệ truyền thông &amp; Báo chí (Media Contact)</strong>
                    <span class="dl-admin-desc">Ví dụ: Brian Hamilton (brian.hamilton@digilens.com)</span>
                </label>
                <input type="text" id="dl_media_contact" name="dl_media_contact" value="<?php echo esc_attr( $media_contact ); ?>" class="dl-admin-input" placeholder="Brian Hamilton (press@digilens.com)" />
            </div>
        </div>

    </div>
    <?php
}

/**
 * 3. Save All Custom Fields (Featured Image + Metaboxes)
 */
add_action( 'save_post', function ( $post_id ) {
    if ( ! isset( $_POST['digilens_post_nonce'] ) || ! wp_verify_nonce( sanitize_key( $_POST['digilens_post_nonce'] ), 'digilens_save_post_settings' ) ) {
        return;
    }

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) { return; }
    if ( ! current_user_can( 'edit_post', $post_id ) ) { return; }

    // Save Featured Image URL & Thumbnail ID
    if ( isset( $_POST['dl_featured_image_url'] ) ) {
        $img_url = esc_url_raw( wp_unslash( $_POST['dl_featured_image_url'] ) );
        update_post_meta( $post_id, '_digilens_featured_image_url', $img_url );
    }

    if ( isset( $_POST['dl_thumbnail_id'] ) ) {
        $thumb_id = (int) $_POST['dl_thumbnail_id'];
        if ( $thumb_id > 0 ) {
            set_post_thumbnail( $post_id, $thumb_id );
        } elseif ( empty( $_POST['dl_featured_image_url'] ) ) {
            delete_post_thumbnail( $post_id );
        }
    }

    // Save Subtitle
    if ( isset( $_POST['dl_subtitle'] ) ) {
        update_post_meta( $post_id, '_digilens_subtitle', wp_kses_post( wp_unslash( $_POST['dl_subtitle'] ) ) );
    }

    // Save Custom Author
    if ( isset( $_POST['dl_custom_author'] ) ) {
        update_post_meta( $post_id, '_digilens_custom_author', sanitize_text_field( wp_unslash( $_POST['dl_custom_author'] ) ) );
    }

    // Save Source Name
    if ( isset( $_POST['dl_source_name'] ) ) {
        update_post_meta( $post_id, '_digilens_source_name', sanitize_text_field( wp_unslash( $_POST['dl_source_name'] ) ) );
    }

    // Save External URL
    if ( isset( $_POST['dl_external_url'] ) ) {
        update_post_meta( $post_id, '_digilens_external_url', esc_url_raw( wp_unslash( $_POST['dl_external_url'] ) ) );
    }

    // Save PDF URL
    if ( isset( $_POST['dl_pdf_url'] ) ) {
        update_post_meta( $post_id, '_digilens_pdf_url', esc_url_raw( wp_unslash( $_POST['dl_pdf_url'] ) ) );
    }

    // Save Media Contact
    if ( isset( $_POST['dl_media_contact'] ) ) {
        update_post_meta( $post_id, '_digilens_media_contact', sanitize_text_field( wp_unslash( $_POST['dl_media_contact'] ) ) );
    }
} );

/**
 * 4. Enqueue Admin Editor Styles & Media Scripts
 */
add_action( 'admin_enqueue_scripts', function ( $hook ) {
    if ( 'post.php' === $hook || 'post-new.php' === $hook ) {
        wp_enqueue_media();
        wp_enqueue_style( 'digilens-admin-post-edit', get_template_directory_uri() . '/assets/css/admin-post-edit.css', array(), DIGILENS_THEME_VERSION );
    }
} );
