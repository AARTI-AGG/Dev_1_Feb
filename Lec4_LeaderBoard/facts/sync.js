const fs = require("fs");
//sync start - f1 -end always

console.log("start");


let f1KaData = fs.readFileSync("./f1.txt"); //web  
console.log(f1KaData+"");


console.log("end");