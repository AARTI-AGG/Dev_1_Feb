const fs = require("fs");
//it is same as asyncMultiple.js in lecture 4 facts

// it will not be in serial jiska phele data aya vo chalega

let f1KaPromise = fs.promises.readFile("./f1.txt");
let f2KaPromise = fs.promises.readFile("./f2.txt");
let f3KaPromise = fs.promises.readFile("./f3.txt");

f1KaPromise.then( function(data){
    console.log(data+"");
})
f1KaPromise.catch( function(error){
    console.log(error);
})

f2KaPromise.then(function(data){
    console.log(data+"");
})
f2KaPromise.catch( function(error){
    console.log(error);
})


f3KaPromise.then(function(data){
    console.log(data+"");
})
f3KaPromise.catch( function(error){
    console.log(error);
})
