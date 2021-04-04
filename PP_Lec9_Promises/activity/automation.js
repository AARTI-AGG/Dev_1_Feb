const puppeteer = require("puppeteer");

//all fns of puppeteer gives pendong promise initially

//opens a browser instance 

let browserOpenPromise=puppeteer.launch({headless:false,defaultViewport:null,args:["--start-maximized"],});
//Promise<pending>

browserOpenPromise.then(function(browser){
console.log("browser opened!");
console.log(browser);
let allPagesPromise= browser.pages();
return allPagesPromise;
})
.then(function(pages){
    let tab= pages[0];let pageOpenPromise= tab.goto("https://www.google.com");
    return pageOpenPromise;
})
.then(function(){
    console.log("google homepage opened !!!!!");
})
.catch(function(error){
    console.log(error);
})