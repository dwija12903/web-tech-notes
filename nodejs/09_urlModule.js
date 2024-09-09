const url= require('url');
const adr= 'http://123.4.5.6:8080/hello.html?fruit=apple&beverage=coffee';
const q = url.parse(adr, true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);