<?php
/**
 * DigiLens WooCommerce Product Integration
 * Standard WooCommerce 'product' post type & 'product_cat' taxonomy integration.
 * Full CRUD directly in WooCommerce -> Products with custom fields and live store synchronization.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * 1. Declare WooCommerce theme support
 */
add_action( 'after_setup_theme', function () {
    add_theme_support( 'woocommerce' );
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
} );

/**
 * 2. Add Custom Meta Box on WooCommerce Product Edit Screen
 */
add_action( 'add_meta_boxes', function () {
    add_meta_box(
        'digilens_wc_product_details_box',
        __( '✦ Cấu hình Quang học DigiLens & Huy hiệu (Specs & Reference)', 'digilens-snapshot' ),
        'digilens_render_wc_product_metabox',
        'product',
        'normal',
        'high'
    );
} );

function digilens_render_wc_product_metabox( $post ) {
    wp_nonce_field( 'digilens_wc_product_save_nonce', 'digilens_wc_product_nonce' );

    $badge       = get_post_meta( $post->ID, '_digilens_badge', true );
    $badge_color = get_post_meta( $post->ID, '_digilens_badge_color', true ) ?: '#00f0ff';
    $ref_url     = get_post_meta( $post->ID, '_digilens_ref_url', true );
    $ref_title   = get_post_meta( $post->ID, '_digilens_ref_title', true );
    $custom_img  = get_post_meta( $post->ID, '_digilens_image_url', true );

    $specs = get_post_meta( $post->ID, '_digilens_specs', true );
    if ( ! is_array( $specs ) ) {
        $specs = array();
    }

    $highlights = get_post_meta( $post->ID, '_digilens_highlights', true );
    if ( is_array( $highlights ) ) {
        $highlights_text = implode( "\n", $highlights );
    } else {
        $highlights_text = (string) $highlights;
    }
    ?>
    <style>
        .dl-admin-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 15px; }
        .dl-field-group { margin-bottom: 15px; }
        .dl-field-group label { display: block; font-weight: 600; margin-bottom: 5px; color: #1e293b; }
        .dl-input { width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; box-sizing: border-box; }
        .dl-input:focus { border-color: #00f0ff; outline: none; box-shadow: 0 0 0 1px #00f0ff; }
        .dl-specs-admin-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .dl-specs-admin-table th, .dl-specs-admin-table td { padding: 8px; border: 1px solid #e2e8f0; text-align: left; }
        .dl-specs-admin-table th { background: #f8fafc; font-weight: 700; color: #475569; }
        .dl-btn-sm { padding: 4px 10px; border-radius: 4px; font-size: 12px; cursor: pointer; border: 1px solid #cbd5e1; background: #f1f5f9; }
        .dl-btn-danger { color: #b91c1c; border-color: #fca5a5; background: #fee2e2; }
    </style>

    <!-- 1. Huy hiệu (Badge) & Màu sắc -->
    <div class="dl-admin-grid-2">
        <div class="dl-field-group">
            <label for="dl_badge">🏷️ Nhãn / Huy hiệu nổi bật (Badge)</label>
            <input type="text" id="dl_badge" name="dl_badge" value="<?php echo esc_attr( $badge ); ?>" class="dl-input" placeholder="Ví dụ: SẢN PHẨM CHỦ LỰC, DEV KIT, 50° FOV..." />
        </div>
        <div class="dl-field-group">
            <label for="dl_badge_color">🎨 Màu sắc Huy hiệu (Hex Color)</label>
            <input type="color" id="dl_badge_color" name="dl_badge_color" value="<?php echo esc_attr( $badge_color ); ?>" style="width:100%;height:38px;padding:2px;border:1px solid #cbd5e1;border-radius:6px;cursor:pointer;" />
        </div>
    </div>

    <!-- 2. Liên kết bài giới thiệu trên Web -->
    <div class="dl-admin-grid-2">
        <div class="dl-field-group">
            <label for="dl_ref_url">🔗 Đường dẫn bài giới thiệu trên Web (Reference URL)</label>
            <input type="text" id="dl_ref_url" name="dl_ref_url" value="<?php echo esc_attr( $ref_url ); ?>" class="dl-input" placeholder="Ví dụ: /argo/ hoặc /waveguides/" />
            <small style="color:#64748b;">Dẫn tới trang giới thiệu tính năng gốc trên website</small>
        </div>
        <div class="dl-field-group">
            <label for="dl_ref_title">📝 Tiêu đề nút liên kết</label>
            <input type="text" id="dl_ref_title" name="dl_ref_title" value="<?php echo esc_attr( $ref_title ); ?>" class="dl-input" placeholder="Ví dụ: Xem trang giới thiệu ARGO™" />
        </div>
    </div>

    <!-- 3. Link ảnh trực tiếp fallback -->
    <div class="dl-field-group">
        <label for="dl_image_url">🖼️ Đường dẫn ảnh sản phẩm trực tiếp (Fallback Image URL)</label>
        <input type="text" id="dl_image_url" name="dl_image_url" value="<?php echo esc_attr( $custom_img ); ?>" class="dl-input" placeholder="http://.../DL-Argo-080923-01.jpg" />
        <small style="color:#64748b;">Nếu để trống, hệ thống sẽ sử dụng Ảnh sản phẩm (Product Image) chuẩn WooCommerce ở cột bên phải.</small>
    </div>

    <!-- 4. Bảng thông số kỹ thuật động -->
    <div class="dl-field-group" style="background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <label style="font-weight:700;font-size:15px;color:#0f172a;margin:0;">📊 Bảng Thông số Kỹ thuật Chi tiết</label>
            <button type="button" class="dl-btn-sm" id="dl-add-spec-row" style="background:#0284c7;color:#fff;border-color:#0284c7;font-weight:600;">+ Thêm thông số</button>
        </div>
        
        <table class="dl-specs-admin-table" id="dl-specs-table">
            <thead>
                <tr>
                    <th style="width:35%;">Tên thông số (Key)</th>
                    <th>Giá trị kỹ thuật (Value)</th>
                    <th style="width:60px;text-align:center;">Xóa</th>
                </tr>
            </thead>
            <tbody id="dl-specs-tbody">
                <?php if ( ! empty( $specs ) ) : ?>
                    <?php foreach ( $specs as $s_k => $s_v ) : ?>
                        <tr>
                            <td><input type="text" name="dl_specs_key[]" value="<?php echo esc_attr( $s_k ); ?>" class="dl-input" placeholder="Tên thông số..." /></td>
                            <td><input type="text" name="dl_specs_val[]" value="<?php echo esc_attr( $s_v ); ?>" class="dl-input" placeholder="Giá trị kỹ thuật..." /></td>
                            <td style="text-align:center;"><button type="button" class="dl-btn-sm dl-btn-danger dl-remove-row">&times;</button></td>
                        </tr>
                    <?php endforeach; ?>
                <?php else : ?>
                    <tr>
                        <td><input type="text" name="dl_specs_key[]" value="Vi xử lý" class="dl-input" /></td>
                        <td><input type="text" name="dl_specs_val[]" value="Qualcomm Snapdragon XR2 Gen 1" class="dl-input" /></td>
                        <td style="text-align:center;"><button type="button" class="dl-btn-sm dl-btn-danger dl-remove-row">&times;</button></td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>

    <!-- 5. Đặc điểm nổi bật -->
    <div class="dl-field-group">
        <label for="dl_highlights">🌟 Đặc điểm nổi bật (Key Highlights - Mỗi dòng một điểm)</label>
        <textarea id="dl_highlights" name="dl_highlights" rows="4" class="dl-input" style="font-family:inherit;"><?php echo esc_textarea( $highlights_text ); ?></textarea>
    </div>

    <script>
    jQuery(document).ready(function($) {
        $('#dl-add-spec-row').on('click', function(e) {
            e.preventDefault();
            var tr = '<tr>' +
                     '<td><input type="text" name="dl_specs_key[]" value="" class="dl-input" placeholder="Tên thông số..." /></td>' +
                     '<td><input type="text" name="dl_specs_val[]" value="" class="dl-input" placeholder="Giá trị kỹ thuật..." /></td>' +
                     '<td style="text-align:center;"><button type="button" class="dl-btn-sm dl-btn-danger dl-remove-row">&times;</button></td>' +
                     '</tr>';
            $('#dl-specs-tbody').append(tr);
        });

        $('#dl-specs-tbody').on('click', '.dl-remove-row', function(e) {
            e.preventDefault();
            $(this).closest('tr').remove();
        });
    });
    </script>
    <?php
}

/**
 * 3. Save WooCommerce Product Custom Metadata
 */
add_action( 'woocommerce_process_product_meta', function ( $post_id ) {
    if ( ! isset( $_POST['digilens_wc_product_nonce'] ) || ! wp_verify_nonce( $_POST['digilens_wc_product_nonce'], 'digilens_wc_product_save_nonce' ) ) {
        return;
    }

    if ( isset( $_POST['dl_badge'] ) ) {
        update_post_meta( $post_id, '_digilens_badge', sanitize_text_field( $_POST['dl_badge'] ) );
    }
    if ( isset( $_POST['dl_badge_color'] ) ) {
        update_post_meta( $post_id, '_digilens_badge_color', sanitize_hex_color( $_POST['dl_badge_color'] ) ?: '#00f0ff' );
    }
    if ( isset( $_POST['dl_ref_url'] ) ) {
        update_post_meta( $post_id, '_digilens_ref_url', sanitize_text_field( $_POST['dl_ref_url'] ) );
    }
    if ( isset( $_POST['dl_ref_title'] ) ) {
        update_post_meta( $post_id, '_digilens_ref_title', sanitize_text_field( $_POST['dl_ref_title'] ) );
    }
    if ( isset( $_POST['dl_image_url'] ) ) {
        update_post_meta( $post_id, '_digilens_image_url', esc_url_raw( $_POST['dl_image_url'] ) );
    }

    // Save Dynamic Specs
    if ( isset( $_POST['dl_specs_key'] ) && isset( $_POST['dl_specs_val'] ) ) {
        $keys = (array) $_POST['dl_specs_key'];
        $vals = (array) $_POST['dl_specs_val'];
        $specs_arr = array();
        for ( $i = 0; $i < count( $keys ); $i++ ) {
            $k = trim( sanitize_text_field( $keys[ $i ] ) );
            $v = trim( sanitize_text_field( $vals[ $i ] ) );
            if ( $k !== '' ) {
                $specs_arr[ $k ] = $v;
            }
        }
        update_post_meta( $post_id, '_digilens_specs', $specs_arr );
    } else {
        delete_post_meta( $post_id, '_digilens_specs' );
    }

    // Save Highlights
    if ( isset( $_POST['dl_highlights'] ) ) {
        $lines = explode( "\n", str_replace( "\r", "", $_POST['dl_highlights'] ) );
        $hl_arr = array();
        foreach ( $lines as $line ) {
            $l = trim( sanitize_text_field( $line ) );
            if ( $l !== '' ) {
                $hl_arr[] = $l;
            }
        }
        update_post_meta( $post_id, '_digilens_highlights', $hl_arr );
    }
} );

/**
 * 4. Helper Function: Fetch all WooCommerce Products for Frontend Store
 */
function digilens_get_store_products() {
    $theme_uri = get_template_directory_uri();
    $snapshot_uri = $theme_uri . '/snapshot';

    $args = array(
        'post_type'      => 'product',
        'post_status'    => 'publish',
        'posts_per_page' => -1,
        'orderby'        => 'menu_order date',
        'order'          => 'ASC',
    );

    $query = new WP_Query( $args );
    $products = array();

    if ( $query->have_posts() ) {
        while ( $query->have_posts() ) {
            $query->the_post();
            $p_id = get_the_ID();
            $wc_prod = function_exists( 'wc_get_product' ) ? wc_get_product( $p_id ) : null;

            // Categories
            $terms = get_the_terms( $p_id, 'product_cat' );
            $cat_slug = 'all';
            $cat_name = 'Sản phẩm DigiLens';
            if ( ! empty( $terms ) && ! is_wp_error( $terms ) ) {
                $cat_slug = $terms[0]->slug;
                $cat_name = $terms[0]->name;
            }

            $cat_map = array(
                'smartglasses' => 'Kính thông minh ARGO™',
                'waveguides'   => 'Ống dẫn sóng quang học',
                'devkits'      => 'Phần mềm & Bộ phát triển',
                'accessories'  => 'Phụ kiện chính hãng',
                'solutions'    => 'Giải pháp doanh nghiệp',
            );
            if ( isset( $cat_map[ $cat_slug ] ) ) {
                $cat_name = $cat_map[ $cat_slug ];
            }

            // Thumbnail
            $thumb = get_the_post_thumbnail_url( $p_id, 'full' );
            if ( ! $thumb ) {
                $thumb = get_post_meta( $p_id, '_digilens_image_url', true );
            }
            if ( ! $thumb || strpos( (string) $thumb, 'dv1-smartglasses-hero-v3' ) !== false ) {
                if ( strpos( strtolower( get_the_title( $p_id ) ), 'dv1' ) !== false ) {
                    $thumb = $snapshot_uri . '/wp-content/uploads/2021/05/about-dv1-separated.jpg';
                    update_post_meta( $p_id, '_digilens_image_url', $thumb );
                }
            }
            if ( ! $thumb ) {
                $thumb = $snapshot_uri . '/wp-content/uploads/2023/08/DL-Argo-080923-01.jpg';
            }

            // Price from WooCommerce
            $price_vnd = $wc_prod ? (int) $wc_prod->get_price() : (int) get_post_meta( $p_id, '_price', true );
            $price_usd = (int) round( $price_vnd / 25000 );

            // Specs & Highlights
            $specs = get_post_meta( $p_id, '_digilens_specs', true );
            if ( ! is_array( $specs ) ) { $specs = array(); }

            $highlights = get_post_meta( $p_id, '_digilens_highlights', true );
            if ( ! is_array( $highlights ) ) { $highlights = array(); }

            // Stock
            $in_stock = $wc_prod ? $wc_prod->is_in_stock() : ( get_post_meta( $p_id, '_stock_status', true ) !== 'outofstock' );

            $products[] = array(
                'id'            => 'prod-' . $p_id,
                'db_id'         => $p_id,
                'permalink'     => get_permalink( $p_id ),
                'sku'           => $wc_prod ? $wc_prod->get_sku() : '',
                'category'      => $cat_slug,
                'category_slug' => $cat_slug,
                'category_name' => $cat_name,
                'badge'         => get_post_meta( $p_id, '_digilens_badge', true ) ?: 'DIGILENS',
                'badge_color'   => get_post_meta( $p_id, '_digilens_badge_color', true ) ?: '#00f0ff',
                'name'          => get_the_title(),
                'tagline'       => get_the_excerpt() ?: wp_trim_words( get_the_content(), 25 ),
                'price_vnd'     => $price_vnd,
                'price_usd'     => $price_usd,
                'image'         => $thumb,
                'ref_url'       => get_post_meta( $p_id, '_digilens_ref_url', true ) ?: '',
                'ref_title'     => get_post_meta( $p_id, '_digilens_ref_title', true ) ?: '',
                'specs'         => $specs,
                'highlights'    => $highlights,
                'in_stock'      => $in_stock,
            );
        }
        wp_reset_postdata();
    }

    return $products;
}

/**
 * 5. Auto Seed WooCommerce Products on First Run
 */
function digilens_seed_woocommerce_products_if_empty() {
    $existing = get_posts( array(
        'post_type'      => 'product',
        'posts_per_page' => 1,
        'post_status'    => 'any',
        'fields'         => 'ids',
    ) );

    if ( ! empty( $existing ) ) {
        return; // WooCommerce products already exist
    }

    $snapshot_uri = get_template_directory_uri() . '/snapshot';

    // 9 Authentic DigiLens Products
    $seed_data = array(
        array(
            'sku'           => 'DL-ARGO-ENT',
            'slug'          => 'argo-enterprise',
            'title'         => 'Kính thông minh DigiLens ARGO™ (Enterprise Edition)',
            'excerpt'       => 'Kính thông minh AR tất cả trong một (Standalone) đầu tiên trên thế giới dành riêng cho doanh nghiệp và nhân sự hiện trường.',
            'category_slug' => 'smartglasses',
            'category_name' => 'Kính thông minh ARGO™',
            'badge'         => 'SẢN PHẨM CHỦ LỰC',
            'badge_color'   => '#00f0ff',
            'price'         => 54990000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2023/08/DL-Argo-080923-01.jpg',
            'ref_url'       => home_url( '/argo/' ),
            'ref_title'     => 'Xem trang giới thiệu ARGO™',
            'specs'         => array(
                'Vi xử lý'          => 'Qualcomm Snapdragon XR2 Gen 1 (Chuyên dụng cho XR)',
                'Màn hình'          => 'Full Color RGB Waveguide (Crystal30™ siêu sáng)',
                'Độ sáng quang học' => '>2.500 nits (Hiển thị rõ ràng dưới ánh nắng gắt ngoài trời)',
                'Trường nhìn (FOV)' => '30° True Optical Field of View',
                'Chuẩn kháng nước'  => 'IP67 chống bụi, kháng nước và chống va đập công nghiệp',
                'Thời lượng pin'    => 'Lên tới 8 giờ liên tục (Hệ thống pin kép Hot-swappable tháo lắp nóng)',
                'Giao tiếp giọng nói'=> 'Micro đa hướng chống ồn lọc âm gió & giọng nói đa ngôn ngữ',
                'Quản lý thiết bị'  => 'Tương thích Microsoft Intune & VMware Workspace ONE',
            ),
            'highlights'    => array(
                'Thiết bị độc lập hoàn toàn, không cần dây cáp kết nối máy tính cồng kềnh',
                'Tích hợp camera độ phân giải cao 48MP tự động lấy nét cho chuyên gia hỗ trợ từ xa',
                'Màn hình dẫn sóng trong suốt giữ tương tác mắt (Eye-contact) tự nhiên với mọi người xung quanh',
                'Được tin dùng trong các ngành: y tế phẫu thuật, hàng không, viễn thông, và sản xuất công nghiệp nặng',
            ),
        ),
        array(
            'sku'           => 'DL-DV1-DEV',
            'slug'          => 'dv1-developer',
            'title'         => 'DigiLens Design v1 (Dv1) Developer Smartglasses',
            'excerpt'       => 'Kính thông minh siêu nhẹ dạng Module dành riêng cho các kỹ sư và chuyên gia phát triển ứng dụng không gian 3D.',
            'category_slug' => 'smartglasses',
            'category_name' => 'Kính thông minh ARGO™',
            'badge'         => 'DÀNH CHO NHÀ PHÁT TRIỂN',
            'badge_color'   => '#a855f7',
            'price'         => 39500000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2021/05/about-dv1-separated.jpg',
            'ref_url'       => home_url( '/company/' ),
            'ref_title'     => 'Xem giới thiệu Design v1',
            'specs'         => array(
                'Trọng lượng'       => 'Siêu nhẹ chỉ 98g (Thiết kế công thái học đeo thoải mái cả ngày)',
                'Cảm biến không gian'=> 'Dual 6DoF Spatial Tracking Cameras, 9-Axis IMU Sensor',
                'Khung gọng'        => 'Hợp kim Magnesium Titanium siêu bền cao cấp',
                'Cổng truyền dẫn'   => 'USB-C DisplayPort với độ trễ cực thấp < 5ms',
                'Nền tảng SDK'      => 'Tương thích Qualcomm Snapdragon Spaces™, Unity, Unreal Engine & OpenXR',
            ),
            'highlights'    => array(
                'Truy cập toàn quyền dữ liệu thô từ cụm cảm biến và camera 6DoF',
                'Khung mô-đun linh hoạt cho phép tùy biến thấu kính và cảm biến theo nhu cầu R&D',
                'Tối ưu hóa cho các dự án nghiên cứu AI thị giác máy tính và điện toán không gian',
            ),
        ),
        array(
            'sku'           => 'DL-C30-WG',
            'slug'          => 'crystal30-waveguide',
            'title'         => 'Mô-đun thấu kính dẫn sóng Crystal30™ Waveguide',
            'excerpt'       => 'Thấu kính dẫn sóng quang học thế hệ mới của DigiLens với hiệu suất dẫn đầu ngành và độ truyền sáng tự nhiên >85%.',
            'category_slug' => 'waveguides',
            'category_name' => 'Ống dẫn sóng (Waveguides)',
            'badge'         => 'QUANG HỌC TIÊU BIỂU',
            'badge_color'   => '#3b82f6',
            'price'         => 21500000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2024/05/DL-Crystal30-social-043024-02.jpg',
            'ref_url'       => home_url( '/waveguides/' ),
            'ref_title'     => 'Xem công nghệ Ống dẫn sóng',
            'specs'         => array(
                'Độ truyền sáng tự nhiên' => '>85% (Trong suốt hoàn hảo, không tối màu)',
                'Hiệu suất quang học'     => '350+ nits/lumen (Tiết kiệm năng lượng vượt bậc)',
                'Hiện tượng Eye Glow'     => 'Cực thấp (Ánh sáng không bị rò rỉ ra mắt ngoài)',
                'Độ dày mô-đun'           => '1.15 mm (Siêu mỏng nhẹ cho kính thời trang)',
                'Quy trình chế tạo'       => 'Vật liệu photopolymer lỏng CrystalClear® độc quyền',
            ),
            'highlights'    => array(
                'Cấu trúc dẫn sóng nhiễu xạ 3 lớp màu RGB cho độ trung thực màu sắc tối đa',
                'Khả năng mở rộng sản xuất hàng loạt với chi phí tối ưu theo quy trình in phun',
                'Sẵn sàng tích hợp vào kính AR tiêu dùng, mũ bảo hộ thông minh và thiết bị XR đeo đầu',
            ),
        ),
        array(
            'sku'           => 'DL-C30-INSIGHT',
            'slug'          => 'crystal30-insight-kit',
            'title'         => 'Bộ công cụ kiểm thử quang học Crystal30™ Insight Kit',
            'excerpt'       => 'Bộ kit hoàn chỉnh tích hợp sẵn thấu kính Crystal30™ và máy chiếu Avegant LCoS Light Engine phục vụ đánh giá quang học.',
            'category_slug' => 'devkits',
            'category_name' => 'Bộ phát triển & SDK',
            'badge'         => 'INSIGHT KIT',
            'badge_color'   => '#f59e0b',
            'price'         => 28500000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2024/08/AWE24-waveguides-1200px-72-1-e1723589587247.jpg',
            'ref_url'       => home_url( '/waveguides/' ),
            'ref_title'     => 'Xem chi tiết Insight Kit trên Web',
            'specs'         => array(
                'Mô-đun thấu kính' => 'DigiLens Crystal30™ RGB Waveguide Display',
                'Máy chiếu nguồn'  => 'Avegant LCoS Micro-Display Light Engine',
                'Cổng kết nối'     => 'HDMI / USB-C Video Input & Phần mềm điều khiển trực tiếp',
                'Tính năng'        => 'Nhanh chóng tạo, xem và kiểm thử nội dung đồ họa không gian thời gian thực',
            ),
            'highlights'    => array(
                'Được thiết kế cho các kỹ sư quang học và nhà phát triển nội dung AR',
                'Đi kèm bộ phần mềm tinh chỉnh độ sáng, cân bằng màu và góc quan sát',
                'Rút ngắn thời gian đưa sản phẩm kính AR ra thị trường từ nhiều năm xuống vài tháng',
            ),
        ),
        array(
            'sku'           => 'DL-C50-PLASTIC',
            'slug'          => 'crystal50-plastic',
            'title'         => 'Mô-đun ống dẫn sóng nhựa Crystal50™ Plastic Waveguide',
            'excerpt'       => 'Ống dẫn sóng nhựa polymer đầu tiên trên thế giới có khả năng sản xuất hàng loạt, trường nhìn mở rộng 50° FOV.',
            'category_slug' => 'waveguides',
            'category_name' => 'Ống dẫn sóng (Waveguides)',
            'badge'         => 'ĐỘT PHÁ 50° FOV',
            'badge_color'   => '#10b981',
            'price'         => 32000000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2021/05/about-c50-microscope-e1724972740401.jpg',
            'ref_url'       => home_url( '/waveguides/' ),
            'ref_title'     => 'Xem công nghệ Ống dẫn sóng nhựa',
            'specs'         => array(
                'Trường nhìn (FOV)'        => '50° Diagonal (Góc nhìn cực rộng cho trải nghiệm điện ảnh)',
                'Chất liệu'                => 'Optical Plastic Polymer cao cấp (Nhẹ hơn 50% so với thủy tinh)',
                'Độ an toàn'               => 'Chống vỡ, chống rạn nứt tuyệt đối khi va đập mạnh',
                'Hợp tác sản xuất'         => 'Hợp tác phát triển chiến lược cùng Mitsubishi Chemical Corporation',
            ),
            'highlights'    => array(
                'Mở rộng không gian hiển thị đa màn hình ảo 3D trong tầm mắt',
                'Khối lượng thấu kính cực nhẹ chỉ 12g, mở đường cho kính AR đại trà sử dụng hàng ngày',
                'Đạt giải thưởng Prism Award cho sáng tạo quang học xuất sắc',
            ),
        ),
        array(
            'sku'           => 'DL-ARGO-RX',
            'slug'          => 'argo-prescription-insert',
            'title'         => 'Khung gắn thấu kính cận / viễn thị ARGO™ Prescription Insert',
            'excerpt'       => 'Phụ kiện chính hãng tháo lắp từ tính nam châm nam châm cao cấp, cá nhân hóa theo đơn kính khúc xạ của từng kỹ sư.',
            'category_slug' => 'accessories',
            'category_name' => 'Phụ kiện chính hãng',
            'badge'         => 'PHỤ KIỆN CHÍNH HÃNG',
            'badge_color'   => '#06b6d4',
            'price'         => 3800000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2025/04/Argo_Corrective_00003_650x650.png',
            'ref_url'       => home_url( '/argo/' ),
            'ref_title'     => 'Xem phụ kiện trên trang ARGO™',
            'specs'         => array(
                'Cơ chế khóa'      => 'Khóa từ tính nam châm Neodymium Quick-Snap tiện lợi',
                'Chất liệu khung'  => 'Nhựa y tế Polycarbonate siêu bền kháng gãy',
                'Dải độ mắt hỗ trợ'=> 'Cận thị: 0 đến -10.00 Diop | Loạn thị: 0 đến -4.00 Diop',
                'Trọng lượng'      => 'Chỉ 8.5g (Bao gồm cả tròng kính)',
            ),
            'highlights'    => array(
                'Lắp và tháo rời chỉ trong 1 giây mà không cần bất kỳ dụng cụ nào',
                'Không làm giảm trường nhìn (FOV) hay độ truyền sáng của kính thông minh ARGO',
                'Dễ dàng thay đổi người sử dụng trong cùng một ca làm việc',
            ),
        ),
        array(
            'sku'           => 'DL-ARGO-CASE',
            'slug'          => 'argo-industrial-dock',
            'title'         => 'Hộp bảo vệ chống sốc & Trạm sạc đa năng ARGO™ Carry Case',
            'excerpt'       => 'Hộp chống sốc chuẩn quân sự MIL-STD-810H tích hợp trạm sạc pin dự phòng chuyên dụng cho thiết bị ARGO™.',
            'category_slug' => 'accessories',
            'category_name' => 'Phụ kiện chính hãng',
            'badge'         => 'PHỤ KIỆN CHÍNH HÃNG',
            'badge_color'   => '#06b6d4',
            'price'         => 7500000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2024/10/Digilens-Argo-Tech-Specs-100324-1024x552.jpg',
            'ref_url'       => home_url( '/argo/' ),
            'ref_title'     => 'Xem thông số kỹ thuật ARGO™',
            'specs'         => array(
                'Pin dự phòng tích hợp' => '15.000 mAh Li-ion (Sạc đầy thiết bị ARGO 3 lần liên tục)',
                'Cổng sạc ra'           => 'Dual USB-C Power Delivery 65W sạc nhanh đồng thời',
                'Tiêu chuẩn bảo vệ'     => 'MIL-STD-810H chống va đập rơi từ 2m & Kháng nước IP67',
                'Đệm định hình'         => 'Mút EVA cao cấp cắt CNC chính xác ôm trọn thấu kính và thân kính',
            ),
            'highlights'    => array(
                'Tích hợp đèn LED thông minh báo dung lượng pin 4 cấp độ',
                'Có van cân bằng áp suất tự động bảo vệ thiết bị khi di chuyển trên máy bay',
                'Khóa cài bảo mật chắc chắn, sẵn sàng cho môi trường làm việc khắc nghiệt',
            ),
        ),
        array(
            'sku'           => 'DL-ARGO-NEXT',
            'slug'          => 'argo-next-program',
            'title'         => 'Chương trình chuyển đổi doanh nghiệp ARGO Next (ARGO Next Program)',
            'excerpt'       => 'Chương trình chuyển đổi chiến lược giúp doanh nghiệp nâng cấp mượt mà từ mọi thiết bị XR thế hệ cũ sang hệ sinh thái ARGO™.',
            'category_slug' => 'devkits',
            'category_name' => 'Chương trình & Giải pháp',
            'badge'         => 'CHƯƠNG TRÌNH DOANH NGHIỆP',
            'badge_color'   => '#8b5cf6',
            'price'         => 45000000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2025/05/ARGO-angled-1_2200px.jpg',
            'ref_url'       => home_url( '/category/press-release/' ),
            'ref_title'     => 'Xem thông cáo báo chí ARGO Next',
            'specs'         => array(
                'Hỗ trợ thiết bị'  => 'Chuyển đổi ứng dụng từ HoloLens, RealWear, Vuzix, Magic Leap sang ARGO',
                'Gói dịch vụ'      => 'Đào tạo kỹ sư chuyên sâu, tư vấn kiến trúc phần mềm & chuyển giao SDK',
                'Thời gian hỗ trợ' => '12 tháng đồng hành kỹ thuật ưu tiên 24/7 từ đội ngũ kỹ sư DigiLens',
                'Bản quyền phần mềm'=> 'Đi kèm bộ license phần mềm số hóa quy trình công nghiệp và quản lý thiết bị',
            ),
            'highlights'    => array(
                'Bảo vệ khoản đầu tư dài hạn cho chiến lược chuyển đổi số của doanh nghiệp',
                'Chuyển đổi các ứng dụng Unity/OpenXR hiện có sang nền tảng ARGO trong thời gian ngắn nhất',
                'Cam kết vận hành ổn định trên dây chuyền sản xuất thực tế',
            ),
        ),
        array(
            'sku'           => 'DL-TAQ-MANIFEST',
            'slug'          => 'taqtile-manifest-software',
            'title'         => 'Bộ phần mềm số hóa quy trình công nghiệp Taqtile Manifest cho ARGO™',
            'excerpt'       => 'Giải pháp phần mềm hướng dẫn số hóa quy trình 3D và kết nối chuyên gia từ xa tối ưu hóa riêng cho kính DigiLens ARGO™.',
            'category_slug' => 'devkits',
            'category_name' => 'Phần mềm & SDK',
            'badge'         => 'PHẦN MỀM TÍCH HỢP',
            'badge_color'   => '#f59e0b',
            'price'         => 16800000,
            'image'         => $snapshot_uri . '/wp-content/uploads/2024/07/taqtile-announces-manifest-for-argo-1024x523.png',
            'ref_url'       => home_url( '/media/' ),
            'ref_title'     => 'Xem bài viết đối tác Taqtile Manifest',
            'specs'         => array(
                'Nền tảng'         => 'Tối ưu hóa 100% cho hệ điều hành DigiOS trên ARGO™',
                'Bản quyền'        => 'Gói 1 năm License Doanh nghiệp đám mây',
                'Tính năng'        => 'Hướng dẫn công việc 3D trực quan, Video AR hỗ trợ chuyên gia từ xa',
                'Tích hợp hạ tầng' => 'Kết nối liền mạch hệ thống ERP/MES (SAP, IBM Maximo, Microsoft Dynamics)',
            ),
            'highlights'    => array(
                'Giảm 80% thời gian đào tạo và chuyển giao công nghệ cho nhân sự mới',
                'Cắt giảm đến 70% sai sót kỹ thuật tại hiện trường nhờ chỉ dẫn không gian 3D',
                'Lưu trữ hồ sơ kiểm định kỹ thuật số tự động theo chuẩn ISO',
            ),
        ),
    );

    foreach ( $seed_data as $data ) {
        $post_id = wp_insert_post( array(
            'post_title'   => $data['title'],
            'post_name'    => $data['slug'],
            'post_excerpt' => $data['excerpt'],
            'post_content' => $data['excerpt'],
            'post_status'  => 'publish',
            'post_type'    => 'product',
        ) );

        if ( $post_id && ! is_wp_error( $post_id ) ) {
            // Assign WooCommerce Category
            wp_set_object_terms( $post_id, $data['category_slug'], 'product_cat' );

            // Set WooCommerce Standard Product Data
            wp_set_object_terms( $post_id, 'simple', 'product_type' );
            update_post_meta( $post_id, '_sku', $data['sku'] );
            update_post_meta( $post_id, '_regular_price', $data['price'] );
            update_post_meta( $post_id, '_price', $data['price'] );
            update_post_meta( $post_id, '_visibility', 'visible' );
            update_post_meta( $post_id, '_stock_status', 'instock' );
            update_post_meta( $post_id, '_manage_stock', 'no' );
            update_post_meta( $post_id, '_virtual', 'no' );
            update_post_meta( $post_id, '_downloadable', 'no' );

            // Save DigiLens Custom Metadata
            update_post_meta( $post_id, '_digilens_badge', $data['badge'] );
            update_post_meta( $post_id, '_digilens_badge_color', $data['badge_color'] );
            update_post_meta( $post_id, '_digilens_ref_url', $data['ref_url'] );
            update_post_meta( $post_id, '_digilens_ref_title', $data['ref_title'] );
            update_post_meta( $post_id, '_digilens_image_url', $data['image'] );
            update_post_meta( $post_id, '_digilens_specs', $data['specs'] );
            update_post_meta( $post_id, '_digilens_highlights', $data['highlights'] );
        }
    }
}

// Auto seed WooCommerce products on init if table is empty
add_action( 'init', 'digilens_seed_woocommerce_products_if_empty', 20 );

/**
 * Create a real WooCommerce Order from Quote / Consultation form submission (4 fields: sdt, email, hoten, diachi)
 */
function digilens_ajax_create_quote_order() {
    $product_id = isset( $_POST['product_id'] ) ? intval( $_POST['product_id'] ) : 0;
    $phone      = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
    $email      = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    $name       = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
    $address    = isset( $_POST['address'] ) ? sanitize_textarea_field( wp_unslash( $_POST['address'] ) ) : '';
    $method     = isset( $_POST['method'] ) ? sanitize_text_field( wp_unslash( $_POST['method'] ) ) : 'quote';

    if ( empty( $name ) && ! empty( $phone ) ) {
        $name = 'Khách hàng SĐT: ' . $phone;
    }

    if ( empty( $phone ) ) {
        wp_send_json_error( array( 'message' => 'Vui lòng cung cấp số điện thoại.' ) );
    }

    // Create WooCommerce Order
    if ( function_exists( 'wc_create_order' ) ) {
        $order = wc_create_order();

        // Add Product to order if selected
        if ( $product_id > 0 ) {
            $product = wc_get_product( $product_id );
            if ( $product ) {
                $order->add_product( $product, 1 );
            }
        }

        // Set Customer Address & Details
        $addr_data = array(
            'first_name' => $name,
            'email'      => $email ?: 'khachhang.' . preg_replace( '/[^0-9]/', '', $phone ) . '@digilens.vn',
            'phone'      => $phone,
            'address_1'  => $address ?: 'Yêu cầu báo giá trực tuyến',
        );

        $order->set_address( $addr_data, 'billing' );
        $order->set_address( $addr_data, 'shipping' );

        // Customer Note & Metadata
        $note = "LOẠI YÊU CẦU: " . ( $method === 'phone' ? 'Gọi lại tư vấn miễn phí' : 'Báo giá sản phẩm' ) . "\n"
              . "SỐ ĐIỆN THOẠI (sdt): " . $phone . "\n"
              . "EMAIL (email): " . ( $email ?: 'N/A' ) . "\n"
              . "HỌ VÀ TÊN (hoten): " . $name . "\n"
              . "ĐỊA CHỈ (diachi): " . ( $address ?: 'N/A' );

        $order->set_customer_note( $note );
        $order->set_payment_method( 'bacs' );
        $order->set_payment_method_title( 'Yêu cầu Báo giá' );
        $order->set_status( 'processing', 'Đơn yêu cầu báo giá mới từ Website DigiLens' );

        $order->calculate_totals();
        $order_id = $order->save();
        $order_code = '#DL-' . $order_id;

        wp_send_json_success( array(
            'order_id'   => $order_id,
            'order_code' => $order_code,
            'message'    => 'Đơn yêu cầu báo giá đã được ghi nhận thành công!',
        ) );
    } else {
        $order_id = wp_insert_post( array(
            'post_type'    => 'shop_order',
            'post_title'   => 'Yêu cầu báo giá từ ' . $name,
            'post_status'  => 'wc-processing',
            'post_content' => "SĐT: {$phone}\nEmail: {$email}\nHọ tên: {$name}\nĐịa chỉ: {$address}",
        ) );
        $order_code = '#DL-' . $order_id;

        $admin_email = get_option( 'admin_email' );
        if ( is_email( $admin_email ) ) {
            $mail_subject = sprintf( '[DigiLens Việt Nam] Yêu cầu tư vấn %s: %s', $order_code, $phone );
            $mail_body = "Kính gửi Quản trị viên DigiLens Việt Nam,\n\n"
                       . "Số điện thoại: {$phone}\nEmail: {$email}\nHọ và tên: {$name}\nĐịa chỉ: {$address}\n\n"
                       . "Trân trọng,\n"
                       . "Hệ thống DigiLens Việt Nam";
            wp_mail( $admin_email, $mail_subject, $mail_body );
        }

        wp_send_json_success( array(
            'order_id'   => $order_id,
            'order_code' => $order_code,
            'message'    => 'Đơn yêu cầu báo giá đã được ghi nhận!',
        ) );
    }
}
add_action( 'wp_ajax_digilens_create_order', 'digilens_ajax_create_quote_order' );
add_action( 'wp_ajax_nopriv_digilens_create_order', 'digilens_ajax_create_quote_order' );

/**
 * 5. WooCommerce Email Customizations: 100% Vietnamese & No Images
 */
// Remove product thumbnail image from WooCommerce emails
add_filter( 'woocommerce_email_order_items_args', function( $args ) {
    $args['show_image'] = false;
    $args['show_sku']   = false;
    $args['image_size'] = array( 0, 0 );
    return $args;
}, 999 );

add_filter( 'woocommerce_email_order_item_thumbnail', '__return_false', 999 );

// Localize WooCommerce Email Subjects & Headings to Vietnamese with DigiLens Việt Nam branding
add_filter( 'woocommerce_email_subject_customer_processing_order', function( $subject, $order ) {
    $num = $order ? $order->get_order_number() : '';
    return sprintf( '[DigiLens Việt Nam] Xác nhận yêu cầu báo giá #DL-%s', $num );
}, 999, 2 );

add_filter( 'woocommerce_email_heading_customer_processing_order', function( $heading, $order ) {
    return 'Cảm ơn bạn đã gửi yêu cầu';
}, 999, 2 );

add_filter( 'woocommerce_email_subject_new_order', function( $subject, $order ) {
    $num = $order ? $order->get_order_number() : '';
    return sprintf( '[DigiLens Việt Nam] Đơn yêu cầu mới #DL-%s', $num );
}, 999, 2 );

add_filter( 'woocommerce_email_heading_new_order', function( $heading, $order ) {
    return 'Đơn yêu cầu mới từ khách hàng';
}, 999, 2 );

add_filter( 'woocommerce_email_subject_customer_completed_order', function( $subject, $order ) {
    $num = $order ? $order->get_order_number() : '';
    return sprintf( '[DigiLens Việt Nam] Yêu cầu #DL-%s đã hoàn tất xử lý', $num );
}, 999, 2 );

add_filter( 'woocommerce_email_heading_customer_completed_order', function( $heading, $order ) {
    return 'Yêu cầu đã được xử lý hoàn tất';
}, 999, 2 );

add_filter( 'woocommerce_email_subject_customer_on_hold_order', function( $subject, $order ) {
    $num = $order ? $order->get_order_number() : '';
    return sprintf( '[DigiLens Việt Nam] Đang xử lý yêu cầu #DL-%s', $num );
}, 999, 2 );

add_filter( 'woocommerce_email_heading_customer_on_hold_order', function( $heading, $order ) {
    return 'Đang xử lý yêu cầu của bạn';
}, 999, 2 );

// Translate WooCommerce core email text strings to Vietnamese
add_filter( 'gettext', function( $translation, $text, $domain ) {
    if ( 'woocommerce' === $domain || 'default' === $domain ) {
        static $wc_vn_map = array(
            'Thank you for your order' => 'Cảm ơn bạn đã gửi yêu cầu',
            'Just to let you know — we’ve received your order, and it is now being processed.' => 'DigiLens Việt Nam đã nhận được yêu cầu của bạn và đang tiến hành xử lý.',
            'Just to let you know — we\'ve received your order, and it is now being processed.' => 'DigiLens Việt Nam đã nhận được yêu cầu của bạn và đang tiến hành xử lý.',
            'Just to let you know &mdash; we&#8217;ve received your order, and it is now being processed.' => 'DigiLens Việt Nam đã nhận được yêu cầu của bạn và đang tiến hành xử lý.',
            'Here’s a reminder of what you’ve ordered:' => 'Dưới đây là chi tiết yêu cầu của bạn:',
            'Here\'s a reminder of what you\'ve ordered:' => 'Dưới đây là chi tiết yêu cầu của bạn:',
            'Here&#8217;s a reminder of what you&#8217;ve ordered:' => 'Dưới đây là chi tiết yêu cầu của bạn:',
            'Order summary' => 'Chi tiết đơn yêu cầu',
            'Order #' => 'Mã đơn #',
            'Product' => 'Sản phẩm',
            'Quantity' => 'Số lượng',
            'Price' => 'Đơn giá',
            'Subtotal:' => 'Tạm tính:',
            'Total:' => 'Tổng cộng:',
            'Customer note' => 'Ghi chú yêu cầu',
            'Customer note:' => 'Ghi chú yêu cầu:',
            'Note:' => 'Ghi chú:',
            'Billing address' => 'Thông tin liên hệ',
            'Shipping address' => 'Địa chỉ nhận hàng',
            'Payment method:' => 'Phương thức:',
        );
        if ( isset( $wc_vn_map[ $text ] ) ) {
            return $wc_vn_map[ $text ];
        }
    }
    return $translation;
}, 20, 3 );

// Test action to verify rendered WooCommerce email HTML
add_action( 'wp_ajax_digilens_test_render_email', function() {
    if ( ! class_exists( 'WC_Emails' ) ) {
        wp_send_json_error( 'WC_Emails not found' );
    }
    $orders = wc_get_orders( array( 'limit' => 1, 'status' => 'any', 'orderby' => 'date', 'order' => 'DESC' ) );
    if ( empty( $orders ) ) {
        wp_send_json_error( 'No orders found' );
    }
    $order = $orders[0];
    $wc_emails = WC_Emails::instance();

    // 1. Customer Email
    $cust_email_obj = $wc_emails->emails['WC_Email_Customer_Processing_Order'];
    ob_start();
    $cust_email_obj->object = $order;
    echo $cust_email_obj->get_content_html();
    $cust_html = ob_get_clean();

    // 2. Admin Email
    $admin_email_obj = $wc_emails->emails['WC_Email_New_Order'];
    ob_start();
    $admin_email_obj->object = $order;
    echo $admin_email_obj->get_content_html();
    $admin_html = ob_get_clean();

    wp_send_json_success( array(
        'customer_html' => $cust_html,
        'customer_subject' => $cust_email_obj->get_subject(),
        'admin_html'    => $admin_html,
        'admin_subject'    => $admin_email_obj->get_subject(),
        'order_id'      => $order->get_id(),
        'order_number'  => $order->get_order_number(),
    ) );
} );
add_action( 'wp_ajax_nopriv_digilens_test_render_email', function() {
    do_action( 'wp_ajax_digilens_test_render_email' );
} );




