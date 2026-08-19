<?php
$mysqli = new mysqli('127.0.0.1', 'root', 'root', 'local', 10016);
$mysqli->set_charset('utf8mb4');

echo "=== NOINDEX AUDIT ===" . PHP_EOL;
$res = $mysqli->query("
    SELECT p.ID, p.post_type, p.post_title, pm.meta_value as noindex_val
    FROM wp_posts p
    INNER JOIN wp_postmeta pm ON pm.post_id = p.ID AND pm.meta_key = '_yoast_wpseo_meta-robots-noindex'
    WHERE p.post_type IN ('page','post','product') AND p.post_status = 'publish'
    AND pm.meta_value = '1'
");
echo "Trang bị Yoast noindex: " . $res->num_rows . PHP_EOL;
while ($r = $res->fetch_assoc()) {
    echo "  [NOINDEX] [{$r['post_type']}] ID {$r['ID']}: {$r['post_title']}" . PHP_EOL;
}

echo PHP_EOL . "=== CANONICAL AUDIT (sample) ===" . PHP_EOL;
$res2 = $mysqli->query("
    SELECT p.ID, p.post_title, pm.meta_value as canonical
    FROM wp_posts p
    LEFT JOIN wp_postmeta pm ON pm.post_id = p.ID AND pm.meta_key = '_yoast_wpseo_canonical'
    WHERE p.post_type IN ('page','product') AND p.post_status = 'publish'
    ORDER BY p.ID LIMIT 10
");
while ($r = $res2->fetch_assoc()) {
    $canon = $r['canonical'] ?: '(Yoast tự tạo)';
    echo "  ID {$r['ID']}: {$r['post_title']} → {$canon}" . PHP_EOL;
}

echo PHP_EOL . "=== OPEN GRAPH kiểm tra Yoast options ===" . PHP_EOL;
$res3 = $mysqli->query("SELECT option_value FROM wp_options WHERE option_name = 'wpseo_social' LIMIT 1");
if ($r3 = $res3->fetch_assoc()) {
    $social = unserialize($r3['option_value']);
    echo "  og:image default: " . ($social['og_default_image'] ?? '(chưa có)') . PHP_EOL;
    echo "  Facebook URL: " . ($social['facebook_site'] ?? '(chưa có)') . PHP_EOL;
    echo "  Twitter: " . ($social['twitter_site'] ?? '(chưa có)') . PHP_EOL;
    echo "  opengraph enabled: " . ($social['opengraph'] ? 'YES' : 'NO') . PHP_EOL;
}

echo PHP_EOL . "=== FAVICON ===" . PHP_EOL;
$res4 = $mysqli->query("SELECT option_value FROM wp_options WHERE option_name = 'site_icon' LIMIT 1");
if ($r4 = $res4->fetch_assoc()) {
    echo "  Favicon attachment ID: " . ($r4['option_value'] ?: '(chưa có)') . PHP_EOL;
} else {
    echo "  Favicon: (chưa cài)" . PHP_EOL;
}
