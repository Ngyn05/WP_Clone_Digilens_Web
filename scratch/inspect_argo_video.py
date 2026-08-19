import urllib.request
from bs4 import BeautifulSoup

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

sec3 = soup.find('section', class_='elementor-element-230782ac')
if sec3:
    with open(r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\scratch\sec3_dump.html', 'w', encoding='utf-8') as f:
        f.write(sec3.prettify())
    print("Dumped sec3 to scratch/sec3_dump.html successfully")
else:
    print("sec3 elementor-element-230782ac not found")

# Also check original snapshot file
snap_file = r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\snapshot\argo\index.htm'
with open(snap_file, 'r', encoding='utf-8', errors='ignore') as f:
    snap_html = f.read()

snap_soup = BeautifulSoup(snap_html, 'html.parser')
snap_sec3 = snap_soup.find('section', class_='elementor-element-230782ac')
if snap_sec3:
    with open(r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\scratch\snap_sec3_dump.html', 'w', encoding='utf-8') as f:
        f.write(snap_sec3.prettify())
    print("Dumped snap_sec3 to scratch/snap_sec3_dump.html successfully")
