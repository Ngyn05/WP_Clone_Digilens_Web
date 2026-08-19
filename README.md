# DigiLens WordPress Theme (Việt hóa toàn diện v1.2.7 - Dynamic Database & Categories)

WordPress theme được chuyển đổi từ snapshot DigiLens, Việt hóa 100% và hỗ trợ quản lý bài viết động từ WordPress Database.

## Đã hoàn thành (v1.2.7)
- **Quản lý & Render bài viết 100% từ WordPress Database**:
  + Toàn bộ 41+ bài viết chi tiết được trích xuất nội dung HTML sạch, lưu trữ đầy đủ vào WordPress database (`wp_posts`, `wp_term_relationships`, `wp_postmeta`).
  + Người dùng có thể dễ dàng quản lý, chỉnh sửa tiêu đề, viết thêm bài mới, cập nhật nội dung trong giao diện quản trị WordPress (Classic Editor / Gutenberg), giao diện ngoài trang web sẽ cập nhật ngay lập tức.
- **Phân loại chính xác 5 chuyên mục WordPress (Categories)**:
  + **Thông cáo báo chí** (`press-release`)
  + **Blog** (`blogs`)
  + **Góc nhìn chuyên sâu** (`thought-pieces`)
  + **Tin tức** (`news`)
  + **Truyền thông** (`media`)
- **Template động chuyên nghiệp**:
  + [single.php](file:///c:/Users/hnguy/Local%20Sites/digilens-vn/app/public/wp-content/themes/digilens-theme/single.php): Giao diện bài viết chi tiết chuẩn DigiLens (Breadcrumbs, Category badge, Title, Date, Featured Hero Image, Article Content, Tags, Bài viết trước/sau).
  + [category.php](file:///c:/Users/hnguy/Local%20Sites/digilens-vn/app/public/wp-content/themes/digilens-theme/category.php) & [archive.php](file:///c:/Users/hnguy/Local%20Sites/digilens-vn/app/public/wp-content/themes/digilens-theme/archive.php): Giao diện danh mục dạng Grid Cards động với phân trang `paginate_links()`.
- **Đồng bộ CSS cho trình soạn thảo Classic Editor**:
  + Thêm file [assets/css/editor-style.css](file:///c:/Users/hnguy/Local%20Sites/digilens-vn/app/public/wp-content/themes/digilens-theme/assets/css/editor-style.css) giúp định dạng font chữ, màu sắc, tiêu đề, blockquote trong khung soạn thảo TinyMCE giống hệt giao diện ngoài thực tế.
- **Đồng bộ 100% Header & Navigation tiếng Việt**: Toàn bộ menu Desktop và Mobile drawer đều hiển thị tiếng Việt trên tất cả các trang.
- **Việt hóa 100% toàn bộ 19 WordPress Pages chính**: Trang chủ (Homepage), ARGO, Partners, Media, Privacy Policy, Optics, Careers, Company, Contact, ARGO Next, Website Terms, Waveguides, ARGO Terms...
- **Master Footer DigiLens Việt Nam cao cấp**: 3 Card hỗ trợ khách hàng, 3 cột menu căn giữa sang trọng trên Desktop, tự động chuyển thành Accordion dạng sổ trên Mobile.

## Cài đặt & Sử dụng
1. Upload thư mục theme vào `wp-content/themes/digilens-theme`.
2. Kích hoạt theme trong giao diện quản trị WordPress (Appearance → Themes).
3. Vào Settings → Permalinks và bấm "Save Changes" để cập nhật đường dẫn tĩnh.

## Repository
- GitHub: [https://github.com/Ngyn05/WP_Clone_Digilens_Web.git](https://github.com/Ngyn05/WP_Clone_Digilens_Web.git)
