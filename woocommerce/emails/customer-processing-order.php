<?php
/**
 * Customer processing order email - 100% Vietnamese, no images, DigiLens Vietnam branding
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/*
 * @hooked WC_Emails::email_header() Output the email header
 */
do_action( 'woocommerce_email_header', $email_heading, $email ); ?>

<p style="font-size: 15px; color: #1e293b; line-height: 1.6; margin: 0 0 14px 0;">
    <?php printf( esc_html__( 'Kính gửi %s,', 'digilens-snapshot' ), esc_html( $order->get_billing_first_name() ?: 'Quý khách' ) ); ?>
</p>

<p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 16px 0;">
    DigiLens Việt Nam đã nhận được yêu cầu của bạn và đang tiến hành xử lý. Chuyên viên tư vấn kỹ thuật sẽ liên hệ trực tiếp với bạn trong thời gian sớm nhất.
</p>

<p style="font-size: 14px; color: #0f172a; font-weight: 700; margin: 0 0 12px 0;">
    Dưới đây là chi tiết yêu cầu của bạn:
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

<div style="background-color: #f0f9ff; border: 1px solid #bae6fd; border-radius: 8px; padding: 14px 18px; margin-top: 25px;">
    <p style="font-size: 13px; color: #0369a1; line-height: 1.5; margin: 0;">
        💡 <strong>Hỗ trợ trực tiếp:</strong> Bạn có thể trao đổi ngay với chuyên viên kỹ thuật qua Zalo: <a href="https://zalo.me/0917834532" style="color: #0284c7; font-weight: 700; text-decoration: underline;">0917 834 532</a> hoặc phản hồi trực tiếp email này.
    </p>
</div>

<?php
/*
 * @hooked WC_Emails::email_footer() Output the email footer
 */
do_action( 'woocommerce_email_footer', $email );
