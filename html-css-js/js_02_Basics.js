//PRINTING WAYS
console.log("hello");                  //to print
console.error("this is error");        //to print error message
console.warn("your warning");          //to print warning message

alert("are you sure dwija?");

//DATATYPES
var age;                    //datatype is var that is variable
const name = 'dwija';         //constant datatype, it does not changes its value
let num = 12; //allows to update number
const x = undefined;
console.log(typeof x);       //tells type of datatype
console.log(name);
console.log(num);

//TO PRINT, CONCATENATION
console.log('my name is '+ name +' and age is '+num)       //old way of concatenation
console.log(`my name is ${name}`)                         //template way of concatenation

const txt=`my age is ${num}`;                             //new way to print by assigning variabless
console.log(txt);

//STRING OPERATIONS
const s="hello world"
console.log(s.toUpperCase())                   //changes to uppercase
console.log(s.toLowerCase())                   //to lower case
console.log(s.split(""))                       //converts string to array
console.log(s.substring(0,5))                  //used as slicing from 0 to 5
console.log(s.substring(2,8).toUpperCase())    //sliced and then converted to string

//ARRAYS- can hold multiple datatypes
arr=['dwija',12,true,'krishu'];
console.log(arr[1]);                            //print element indexed at 1
console.log(arr);                               //prints the array
arr.push('panchals');                           //appends element
arr.unshift("fruits");                          //element appended at start
arr.pop();                                      //last element poped
console.log(Array.isArray(arr));                // checks it is array or not
console.log(arr.indexOf(12));                   //tells index of element

//WORKING WITH OBJECTS 
const perso={
  nm:'dwija',
  lastName :'panchal',
  age: 20,
  hobbies: ['dance','sing','hop'],
  address:{
    street: 'balitha',
    area: 'vapi',
    pincode: 297362
  }
}
console.log(perso);
console.log(perso.age)
console.log(perso.hobbies[2]);
console.log(perso.address.area);
// to print name,age as variables 
const {nm,address:{area}} = perso // all the things inside console can be accessed directly as varibales
console.log(nm)
person.email='dwija12@gmail.com' //adds to the object
console.log(`updated object ${perso}`);

//ARRAYS OF OBJECTS 
const a=[
  {
    id:1,
    text: 'take the trash out',
    iscompleted: true
  },
  {
    id:2,
    text: 'meeting with boss',
    iscompleted: true
  },
  {
    id:3,
    text: 'appointment',
    iscompleted: false
  }
]
 console.log(a);
 console.log(a[1].text) //goes to index 1 and prints property of text
 const convert= JSON.stringify(a); //converts the array into json format
 //  traverse array
 //way 1
 for(let i of a){ 
  console.log(i); //prints each element
  console.log(i.text); //prints text from each element
 }
 //way2
 for (let i=0;i<a.length;i++){
  console.log(a[i].text); //prints text of each elememt
 }
 //way3 usinf forEach,map,filter
 a.forEach(function(x){ //foreach method
    console.log(x.id) 
  }
)
const q =a.map(function(i){ //map method
  return i.area;
})
console.log(q) //prints q that is adress
const w = a.filter(function(i){
  return i.iscompleted==true //prints the whole array element when the iscompeted is true
}).map(function(i){
  return i.id //this allows to print only text from the element whoses iscompleted is true
})
console.log(w)

//for loop
 for(let i=0;i<=5;i++){
  console.log(`For loop iterations: ${i}`);
 }

 //while loop
 let j=0
 while (j<=5){
  console.log(`While loop iteration ${j}`);
  j++;
 }

 //IF ELSE statement if(condition){}else{}
 // == does not campare datatypes it only watches values
 // === campares the datatype 
 // ||=or &&=and 

 // ternery operator ? (meaning then)
 const x1=10
 const colour= x1>10 ? 'red' : 'blue';
 console.log(colour) //prints blue bcoz x is not less than 10

 // SWITCH statement switch(condition){case: statement break case: default: statemnt}

 //FUNCTIONS
 //way1
 function addnums(n1,n2){
  return n1+n2 //returns the value and then we need ti print it
 }
 function addnums1(n1,n2){
  console.log(n1+n2) //prints the value 
 }
 function addnums2(n1=3,n2=2){ //add default parameters
  return n1+n2 
 }
 const addnums3= (n1,n2) =>{ //function using const
  return n1+n2
 }
 const addnum4=(n1,n2) => console.log(n1+n2) //without curly brackets , by dont write return
 addnums1(); //if no values entered and no default parementer also present then output will be NaN

//OOPS in javascript
function person(name,age,gender,dob){ //constructor
  this.name=name;
  this.age=age;
  this.gender=gender;
  this.dob=dob
}
person.prototype.getyear=function(){
  return person.date.getFullyear();
}

const p1=new person('dwija',20,'female','3-6-2003'); //instantiance of object
console.log(p1.age); //prints age
p1.getyear // tells the bday year 

class person2{ //other way
  constructor(name,age,dob){
    this.name=name;
    this.age=age;
    this.dob=dob;
  }
  getyear(){ //object
    return this.dob.getyear();
  }
}
const p2 = new person2('krishiv',16,'4-9-2007');
console.log(p2.getyear); 