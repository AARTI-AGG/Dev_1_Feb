const fs = require("fs");
//promises introduction
// 1. => initial state of promise is pending -> Promise<Pending>
// 2. => pending state Promise<Pending> => then function => Promise<Data>
// 3. => Promise<Pending> => catch function => Promise<Rejected>

// reading file in async way using callbacks
// fs.readFile("filepath" , function(error , data){
// 
// })

//B                //A
let pendingPromise=fs.promises.readFile("./f11.txt");
console.log(pendingPromise);

//It automatically make then and catch fn( success or failure)

//function  in then is known as success callback fn
//pp.then() => attaches a scb to pending promise !!!
pendingPromise.then(function(data){
    console.log("Inside then !!");
    //console.log(pendingPromise);  
    console.log(data+"");
});


//fn in catch call is known as failure callback
// pp.catch() => attaches a fcb to pending promise !!!

pendingPromise.catch( function(error){
    console.log("Inside catch");
    //console.log(pendingPromise);
    console.log(error);
});