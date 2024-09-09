var url = require('url');
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//serilized url
myUrl.toString();
myUrl.href;

//Host (root domain)
myUrl.host; //mywebsite.com:8000

//Hostname (does not get port)
myUrl.hostname; //mywebsite.com

//Pathname
myUrl.pathname; // /hello.html

//Serialized query
myUrl.search; // ?id=100&status=active