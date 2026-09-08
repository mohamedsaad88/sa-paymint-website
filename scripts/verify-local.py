"""GET-only route checks. Never submits enquiries or contacts external services."""
import sys, urllib.request, urllib.error
from html.parser import HTMLParser
from urllib.parse import urlsplit
base=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:3000'
origin=urlsplit(base)
if origin.scheme!='http' or origin.hostname not in ('localhost','127.0.0.1') or origin.path not in ('','/'):
 raise SystemExit('Use a local HTTP server only.')
base=base.rstrip('/')
paths=['/','/business','/payouts','/payroll','/embedded-finance','/financial-wellness','/employees','/platform','/developers','/security','/about','/partners','/insights','/careers','/contact','/privacy']
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.h1=0;self.images=[];self.title=False;self.disabled=False
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='a' and d.get('href','').startswith(('/','#')):self.links.append(d['href'])
  if 'id' in d:self.ids.add(d['id'])
  if t=='h1':self.h1+=1
  if t=='title':self.title=True
  if t=='img':self.images.append(d.get('src',''))
  if t=='fieldset' and 'disabled' in d:self.disabled=True
pages={}
for path in paths:
 with urllib.request.urlopen(base+path) as response:
  assert response.status==200,path
  html=response.read().decode();p=Page();p.feed(html);pages[path]=p
  assert p.h1==1,(path,'H1 count',p.h1)
  assert p.title,(path,'missing title')
  for unsupported in ['Leave a space','Lorem ipsum','R 248,500','R 12,500','business-owner.webp','Distribution Partner']:
   assert unsupported not in html,(path,'unsupported content',unsupported)
  assert response.headers.get('X-Content-Type-Options')=='nosniff',(path,'security header')
assert pages['/contact'].disabled,'Form must be disabled before hydration'
for path,p in pages.items():
 for link in p.links:
  u=urlsplit(link);target=u.path or path
  assert target in pages,(path,'broken route',link)
  if u.fragment:assert u.fragment in pages[target].ids,(path,'broken anchor',link)
 for src in p.images:
  if src.startswith('/'):
   with urllib.request.urlopen(base+src) as response:assert response.status==200
print('PASS: 16 routes, titles/H1s, internal links/anchors, images, security headers and no-JavaScript contact guard.')
for path,expected in [('/constructor',404),('/toString',404),('/__proto__',404),('/hasOwnProperty',404),('/not-a-page',404),('/sitemap.xml',200),('/robots.txt',200)]:
 try:
  with urllib.request.urlopen(base+path) as r:status=r.status
 except urllib.error.HTTPError as e:status=e.code
 assert status==expected,(path,status)
print('PASS: prototype-name and normal 404s, sitemap, robots. GET-only; no messages sent.')
