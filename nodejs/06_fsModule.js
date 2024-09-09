const f = require('fs');

f.rename('./dwija.txt', 'NewName.txt', (err) => { // f.rename()
  if (err) throw err;
  console.log('File renamed successfully!');
});

f.unlink('./del_file.txt', (err) => { // f.unlink()
  if (err) throw err; 
  console.log('File deleted successfully!');
});

f.readFile('./text.txt', 'utf8', (err, data) => { // f.readFile()
  if (err) throw err;
  console.log('File Content:', data);
});

// f.writeFile()
f.writeFile('newFile.txt', 'Hello, Node.js!', (err) => {
  if (err) throw err;
  console.log('File written successfully!');
});
