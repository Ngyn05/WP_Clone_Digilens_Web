<?php
/**
 * Admin new order email - 100% Tiếng Việt & Không có ảnh sản phẩm
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action( 'woocommerce_email_header', $email_heading, $email ); ?>

<p style="font-size: 15px; color: #1e293b; line-height: 1.6; margin: 0 0 12px 0;">
    Kính gửi Quản trị viên <strong>DigiLens Việt Nam</strong>,
</p>

<p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 18px 0;">
    Hệ thống vừa ghi nhận một <strong>yêu cầu báo giá / tư vấn mới</strong> từ website. Vui lòng kiểm tra chi tiết và liên hệ lại với khách hàng:
</p>

<?php
/*
 * @hooked WC_Emails::order_details() Shows the order details table.
 */
do_action( 'woocommerce_email_order_details', $order, $sent_to_admin, $plain_text, $email );

/*
 * @hooked WC_Emails::customer_details() Shows customer details
 */
do_action( 'woocommerce_email_customer_details', $order, $sent_to_admin, $plain_text, $email );
?>

<div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin-top: 25px; text-align: center;">
    <a href="<?php echo esc_url( admin_url( 'post.php?post=' . $order->get_id() . '&action=edit' ) ); ?>" style="display: inline-block; background: #0284c7; color: #ffffff; text-decoration: none; padding: 10px 22px; border-radius: 6px; font-weight: 700; font-size: 13px;">
        Xem & Xử lý đơn hàng trong WP Admin &rarr;
    </a>
</div>

<?php
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
