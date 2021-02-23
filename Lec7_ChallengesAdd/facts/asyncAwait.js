//async await concept.
let fs = require("fs");
// async keyword function body

// sync fun
function fun(){
    console.log("I am fun !!");
}
// fun();


// async fun returns a promise
async function fun(){
    console.log("I am async fun !!");
}

// fun();

// async keyword => function will be exectued on Node API
// await keyword can only be used inside async function !!

// NODE API
async function fun(){
    try{
        //phle f1 ka data aayega fir f2 ka data ayega 
        let f1KaData = await fs.promises.readFile("./f1.txt");
        let f2KaData =await fs.promises.readFile("./f2.txt");
        console.log(f1KaData+"");
        console.log(f2KaData+"");
        // or f1 and f2 ke promises bn gye fr jiska phle aagya vo console hoga
        // let f1KaData =  fs.promises.readFile("./f1.txt");
        // let f2KaData =  fs.promises.readFile("./f2.txt");
        // let data = await Promise.all([ f1KaPromise , f2KaPromise ]);
        // console.log(data+"");
    }
    catch(error){
        return error;
    }
}

fun();