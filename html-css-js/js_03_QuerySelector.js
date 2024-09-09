console.log(window); //window object
window.alert("hello"); //we can use window also but we dont use it bcoz its default

//single elements
console.log(document.getElementById('my-form')); //print that element from html
document.querySelector('h1') //same as getelementbyid but is new way and is used to write except id also //only selects first one

//multiple elements
document.querySelectorAll('.item') //selects all the html lines with class item
document.getElementsByClassName('item') //access element by class name 
document.getElementsByTagName('li'); 

const items =document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

const ul=document.querySelector('.items');
// ul.remove(); //removes all 
ul.lastElementChild.remove(); //removes lastelement
ul.firstElementChild.textContent="hello"; //changes the value of first wlement in the ul mentioned class/id
ul.children[1].innerText = 'dwija'; //acceses the value in class item and changes value to dwija    //textcontent anf innerText are same 
ul.lastElementChild.innerHTML='<h4>PAnchal</h4'; // inner html helps to add html dynamically through javascript 

const btn=document.querySelector('.btn');
btn.style.background='red'; // allows to change the style of the class selected

btn.addEventListener('click',(e) => {
  e.preventDefault(); //saves the value and doesnot flash and go away
  console.log("click");
  console.log(e.traget ) //gives us actual element that is the btn class line
  e.traget.className; //gives class name only
  document.querySelector('#my-form').style.background="green"; //changes the colour when event occurs
  document.querySelector('.item').lastElementChild.innerHTML="<h4>dwiiiijaaa</h4>";
}) //when any event means operation occurs in class mentioned in btn const tell it will give curly bracket values

const nameinput=document.querySelector('#name');
const myform= document.querySelector('#my-form');
const emailinput=document.querySelector('#email');
const msg=document.querySelector('.msg');
myform.addEventListener("submit",onsubmit);
function onsubmit(e){
  e.preventDefault();
  console.log(nameinput); //prints the name class query
  nameinput.value //will retue input value
  if(nameinput.value=='' || emailinput.value==''){
    msg.innerHTML='please enter all details';
  }else{
    console.log('success');
  }
}



