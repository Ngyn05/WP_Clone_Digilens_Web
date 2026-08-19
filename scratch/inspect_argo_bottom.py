import urllib.request
from bs4 import BeautifulSoup

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

sec15 = soup.find('section', class_=lambda c: c and '48e7' in c)
if sec15:
    with open(r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\scratch\sec15_dump.html', 'w', encoding='utf-8') as f:
        f.write(sec15.prettify())
    print("Dumped sec15 to scratch/sec15_dump.html successfully")
else:
    # Look for the heading "Công nghệ AR thế hệ mới bắt đầu từ đây"
    h = soup.find(lambda tag: tag.name in ['h1', 'h2', 'h3', 'h4', 'h5'] and 'Công nghệ AR thế hệ mới bắt đầu từ đây' in tag.text)
    if h:
        sec = h.find_parent('section')
        if sec:
            with open(r'c:\Users\hnguy\Local Sites\digilens-vn\app\public\wp-content\themes\digilens-theme\scratch\sec15_dump.html', 'w', encoding='utf-8') as f:
                f.write(sec.prettify())
            print("Dumped parent section to scratch/sec15_dump.html successfully")
