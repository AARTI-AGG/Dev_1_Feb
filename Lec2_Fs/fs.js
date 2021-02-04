const fs = require('fs');
// FS module => nodejs module
// import

// read a file

// low level data =>  buffer data
let f1KaData = fs.readFileSync("./f1.txt");
console.log(f1KaData+"");