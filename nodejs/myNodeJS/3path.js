const path =require('path');

//Base filename 
console.log(__filename); //gives entire path
console.log(path.basename(__filename)); //gives only the file name

//Directroy name 
console.log(__dirname); //entire path 
console.log(path.dirname(__filename)); //same as above 

//Extetion name 
console.log(path.extname(__filename)); //gives the extention of the file

//Creating Path object 
console.log(path.parse(__filename)); //gives the entire path in object form
console.log(path.parse(__filename).base); //gives the file name
console.log(path.parse(__filename).ext); //gives the extention of the file

//Merge 2 directories
console.log(path.join(__dirname,'dwija','text.txt')) //gives the entire path of the file

//Normalizing the path
console.log(path.normalize(__dirname+'/dwija/21Bcp333')) //gives the entire path of the file
