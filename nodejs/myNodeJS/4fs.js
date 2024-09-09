var fs = require('fs');
const path =require('path');

//create a file 
fs.mkdir(path.normalize(__dirname+'fs_sample.txt'),function(err){
    if(err) throw err;
    console.log("Directory created");
})

// create and write to file 
// write File is Async and it will create a file if it does not exist
fs.writeFile(path.normalize(__dirname + 'fs_sample.txt'), 'This is a sample file', (err) => {
    if(err) throw err;
    console.log("file Written");
});
//it overwrites the file if it exists

fs.appendFile(path.normalize(__dirname+'fs_sample.txt'), ' Edited BY dwija', function(err){
    if (err) throw err;
    console.log("File edited");
})

// Read File
fs.readFile('E:/VS studio/Nodejs/learning nodefs_sample.txt', function(err, data) {
    if (err) throw err;
    console.log(data.toString());
})

//Rename file
fs.rename(
    path.join(__dirname,'fs_sample.txt'),
    path.join(__dirname,'DwijaFS.txt'),
    function(err){
    if (err) throw err;
    console.log("File Renamed");
});

//All the above methods are Async and they have a sync version as well
//Sync version of write file
fs.writeFileSync('fs_sample.txt', 'This is a sample file');
//Sync version of read file
const data = fs.readFileSync('fs_sample.txt');
console.log(data.toString());
//Sync version of append file
fs.appendFileSync('fs_sample.txt', ' Edited BY dwija');
//Sync version of rename file
fs.renameSync('fs_sample.txt', 'DwijaFS.txt');