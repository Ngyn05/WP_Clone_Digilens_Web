<?php
$mysqli = new mysqli('127.0.0.1', 'root', 'root', 'local', 10016);
$mysqli->set_charset('utf8mb4');

echo "=== All attachments ===" . PHP_EOL;
$res = $mysqli->query("SELECT ID, post_title, guid FROM wp_posts WHERE post_type='attachment' ORDER BY ID DESC LIMIT 30");
while ($r = $res->fetch_assoc()) {
    echo "  ID {$r['ID']}: {$r['post_title']} => " . basename($r['guid']) . PHP_EOL;
}
