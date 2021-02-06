//npm i cheerio
//packages
const request=require("request");
const fs=require("fs");
const cheerio=require("cheerio");

//path of the website
let path="https://www.espncricinfo.com/series/ipl-2020-21-1210595?ex_cid=ipl:google_cpc:search:dsa_feed:msn&gclid=Cj0KCQiA0-6ABhDMARIsAFVdQv9h4zxTheJZQYHUB_eAbDSDC8QYHZfrx8YTAlPGcO-lV9_2PRQnh2caAlrCEALw_wcB";

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
  console.log(completeLink);

}