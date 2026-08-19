<?php
/**
 * Populate Yoast SEO title & meta description for all Pages, Posts, Products
 * SEO Title format: [Title] - DigiLens Việt Nam
 * Meta description: ~155 chars (Yoast green bar)
 */

$mysqli = new mysqli('127.0.0.1', 'root', 'root', 'local', 10016);
$mysqli->set_charset('utf8mb4');
if ($mysqli->connect_error) {
    die("DB Error: " . $mysqli->connect_error);
}

// =====================================================================
// HELPER: UPSERT YOAST META
// =====================================================================
function set_yoast_meta($mysqli, $post_id, $seo_title, $meta_desc) {
    foreach ([
        '_yoast_wpseo_title'    => $seo_title,
        '_yoast_wpseo_metadesc' => $meta_desc,
    ] as $key => $value) {
        $id   = (int) $post_id;
        $k    = $mysqli->real_escape_string($key);
        $v    = $mysqli->real_escape_string($value);
        $chk  = $mysqli->query("SELECT meta_id FROM wp_postmeta WHERE post_id=$id AND meta_key='$k' LIMIT 1");
        if ($chk && $chk->num_rows > 0) {
            $mysqli->query("UPDATE wp_postmeta SET meta_value='$v' WHERE post_id=$id AND meta_key='$k'");
        } else {
            $mysqli->query("INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES ($id,'$k','$v')");
        }
    }
}

$SITE = 'DigiLens Việt Nam';
$updated = 0;

// =====================================================================
// 1. PAGES – Curated SEO data keyed by slug
// =====================================================================
$page_seo = [
    'home' => [
        'title' => "Kính AR/XR Công nghiệp - $SITE",
        'desc'  => 'DigiLens Việt Nam – nhà phân phối kính thông minh AR/XR công nghiệp ARGO™ chính hãng. Quang học holographic, ống dẫn sóng Crystal30/50 và giải pháp XR toàn diện cho doanh nghiệp Việt.',
    ],
    'argo' => [
        'title' => "Kính ARGO™ – AR Công nghiệp - $SITE",
        'desc'  => 'Kính ARGO™ của DigiLens: màn hình AR trong suốt, camera 48MP, Snapdragon, pin cả ngày làm việc. Giải pháp XR công nghiệp hàng đầu cho lực lượng lao động tuyến đầu.',
    ],
    'terms-of-use' => [
        'title' => "Điều khoản sử dụng - $SITE",
        'desc'  => 'Điều khoản và điều kiện sử dụng kính thông minh DigiLens ARGO™ tại Việt Nam. Vui lòng đọc kỹ trước khi sử dụng sản phẩm.',
    ],
    'careers' => [
        'title' => "Tuyển dụng - $SITE",
        'desc'  => 'DigiLens Việt Nam đang tuyển dụng kỹ sư, chuyên gia kinh doanh và đội ngũ bán hàng trong lĩnh vực công nghệ AR/XR. Cơ hội phát triển sự nghiệp trong ngành công nghệ tương lai.',
    ],
    'company' => [
        'title' => "Về DigiLens Việt Nam - $SITE",
        'desc'  => 'DigiLens Việt Nam là đối tác phân phối chính thức kính thông minh ARGO™ và công nghệ quang học holographic Crystal™ tại thị trường Việt Nam và Đông Nam Á.',
    ],
    'contact' => [
        'title' => "Liên hệ & Tư vấn AR/XR - $SITE",
        'desc'  => 'Liên hệ DigiLens Việt Nam để được tư vấn miễn phí về kính thông minh ARGO™, ống dẫn sóng Crystal™ và giải pháp XR cho doanh nghiệp. Email: contact@digilens.vn',
    ],
    'media' => [
        'title' => "Tin tức & Truyền thông - $SITE",
        'desc'  => 'Cập nhật tin tức mới nhất về công nghệ AR/XR từ DigiLens Việt Nam: thông cáo báo chí, bài viết chuyên sâu, video hướng dẫn và các bài phân tích thị trường XR toàn cầu.',
    ],
    'next' => [
        'title' => "Chương trình ARGO Next - $SITE",
        'desc'  => 'Chương trình ARGO Next của DigiLens giúp doanh nghiệp chuyển đổi sang thế hệ kính XR mới một cách liền mạch, bảo toàn giá trị đầu tư và hạ tầng hiện có.',
    ],
    'optics' => [
        'title' => "Quang học Holographic - $SITE",
        'desc'  => 'Khám phá công nghệ quang học holographic tiên tiến của DigiLens: ống dẫn sóng SRG+ và công nghệ photopolymer độc quyền giúp tạo ra màn hình AR mỏng nhẹ, trong suốt.',
    ],
    'partners' => [
        'title' => "Đối tác Công nghệ AR/XR - $SITE",
        'desc'  => 'DigiLens hợp tác với các đối tác hàng đầu thế giới như Qualcomm, Microsoft, Google Cloud, Taqtile để xây dựng hệ sinh thái AR/XR toàn diện cho doanh nghiệp toàn cầu.',
    ],
    'privacy-policy' => [
        'title' => "Chính sách bảo mật - $SITE",
        'desc'  => 'Chính sách quyền riêng tư của DigiLens Việt Nam: cam kết bảo mật thông tin cá nhân, dữ liệu người dùng và tuân thủ các quy định pháp luật về bảo vệ dữ liệu.',
    ],
    'waveguides' => [
        'title' => "Ống dẫn sóng Crystal™ - $SITE",
        'desc'  => 'Ống dẫn sóng DigiLens Crystal30™ và Crystal50™: hiển thị AR trong suốt, màu sắc trung thực, siêu mỏng nhẹ. Giải pháp waveguide holographic hàng đầu cho kính thông minh công nghiệp.',
    ],
    'store' => [
        'title' => "Cửa hàng ARGO™ & Phụ kiện AR - $SITE",
        'desc'  => 'Mua kính thông minh DigiLens ARGO™, ống dẫn sóng Crystal™ và phụ kiện AR/XR chính hãng tại Việt Nam. Tư vấn miễn phí, bảo hành chính hãng, hỗ trợ kỹ thuật 24/7.',
    ],
    'shop' => [
        'title' => "Shop AR/XR Trực tuyến - $SITE",
        'desc'  => 'Mua sắm trực tuyến kính thông minh ARGO™ và phụ kiện công nghệ AR/XR tại DigiLens Việt Nam. Thanh toán an toàn, giao hàng toàn quốc, hỗ trợ kỹ thuật chuyên nghiệp.',
    ],
];

$res = $mysqli->query("SELECT ID, post_name, post_parent FROM wp_posts WHERE post_type='page' AND post_status='publish' ORDER BY ID");
while ($row = $res->fetch_assoc()) {
    $slug  = $row['post_name'];
    $id    = (int) $row['ID'];
    $seo   = $page_seo[$slug] ?? null;
    if (!$seo) continue;
    set_yoast_meta($mysqli, $id, $seo['title'], $seo['desc']);
    echo "[PAGE] ID $id /$slug/: OK" . PHP_EOL;
    $updated++;
}

// =====================================================================
// 2. PRODUCTS – Curated SEO data keyed by slug
// =====================================================================
$product_seo = [
    'argo-enterprise' => [
        'title' => "ARGO™ Enterprise – Kính AR Công nghiệp - $SITE",
        'desc'  => 'DigiLens ARGO™ Enterprise: kính AR độc lập cho công nghiệp, camera 48MP, Snapdragon XR2, màn hình holographic trong suốt. Giải pháp tối ưu cho lực lượng lao động tuyến đầu doanh nghiệp.',
    ],
    'dv1-developer' => [
        'title' => "Dv1 Developer Smartglasses – Kính AR Dev - $SITE",
        'desc'  => 'Kính thông minh DigiLens Design v1 (Dv1) dành cho lập trình viên AR/XR: ống dẫn sóng holographic, form factor mỏng nhẹ, tương thích Snapdragon Spaces. Lý tưởng để phát triển ứng dụng XR.',
    ],
    'crystal30-waveguide' => [
        'title' => "Crystal30™ Holographic Waveguide - $SITE",
        'desc'  => 'Module ống dẫn sóng Crystal30™ của DigiLens: hiển thị AR trong suốt, FOV 50°, kích thước nhỏ gọn, phù hợp tích hợp vào kính thông minh công nghiệp và thiết bị đeo đầu AR/XR.',
    ],
    'crystal30-insight-kit' => [
        'title' => "Crystal30™ Insight Kit – Kiểm thử Waveguide - $SITE",
        'desc'  => 'Bộ công cụ kiểm thử quang học Crystal30™ Insight Kit của DigiLens: đánh giá hiệu năng ống dẫn sóng holographic, đo độ sáng, màu sắc và góc nhìn (FOV) chính xác cho R&D AR/XR.',
    ],
    'crystal50-plastic' => [
        'title' => "Crystal50™ Plastic Waveguide – AR Thế hệ mới - $SITE",
        'desc'  => 'Crystal50™ Plastic Waveguide của DigiLens: ống dẫn sóng holographic làm từ nhựa cứng, giảm chi phí sản xuất tới 80%, hiệu năng quang học cao, phù hợp triển khai AR đại trà.',
    ],
    'argo-prescription-insert' => [
        'title' => "ARGO™ Prescription Insert – Tròng kính cận - $SITE",
        'desc'  => 'Khung gắn thấu kính cận/viễn thị ARGO™ Prescription Insert: giúp người dùng đeo kính cận/viễn sử dụng kính AR ARGO™ thoải mái, không cần đeo 2 lớp kính trong suốt ca làm việc.',
    ],
    'argo-industrial-dock' => [
        'title' => "ARGO™ Carry Case – Hộp sạc bảo vệ - $SITE",
        'desc'  => 'Hộp bảo vệ chống sốc và trạm sạc đa năng ARGO™ Carry Case: bảo quản và sạc kính AR ARGO™ an toàn trong môi trường công nghiệp, kết nối đến 5 thiết bị cùng lúc.',
    ],
    'argo-next-program' => [
        'title' => "ARGO Next – Nâng cấp kính AR linh hoạt - $SITE",
        'desc'  => 'Chương trình ARGO Next của DigiLens: nâng cấp lên thế hệ kính AR mới mà không mất đầu tư hạ tầng cũ. Bảo vệ ngân sách IT, đảm bảo liên tục hoạt động cho đội ngũ tuyến đầu.',
    ],
    'taqtile-manifest-software' => [
        'title' => "Taqtile Manifest™ – Phần mềm AR Công nghiệp - $SITE",
        'desc'  => 'Taqtile Manifest™ trên ARGO™: số hóa hướng dẫn thao tác, quy trình bảo trì và đào tạo công nghiệp bằng AR. Giảm lỗi vận hành 60%, tăng năng suất đội ngũ tuyến đầu.',
    ],
];

$res = $mysqli->query("SELECT ID, post_name FROM wp_posts WHERE post_type='product' AND post_status='publish' ORDER BY ID");
while ($row = $res->fetch_assoc()) {
    $slug = $row['post_name'];
    $id   = (int) $row['ID'];
    $seo  = $product_seo[$slug] ?? null;
    if (!$seo) {
        // Fallback generic for unknown products
        $res2 = $mysqli->query("SELECT post_title FROM wp_posts WHERE ID=$id");
        $r2 = $res2->fetch_assoc();
        $seo = [
            'title' => $r2['post_title'] . " - $SITE",
            'desc'  => 'Sản phẩm công nghệ AR/XR chính hãng DigiLens tại Việt Nam. Liên hệ để được tư vấn và báo giá tốt nhất. Bảo hành chính hãng, hỗ trợ kỹ thuật 24/7.',
        ];
    }
    set_yoast_meta($mysqli, $id, $seo['title'], $seo['desc']);
    echo "[PRODUCT] ID $id /$slug/: OK" . PHP_EOL;
    $updated++;
}

// =====================================================================
// 3. POSTS – Auto-generate from title + excerpt
// =====================================================================
$res = $mysqli->query("SELECT ID, post_title, post_excerpt, post_name FROM wp_posts WHERE post_type='post' AND post_status='publish' ORDER BY ID");
while ($row = $res->fetch_assoc()) {
    $id    = (int) $row['ID'];
    $title = $row['post_title'];
    $slug  = $row['post_name'];
    $raw_excerpt = trim(strip_tags($row['post_excerpt']));

    // SEO title: full title, no truncation – complete meaning first
    $fn_strlen = function($s) { return iconv_strlen($s, 'UTF-8') ?: strlen($s); };
    $fn_substr  = function($s, $o, $l) { return iconv_substr($s, $o, $l, 'UTF-8') ?: substr($s, $o, $l * 3); };
    $seo_title = $title . " - $SITE";

    // Meta description: tiếng Việt hoàn toàn, sinh từ tiêu đề – bỏ excerpt tiếng Anh
    $meta_desc = 'Tìm hiểu về "' . $title . '" – bài viết chuyên sâu từ DigiLens Việt Nam về công nghệ kính thông minh AR/XR và các xu hướng mới nhất trong ngành.';
    // Trim to 155 chars at word boundary
    if ($fn_strlen($meta_desc) > 155) {
        $cut = $fn_substr($meta_desc, 0, 152);
        $last_space = strrpos($cut, ' ');
        $meta_desc = ($last_space > 100 ? substr($cut, 0, $last_space) : $cut) . '…';
    }

    set_yoast_meta($mysqli, $id, $seo_title, $meta_desc);
    echo "[POST] ID $id: OK" . PHP_EOL;
    $updated++;
}

echo PHP_EOL . "=== DONE: Updated Yoast SEO for $updated items ===" . PHP_EOL;
