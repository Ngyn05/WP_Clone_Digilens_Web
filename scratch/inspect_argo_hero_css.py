import urllib.request
import re
from bs4 import BeautifulSoup

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

print("=== INSPECTING CSS FILES & INLINE STYLES ===")
styles = soup.find_all('style')
links = soup.find_all('link', rel='stylesheet')

print(f"Total <style> blocks: {len(styles)}")
print(f"Total stylesheet <link>s: {len(links)}")

# Search for max-width in style blocks
for i, s in enumerate(styles):
    content = s.string or s.text
    if 'max-width' in content and 'elementor-section' in content:
        matches = re.findall(r'([^{}]*elementor[^{}]*\{[^{}]*\})', content)
        for m in matches[:10]:
            print(f"Style block {i}: {m.strip()}")

# Inspect section 1 specifically
sec1 = soup.find('section', class_='elementor-element-50a13e07')
if sec1:
    print("\n=== SECTION 1 (HERO) DETAILS ===")
    print("Section HTML:", str(sec1)[:800])
