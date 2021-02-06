//npm i cheerio
//packages
//homepage-getallmatches-match (view results -scorecard-table of all matches of both team )
const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");
const getAllMatches = require("./allMatches");
//const {getAllMatches}=require("./allMatches");

//path of the website
let path="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

//request in built fn accepts path and call back fn
request(path,cb);

//call back function for creating files
// function cb(error,response,html) {

//     fs.writeFileSync("./error.txt",error+"");
//     fs.writeFileSync("./response.txt", JSON.stringify(response));
//     fs.writeFileSync("./data.html",html+"");
// }

 function cb(error,response,html){
if(error==null)
{
    //data successfully arrived
        processHtml(html);
}
else if(response.satatusCode="404")
{
    console.log("Page Not Found!");
}
else{
    console.log(error);
}
}

function processHtml(html)
{
    //console.log("Inside processHtml");
    //loading html file through cheerio and taking href attribute of view results in that web page
  let ch=cheerio.load(html);
  let aTag= ch(".widget-items.cta-link a");
  //console.log(aTag);
  let link= aTag.attr("href");
  //link of next page after clicking view results
  let completeLink= "https://www.espncricinfo.com"+link;
  //console.log(completeLink);
 getAllMatches(completeLink); //will call this fn from allMatches.js
}