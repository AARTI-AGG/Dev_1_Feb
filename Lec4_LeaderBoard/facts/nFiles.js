const fs = require("fs");
let files = ["./f1.txt" , "./f2.txt" , "./f3.txt"];
// it will be same as asyncMultiple.js order may vary in callback

console.log("start");

for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(err , data){
        console.log(data+"");
    })
}

console.log("end");