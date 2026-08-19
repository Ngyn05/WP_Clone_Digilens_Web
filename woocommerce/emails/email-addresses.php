<?php
/**
 * Email Addresses - 100% Vietnamese
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$text_align = is_rtl() ? 'right' : 'left';
$address    = $order->get_formatted_billing_address();
$shipping   = $order->get_formatted_shipping_address();
?>

<table id="addresses" cellspacing="0" cellpadding="0" style="width: 100%; vertical-align: top; margin-bottom: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;" border="0">
    <tr>
        <td style="text-align: <?php echo esc_attr( $text_align ); ?>; font-family: inherit; padding:0;" valign="top" width="50%">
            <h3 style="color: #0f172a; font-size: 14px; font-weight: 700; margin: 0 0 8px 0;">Thông tin liên hệ & Đặt hàng</h3>
            <div style="padding: 12px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 13px; color: #334155; line-height: 1.5;">
                <p style="margin: 0 0 4px 0;"><strong>Họ tên:</strong> <?php echo esc_html( $order->get_billing_first_name() ?: 'Khách hàng' ); ?></p>
                <p style="margin: 0 0 4px 0;"><strong>SĐT:</strong> <?php echo esc_html( $order->get_billing_phone() ?: 'N/A' ); ?></p>
                <p style="margin: 0 0 4px 0;"><strong>Email:</strong> <?php echo esc_html( $order->get_billing_email() ?: 'N/A' ); ?></p>
                <?php if ( $order->get_billing_address_1() ) : ?>
                    <p style="margin: 0;"><strong>Địa chỉ:</strong> <?php echo esc_html( $order->get_billing_address_1() ); ?></p>
                <?php endif; ?>
            </div>
        </td>
    </tr>
</table>
