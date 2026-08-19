<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

function digilens_form_redirect( $type ) {
    $ref = wp_get_referer();
    if ( ! $ref ) { $ref = home_url( '/contact/' ); }
    $ref = remove_query_arg( 'dl_sent', $ref );
    wp_safe_redirect( add_query_arg( 'dl_sent', $type, $ref ) . '#content' );
    exit;
}

function digilens_handle_contact_form() {
    if ( ! isset( $_POST['_dl_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_dl_nonce'] ) ), 'digilens_contact' ) ) { wp_die( 'Yêu cầu không hợp lệ.' ); }
    if ( ! empty( $_POST['website'] ) ) { digilens_form_redirect( 'contact' ); }
    $name = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
    $email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    $company = isset( $_POST['company'] ) ? sanitize_text_field( wp_unslash( $_POST['company'] ) ) : '';
    $phone = isset( $_POST['phone'] ) ? sanitize_text_field( wp_unslash( $_POST['phone'] ) ) : '';
    $message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';
    if ( $name === '' || ! is_email( $email ) || $message === '' ) { wp_die( 'Vui lòng điền đầy đủ các trường bắt buộc.' ); }
    $subject = sprintf( '[%s] Yêu cầu liên hệ mới từ %s', wp_specialchars_decode( get_bloginfo( 'name' ), ENT_QUOTES ), $name );
    $body = "Họ và tên: {$name}\nEmail: {$email}\nCông ty: {$company}\nSố điện thoại: {$phone}\n\nNội dung:\n{$message}\n";
    $headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );
    wp_mail( get_option( 'admin_email' ), $subject, $body, $headers );
    digilens_form_redirect( 'contact' );
}
add_action( 'admin_post_nopriv_digilens_contact', 'digilens_handle_contact_form' );
add_action( 'admin_post_digilens_contact', 'digilens_handle_contact_form' );

function digilens_handle_newsletter_form() {
    if ( ! isset( $_POST['_dl_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['_dl_nonce'] ) ), 'digilens_newsletter' ) ) { wp_die( 'Yêu cầu không hợp lệ.' ); }
    if ( ! empty( $_POST['website'] ) ) { digilens_form_redirect( 'newsletter' ); }
    $email = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
    if ( ! is_email( $email ) ) { wp_die( 'Vui lòng nhập địa chỉ email hợp lệ.' ); }
    $subject = sprintf( '[%s] Đăng ký nhận cập nhật', wp_specialchars_decode( get_bloginfo( 'name' ), ENT_QUOTES ) );
    wp_mail( get_option( 'admin_email' ), $subject, "Email đăng ký nhận cập nhật: {$email}\n" );
    digilens_form_redirect( 'newsletter' );
}
add_action( 'admin_post_nopriv_digilens_newsletter', 'digilens_handle_newsletter_form' );
add_action( 'admin_post_digilens_newsletter', 'digilens_handle_newsletter_form' );
