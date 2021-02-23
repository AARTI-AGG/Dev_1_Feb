// we can create our own promise  -- reject (fail  state) -- resolve (success state)

const fs = require("fs");
// fn that will return a promise deals with reject and resolve which will map with catch and then respectively.
function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, function (err, data) {
      if (err) {
        //failure
        reject("I failed!!!");
      } 
      else {
        //success
        resolve("I succeed, how are you?");
      }
    });
  });
}

//f1KaPromise takes a function which will return a pending promise
const f1KaPromise = readFilePromisified("./f1.txt");

f1KaPromise.then(function (data) {
  console.log(data + "");
});

f1KaPromise.catch(function (error) {
  console.log(error);
});
