const fs= require("fs");
//solution to promises hell- promises chaining(synch)
//1. initially promises are of pending state 
// 2. then and catch are attached 
//3. then attaches scb fn and catch attaches fcb
//4. then and catch also gives us a pending promise 
//5. then and catch are async functions

let f1KaPromise = fs.promises.readFile("./f1.txt");
f1KaPromise.then( function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    return f2KaPromise; //overide then ka promise
})
.then(function(data){
    console.log(data+"");
    let f3KaPromise = fs.promises.readFile("./f3.txt");
    return f3KaPromise; //overide then ka promise
})
.then(function(data){
    console.log(data+"");
})
//will run for every promises if an error comes
.catch(function(error){
    console.log(error);
})