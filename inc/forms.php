<?php
/**
 * DigiLens Form Handlers (Contact & Newsletter)
 * Standardized 100% Vietnamese notifications with 'DigiLens Việt Nam' sender branding.
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Configure global sender name and email for all outgoing emails
 */
add_filter( 'wp_mail_from_name', function( $name ) {
    return 'DigiLens Việt Nam';
} );
add_filter( 'wp_mail_from', function( $email ) {
    return 'contact@digilens.vn';
} );

function digilens_form_redirect( $type ) {
    $ref = wp_get_referer();
    if ( ! $ref ) { $ref = home_url( '/contact/' ); }
    $ref = remove_query_arg( 'dl_sent', $ref );
    wp_safe_redirect( add_query_arg( 'dl_sent', $type, $ref ) . '#content' );
    exit;
}

/**
 * Handle Contact Form Submissions
 */
function digilens_handle_contact_form() {
    if ( ! isset( $_POST['_dl_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_dl_nonce'] ) ), 'digilens_contact' ) ) {
        wp_die( 'Yêu cầu không hợp lệ.' );
    }
    if ( ! empty( $_POST['website'] ) ) {
        digilens_form_redirect( 'contact' );
    }

    $name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
    $email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    $company = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
    $phone   = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
    $message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

    if ( $name === '' || ! is_email( $email ) || $message === '' ) {
        wp_die( 'Vui lòng điền đầy đủ các trường bắt buộc.' );
    }

    $subject = sprintf( '[DigiLens Việt Nam] Yêu cầu liên hệ mới từ %s', $name );
    $body    = "Kính gửi Quản trị viên DigiLens Việt Nam,\n\n"
             . "Website vừa nhận được một yêu cầu liên hệ mới từ khách hàng:\n"
             . "--------------------------------------------------\n"
             . "• Họ và tên: " . $name . "\n"
             . "• Địa chỉ Email: " . $email . "\n"
             . "• Số điện thoại: " . ( $phone ?: 'N/A' ) . "\n"
             . "• Tên Công ty / Đơn vị: " . ( $company ?: 'N/A' ) . "\n"
             . "• Nội dung tin nhắn:\n" . $message . "\n"
             . "• Thời gian gửi: " . current_time( 'd/m/Y H:i:s' ) . "\n"
             . "--------------------------------------------------\n"
             . "Trân trọng,\n"
             . "Hệ thống DigiLens Việt Nam";

    $headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );
    wp_mail( get_option( 'admin_email' ), $subject, $body, $headers );
    digilens_form_redirect( 'contact' );
}
add_action( 'admin_post_nopriv_digilens_contact', 'digilens_handle_contact_form' );
add_action( 'admin_post_digilens_contact', 'digilens_handle_contact_form' );

/**
 * Handle Newsletter Subscription Form
 */
function digilens_handle_newsletter_form() {
    if ( ! isset( $_POST['_dl_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_dl_nonce'] ) ), 'digilens_newsletter' ) ) {
        wp_die( 'Yêu cầu không hợp lệ.' );
    }
    if ( ! empty( $_POST['website'] ) ) {
        digilens_form_redirect( 'newsletter' );
    }

    $email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    if ( ! is_email( $email ) ) {
        wp_die( 'Vui lòng nhập địa chỉ email hợp lệ.' );
    }

    $subject = '[DigiLens Việt Nam] Đăng ký nhận bản tin & cập nhật công nghệ mới';
    $body    = "Kính gửi Quản trị viên DigiLens Việt Nam,\n\n"
             . "Có một khách hàng vừa đăng ký nhận bản tin & cập nhật công nghệ mới:\n"
             . "--------------------------------------------------\n"
             . "• Địa chỉ Email: " . $email . "\n"
             . "• Thời gian đăng ký: " . current_time( 'd/m/Y H:i:s' ) . "\n"
             . "--------------------------------------------------\n"
             . "Trân trọng,\n"
             . "Hệ thống DigiLens Việt Nam";

    wp_mail( get_option( 'admin_email' ), $subject, $body );
    digilens_form_redirect( 'newsletter' );
}
add_action( 'admin_post_nopriv_digilens_newsletter', 'digilens_handle_newsletter_form' );
add_action( 'admin_post_digilens_newsletter', 'digilens_handle_newsletter_form' );
