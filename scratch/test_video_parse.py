import urllib.request
import re
import json
from bs4 import BeautifulSoup

def extract_youtube_id(url):
    m = re.search(r'(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})', url)
    return m.group(1) if m else None

url = 'http://digilens-vn.local/argo/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
res = urllib.request.urlopen(req)
html = res.read().decode('utf-8', errors='ignore')
soup = BeautifulSoup(html, 'html.parser')

video_widgets = soup.find_all(class_='elementor-widget-video')
print(f"Found {len(video_widgets)} video widgets on /argo/")

for i, w in enumerate(video_widgets):
    settings_raw = w.get('data-settings', '{}')
    print(f"Widget {i+1} data-settings:", settings_raw)
    try:
        settings = json.loads(settings_raw)
        yt_url = settings.get('youtube_url', '')
        yt_id = extract_youtube_id(yt_url)
        print(f"   -> YouTube URL: {yt_url}")
        print(f"   -> Extracted Video ID: {yt_id}")
    except Exception as e:
        print("   -> JSON Parse Error:", e)
