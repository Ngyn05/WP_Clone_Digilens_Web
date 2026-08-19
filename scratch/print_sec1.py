import urllib.request
from bs4 import BeautifulSoup

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

sec1 = soup.find('section', class_='elementor-element-50a13e07')
if sec1:
    with open(r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\scratch\sec1_dump.html', 'w', encoding='utf-8') as f:
        f.write(sec1.prettify())
    print("Dumped sec1 to scratch/sec1_dump.html successfully")
