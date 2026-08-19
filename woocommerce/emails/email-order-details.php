<?php
/**
 * Order details table shown in emails - 100% Vietnamese & No Images
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

$text_align = is_rtl() ? 'right' : 'left';
$order_date = $order->get_date_created() ? $order->get_date_created()->date_i18n( 'd/m/Y H:i' ) : current_time( 'd/m/Y H:i' );
?>

<h3 style="color: #0f172a; font-size: 16px; font-weight: 800; margin: 20px 0 10px 0;">
    Chi tiết đơn yêu cầu 
    <span style="font-size: 13px; font-weight: 600; color: #0284c7;">(#DL-<?php echo esc_html( $order->get_order_number() ); ?> &bull; <?php echo esc_html( $order_date ); ?>)</span>
</h3>

<div style="margin-bottom: 25px;">
    <table cellspacing="0" cellpadding="8" style="width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; border: 1px solid #e2e8f0; border-collapse: collapse;" border="1">
        <thead>
            <tr style="background: #f8fafc; color: #334155;">
                <th scope="col" style="text-align:<?php echo esc_attr( $text_align ); ?>; padding: 10px 12px; font-size: 13px; font-weight: 700; border: 1px solid #e2e8f0;">Sản phẩm / Yêu cầu</th>
                <th scope="col" style="text-align:center; padding: 10px 12px; font-size: 13px; font-weight: 700; border: 1px solid #e2e8f0; width: 70px;">SL</th>
                <th scope="col" style="text-align:right; padding: 10px 12px; font-size: 13px; font-weight: 700; border: 1px solid #e2e8f0; width: 110px;">Đơn giá</th>
            </tr>
        </thead>
        <tbody>
            <?php
            echo wc_get_email_order_items(
                $order,
                array(
                    'show_sku'      => false,
                    'show_image'    => false,
                    'image_size'    => array( 0, 0 ),
                    'plain_text'    => $plain_text,
                    'sent_to_admin' => $sent_to_admin,
                )
            );
            ?>
        </tbody>
        <tfoot>
            <?php
            $totals = $order->get_order_item_totals();
            if ( $totals ) {
                $i = 0;
                foreach ( $totals as $total ) {
                    $i++;
                    $label = $total['label'];
                    if ( stripos( $label, 'Subtotal' ) !== false ) { $label = 'Tạm tính:'; }
                    elseif ( stripos( $label, 'Total' ) !== false ) { $label = 'Tổng cộng:'; }
                    elseif ( stripos( $label, 'Payment' ) !== false ) { $label = 'Phương thức:'; }
                    ?>
                    <tr style="background: <?php echo ( $i % 2 === 0 ) ? '#f8fafc' : '#ffffff'; ?>;">
                        <th scope="row" colspan="2" style="text-align:<?php echo esc_attr( $text_align ); ?>; border: 1px solid #e2e8f0; padding: 8px 12px; font-size: 13px; font-weight: 600; color: #475569;"><?php echo esc_html( $label ); ?></th>
                        <td style="text-align:right; border: 1px solid #e2e8f0; padding: 8px 12px; font-size: 13px; font-weight: 700; color: #0f172a;"><?php echo wp_kses_post( $total['value'] ); ?></td>
                    </tr>
                    <?php
                }
            }
            if ( $order->get_customer_note() ) {
                ?>
                <tr>
                    <th scope="row" colspan="2" style="text-align:<?php echo esc_attr( $text_align ); ?>; border: 1px solid #e2e8f0; padding: 10px 12px; font-size: 13px; font-weight: 700; color: #0284c7;">Ghi chú & Thông tin khách:</th>
                    <td style="text-align:left; border: 1px solid #e2e8f0; padding: 10px 12px; font-size: 12px; color: #334155; line-height: 1.5;"><?php echo wp_kses_post( nl2br( wptexturize( $order->get_customer_note() ) ) ); ?></td>
                </tr>
                <?php
            }
            ?>
        </tfoot>
    </table>
</div>

<?php do_action( 'woocommerce_email_after_order_table', $order, $sent_to_admin, $plain_text, $email ); ?>
