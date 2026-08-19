<?php
require_once 'c:/Users/hnguy/Local Sites/digilens-vn/app/public/wp-load.php';

global $wpdb;

// Check posts
$posts = $wpdb->get_results("SELECT ID, post_title, post_content FROM {$wpdb->posts} WHERE post_content LIKE '%@digilens%' OR post_content LIKE '%mailto:%'");
echo "Found " . count($posts) . " posts with email/mailto in DB:\n";
foreach ($posts as $p) {
    echo "- Post #{$p->ID}: {$p->post_title}\n";
}

// Check options
$admin_email = get_option('admin_email');
echo "Admin email: {$admin_email}\n";
