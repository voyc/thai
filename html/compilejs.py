#!/usr/bin/python2.4

import httplib, urllib, sys

# Define the parameters for the POST request and encode them in
# a URL-safe format.

url = 'http://thai.voyc.com/'

arr = [
	('code_url', url + 'js/namespace.js'),
	('code_url', url + 'minimal/minimal.js'),
	('code_url', url + 'icon/icon.js'),
	('code_url', url + 'icon/lib/menu.js'),
	('code_url', url + 'jslib/utils.js'),
	('code_url', url + 'jslib/dragger.js'),
	('code_url', url + 'jslib/post.js'),
	('code_url', url + 'jslib/sync.js'),
	('code_url', url + 'keyboard.js'),
	('compilation_level', 'ADVANCED_OPTIMIZATIONS'),
	('language', 'ECMASCRIPT5'),
	('output_format', 'text'),
	('output_info', 'compiled_code'),
]

if (len(sys.argv) > 1):
	arr.append(('formatting', 'pretty_print'))

params = urllib.urlencode(arr)

# Always use the following value for the Content-type header.
headers = { "Content-type": "application/x-www-form-urlencoded" }
conn = httplib.HTTPSConnection('closure-compiler.appspot.com')
conn.request('POST', '/compile', params, headers)
response = conn.getresponse()
data = response.read()
print data
conn.close()
