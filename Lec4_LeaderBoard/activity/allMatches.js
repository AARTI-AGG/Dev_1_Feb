//file for allmatches (importing link from homepage.js)
const fs=require("fs");
const request=require("request");
const cheerio=require("cheerio");
const getMatch = require("./match");

function getAllMatches(link){

    request(link,cb);
}

function cb(error,response,html){

    if(error==null){
        processHtml(html);
    }
    else if(response.statusCode=="404"){
        console.log("Page not found!");
    }
    else{
        console.log(error);
    }
}

function processHtml(html){
    console.log("inside allMatches");
    //console.log("allMatches",html);
    //fs.writeFileSync("./allMatches.html",html)
    let ch =cheerio.load(html);
    let allATags=ch('a[data-hover="Scorecard"]');
    //console.log(allATags);

  //  60 links
 for(let i=0 ; i<allATags.length ; i++){
    let link = allATags[i].attribs.href;
    let completeLink = "https://www.espncricinfo.com"+link;
     //console.log(completeLink);
     getMatch(completeLink);
     
}
}

//nodejs empty object by default

//multiple fn exports
//module.exports.getAllMatches=getAllMatches;
//console.log(module.exports);

//single fn export
module.exports=getAllMatches;