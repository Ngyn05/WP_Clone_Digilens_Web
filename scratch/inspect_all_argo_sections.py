import urllib.request
from bs4 import BeautifulSoup

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

print("=== ALL SECTIONS ON /argo/ ===")
sections = soup.find_all('section')
for idx, sec in enumerate(sections):
    h = sec.find(['h1', 'h2', 'h3', 'h4'])
    h_text = h.get_text(strip=True) if h else '(no heading)'
    classes = ' '.join(sec.get('class', []))
    print(f"[{idx+1}] {ascii(h_text)} | classes: {classes[:80]}...")
