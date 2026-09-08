"""HTTP checks only; not a substitute for browser visual/accessibility QA."""
import json,sys,urllib.request,urllib.error
from html.parser import HTMLParser
from urllib.parse import urlsplit
base=sys.argv[1] if len(sys.argv)>1 else 'http://localhost:3000'
paths=['/','/business','/payouts','/payroll','/embedded-finance','/financial-wellness','/employees','/platform','/developers','/security','/about','/partners','/insights','/careers','/contact','/privacy']
class Page(HTMLParser):
 def __init__(self):super().__init__();self.links=[];self.ids=set();self.h1=0;self.images=[];self.title=False
 def handle_starttag(self,t,a):
  d=dict(a)
  if t=='a' and d.get('href','').startswith('/'):self.links.append(d['href'])
  if 'id' in d:self.ids.add(d['id'])
  if t=='h1':self.h1+=1
  if t=='title':self.title=True
  if t=='img':self.images.append(d.get('src',''))
pages={}
for path in paths:
 with urllib.request.urlopen(base+path) as response:
  assert response.status==200,path
  html=response.read().decode();p=Page();p.feed(html);pages[path]=p
  assert p.h1==1,(path,'h1 count',p.h1)
  assert p.title,(path,'missing title')
  assert 'Leave a space' not in html and 'Lorem ipsum' not in html,path
  assert response.headers.get('X-Content-Type-Options')=='nosniff',(path,'security header')
for path,p in pages.items():
 for link in p.links:
  u=urlsplit(link)
  assert u.path in pages,(path,'broken route',link)
  if u.fragment:assert u.fragment in pages[u.path].ids,(path,'broken anchor',link)
 for src in p.images:
  if src.startswith('/'):
   with urllib.request.urlopen(base+src) as r:assert r.status==200
print('PASS: 16 routes, exactly one H1 each, page titles, internal destinations/anchors, images and security headers.')
for path,expected in [('/this-page-does-not-exist',404),('/sitemap.xml',200),('/robots.txt',200)]:
 try:r=urllib.request.urlopen(base+path);status=r.status
 except urllib.error.HTTPError as e:status=e.code
 assert status==expected,(path,status)
print('PASS: 404, sitemap and robots.')
def post(data,origin=base):
 req=urllib.request.Request(base+'/api/enquiries',data=json.dumps(data).encode(),headers={'Content-Type':'application/json','Origin':origin},method='POST')
 try:
  with urllib.request.urlopen(req) as r:return r.status,json.loads(r.read())
 except urllib.error.HTTPError as e:return e.code,json.loads(e.read())
valid={'name':'Local QA','email':'qa@example.invalid','company':'Local test only','phone':'','message':'Local validation test. Do not deliver.','interest':'Payroll','consent':True,'website':''}
# No webhook is configured in the test environment; these requests cannot send externally.
assert post(valid)[0]==503
assert post(valid)[1].get('code')=='EMAIL_FALLBACK'
for key,value in [('email','invalid'),('name',''),('consent',False),('interest','Invalid'),('message','x'*3001),('website','spam')]:
 candidate={**valid,key:value};assert post(candidate)[0]==400,key
assert post(valid,'https://unrelated.invalid')[0]==403
print('PASS: email fallback, input bounds, required fields, consent, honeypot, interest allowlist and cross-origin rejection. No messages sent.')
