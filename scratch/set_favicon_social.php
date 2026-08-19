<?php
$mysqli = new mysqli('127.0.0.1', 'root', 'root', 'local', 10016);
$mysqli->set_charset('utf8mb4');

// Tìm file New-Site-Icon-v3.png trong uploads
$uploads_base = 'C:/Users/hnguy/Local Sites/digilens-vn/app/public/wp-content/uploads';
$found = '';
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($uploads_base));
foreach ($iterator as $file) {
    if (strpos($file->getFilename(), 'New-Site-Icon-v3') !== false
        && strpos($file->getFilename(), '-150x150') === false
        && strpos($file->getFilename(), '-300x300') === false
        && $file->isFile()
    ) {
        $found = str_replace('\\', '/', $file->getPathname());
        echo "Found: $found" . PHP_EOL;
        break;
    }
}

if (!$found) {
    echo "File New-Site-Icon-v3.png not found" . PHP_EOL;
    exit(1);
}

// Xây dựng URL từ path
$url = str_replace(
    'C:/Users/hnguy/Local Sites/digilens-vn/app/public',
    'http://digilens-vn.local',
    $found
);

// Thêm attachment vào database
$title = 'New-Site-Icon-v3';
$file_type = 'image/png';
$now = date('Y-m-d H:i:s');
$relative_path = str_replace($uploads_base . '/', '', $found);

$escaped_url   = $mysqli->real_escape_string($url);
$escaped_title = $mysqli->real_escape_string($title);
$escaped_type  = $mysqli->real_escape_string($file_type);

// Check if already exists
$existing = $mysqli->query("SELECT ID FROM wp_posts WHERE post_type='attachment' AND guid LIKE '%New-Site-Icon-v3.png%' LIMIT 1");
if ($existing->num_rows > 0) {
    $icon_id = $existing->fetch_assoc()['ID'];
    echo "Already exists: ID $icon_id" . PHP_EOL;
} else {
    $mysqli->query("
        INSERT INTO wp_posts (post_author, post_date, post_date_gmt, post_content, post_excerpt, post_title, post_status, comment_status, ping_status, post_name, to_ping, pinged, post_modified, post_modified_gmt, post_content_filtered, post_type, guid, post_mime_type)
        VALUES (1, '$now', '$now', '', '', '$escaped_title', 'inherit', 'open', 'closed', 'new-site-icon-v3', '', '', '$now', '$now', '', 'attachment', '$escaped_url', '$escaped_type')
    ");
    $icon_id = $mysqli->insert_id;
    
    // Add _wp_attached_file meta
    $escaped_path = $mysqli->real_escape_string($relative_path);
    $mysqli->query("INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES ($icon_id, '_wp_attached_file', '$escaped_path')");
    
    // Add _wp_attachment_metadata
    $meta = serialize([
        'file' => $relative_path,
        'width' => 512,
        'height' => 512,
        'sizes' => [],
    ]);
    $escaped_meta = $mysqli->real_escape_string($meta);
    $mysqli->query("INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES ($icon_id, '_wp_attachment_metadata', '$escaped_meta')");
    
    echo "Registered attachment ID: $icon_id" . PHP_EOL;
}

// Set site_icon option
$site_icon_exists = $mysqli->query("SELECT option_id FROM wp_options WHERE option_name = 'site_icon' LIMIT 1");
if ($site_icon_exists->num_rows > 0) {
    $mysqli->query("UPDATE wp_options SET option_value = '$icon_id' WHERE option_name = 'site_icon'");
} else {
    $mysqli->query("INSERT INTO wp_options (option_name, option_value, autoload) VALUES ('site_icon', '$icon_id', 'yes')");
}
echo "site_icon set to: $icon_id" . PHP_EOL;

// Cập nhật Yoast og:image default
$prod_url = str_replace('http://digilens-vn.local', 'https://digilens.vn', $url);
$wpseo_social = $mysqli->query("SELECT option_value FROM wp_options WHERE option_name = 'wpseo_social' LIMIT 1")->fetch_assoc();
$social = $wpseo_social ? unserialize($wpseo_social['option_value']) : [];
$social['og_default_image']    = $prod_url;
$social['og_default_image_id'] = $icon_id;
$social['opengraph']           = true;
$social['twitter']             = true;
$social['facebook_site']       = 'https://www.facebook.com/digilensvietnam';
$social['linkedin_url']        = 'https://www.linkedin.com/company/digilens';
$social['twitter_site']        = 'digilens';
$escaped_social = $mysqli->real_escape_string(serialize($social));
$mysqli->query("UPDATE wp_options SET option_value = '$escaped_social' WHERE option_name = 'wpseo_social'");
echo "Yoast og:image updated => $prod_url" . PHP_EOL;

// Cập nhật wpseo company logo
$wpseo_row = $mysqli->query("SELECT option_value FROM wp_options WHERE option_name = 'wpseo' LIMIT 1")->fetch_assoc();
$yoast_opts = $wpseo_row ? unserialize($wpseo_row['option_value']) : [];
$yoast_opts['company_or_person'] = 'company';
$yoast_opts['company_name']      = 'DigiLens Việt Nam';
$yoast_opts['company_logo']      = $prod_url;
$yoast_opts['company_logo_id']   = $icon_id;
$escaped_yoast = $mysqli->real_escape_string(serialize($yoast_opts));
$mysqli->query("UPDATE wp_options SET option_value = '$escaped_yoast' WHERE option_name = 'wpseo'");
echo "Yoast company_logo updated" . PHP_EOL;

echo PHP_EOL . "=== ALL DONE ===" . PHP_EOL;
