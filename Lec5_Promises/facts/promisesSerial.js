const fs = require("fs");

//it will print in serial manner---f1--f2--f3 always
//same as asyncSerial in lecture4 facts
let f1KaPromise = fs.promises.readFile("./f1.txt");


// promise hell (same as callback hell)
//f1 success hogya toh f2 promise ...f2 sucess hogya toh f3 promises
f1KaPromise.then(function(data){
    console.log(data+"");
    let f2KaPromise = fs.promises.readFile("./f2.txt");
    f2KaPromise.then(function(data){
        console.log(data+"");
        let f3KaPromise = fs.promises.readFile("./f3.txt");
        f3KaPromise.then(function(data){
            console.log(data+"")
        })
    })
})


// solution-promise chaining !!!
