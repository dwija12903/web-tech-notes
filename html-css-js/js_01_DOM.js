//document object model
//it structural representation of html file,nodes and trees created by javascript
//it is object oriented and is used to manipulate and it has its own methods and properties
//html tag is root element 
//head,body,title are all children 

//EXAMINE DOCUMENT OBJCT
console.dir(document); //gives all the directatory of object document 
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = '123'; //changes title name
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); //tells everything in dom ie html
console.log(document.all[10]) //tells 10th line in hmtl
console.log(document.forms); //collection of forms
console.log(document.links); //returns all link
console.log(document.images);

//SELECTORS
console.log(document.getElementById('header-title'));
var headertitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headertitle);
headertitle.textContent = 'Hello'; //changes text of id=header-title
headertitle.innerText='goodbye'; //same as previous one only diffrence is it ignores style tag
headertitle.innerHTML = '<h3>HELLO</h3>'; //it just puts inside the dom element means only text will be removed of previous one and this will be added completly new
header.style.borderBottom= 'solid 3px';
//name.style.property = '';

var items =document.getElementsByClassName('list-group-item'); //only runs in specified class
console.log(items);
console.log(items[3]);
items[1].textContent='hello';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';
items.style.backgroundColor="black" //does not work error to do this, run following 
for(var i=0;i<items.length;i++){
  items[i].style.backgroundColor='grey';
}

var li =document.getElementsByTagName('li'); //it goes by tag name not class, all the li tags will be included
console.log(li);
console.log(li[3]);
li[1].textContent='hello';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';
//li.style.backgroundColor="black" //does not work error to do this, run following 
for(var i=0;i<li.length;i++){
  li[i].style.backgroundColor='grey';
}

//QUERY SELCTOR-used for more than one elemnts
var headerr= docuemnt.querySelector('#main-header');
headerr.style.borderBottom='solid 4px';
var input= docuemnt.querySelector('input');
input.value= 'hello world'; //adds value to the input 
var submit = docuemnt.querySelector('input[type="submit"]');