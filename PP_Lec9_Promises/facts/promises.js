const fs = require('fs');
 //b gets a pp                   //a pending promise
let pendingPromise=fs.promises.readFile("./f1.txt");
//pending
console.log(pendingPromise);


//scb
pendingPromise.then(function(data){
   console.log("inside scb")
    console.log(data+"");
    console.log(pendingPromise);
});

//fcb
pendingPromise.catch(function(error){
    console.log("Inside fcb");
    console.log(error);
    console.log(pendingPromise);
});

console.log("outside scb or fcb!")