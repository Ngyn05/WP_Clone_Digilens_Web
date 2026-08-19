<?php
/**
 * Email Header - DigiLens Việt Nam
 *
 * @package DigiLens
 */

if ( ! defined( 'ABSPATH' ) ) { exit; }
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=<?php bloginfo( 'charset' ); ?>" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <title><?php echo get_bloginfo( 'name', 'display' ); ?></title>
</head>
<body <?php echo is_rtl() ? 'rightmargin' : 'leftmargin'; ?>="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: #f1f5f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; width: 100% !important;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 30px 15px;">
        <tr>
            <td align="center" valign="top">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width: 600px; width: 100%;">
                    <!-- Header Branding -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); padding: 24px 30px; text-align: left;">
                            <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                    <td>
                                        <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; letter-spacing: 0.5px;">
                                            DIGILENS <span style="background: rgba(255,255,255,0.2); font-size: 13px; font-weight: 700; padding: 3px 8px; border-radius: 4px; margin-left: 6px; letter-spacing: 1px;">VIỆT NAM</span>
                                        </h1>
                                        <p style="color: #e0f2fe; margin: 6px 0 0 0; font-size: 13px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                                            Hệ thống Giải pháp & Thiết bị Thực tế Tăng cường (AR/XR)
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Main Body Content -->
                    <tr>
                        <td style="padding: 30px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                            <?php if ( ! empty( $email_heading ) ) : ?>
                                <h2 style="color: #0f172a; font-size: 20px; font-weight: 800; margin: 0 0 16px 0; line-height: 1.3;">
                                    <?php echo esc_html( $email_heading ); ?>
                                </h2>
                            <?php endif; ?>
