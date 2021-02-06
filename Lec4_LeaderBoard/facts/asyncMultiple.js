const fs = require("fs");

// the serial may change 
//start-end-f1-f2-f3 or f2-f3-f1 and so on
console.log("start");

fs.readFile("./f1.txt" , function(err , data){
    console.log(data+""); // 
})

fs.readFile("./f2.txt" , function(err , data){
    console.log(data+"");
})

fs.readFile("./f3.txt" , function(err , data){
    console.log(data+"");
})


console.log("end");
