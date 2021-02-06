const fs = require("fs");

//async file basically it will output- start,end,indefinite waiting in while and will not print data
console.log("start");

fs.readFile("./f1.txt" , cb );

function cb(error , data){
    console.log(data+"");
}

console.log("end");

while(true){

}