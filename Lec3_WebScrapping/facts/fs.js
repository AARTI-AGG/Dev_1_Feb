const fs=require("fs");

//third party 
const cheerio=require("cheerio");

let htmlKaData=fs.readFileSync("./index.html");

//console.log(htmlKaData);

let ch= cheerio.load(htmlKaData);

//it can load all h1 tags present in the file
let h1Tags=ch("h1").text();
//console.log(h1Tags);

//if we want to select particular tags use "selectors"

let outerHi=ch("div h1").text();
//console.log(outerHi);

//let innerH1 = ch("ul h1").text();
//console.log(innerH1);

// classes and ids
// classes can be duplicate
// ids always unique in a page

// choose elements on the basis of id
let uniqueH1 = ch("#unique").text();
 //console.log(uniqueH1);

// choose elements on the basis of class => use dot

let innerH1 = ch(".heading.inner").text();
console.log(innerH1);