//my version of moderatorAdd.js
const puppeteer = require("puppeteer");

const id="lidano9735@hrandod.com";
const pw="123456789";

// IIFE => Immediately Invoked Function Expressions
(async function () {
  try{

      let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null, // page size reset
      args: ["--start-maximized"], // browser maximize
    });
    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    await tab.waitForSelector("#input-1", { visible: true });
    await tab.type("#input-1", id);
    await tab.type("#input-2", pw);
    await tab.click(
      ".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled"
    );
    await tab.waitForSelector('div[data-analytics="NavBarProfileDropDown"]', {
      visible: true,
    });
    let dropDown = await tab.$('div[data-analytics="NavBarProfileDropDown"]');
    await dropDown.click();
    await tab.waitForSelector('a[data-analytics="NavBarProfileDropDownAdministration"]');
    await Promise.all( [ tab.waitForNavigation({waitUntil:"networkidle2"}) ,tab.click('a[data-analytics="NavBarProfileDropDownAdministration"]')]); 
    
    await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li", {
      visible: true,
    });
    let bothLis = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
    let manageChallengeLi = bothLis[1];
    manageChallengeLi.click();
    await visitpage(browser,tab);
   
  }
  catch(error){
      console.log(error);
  }
})();

async function visitpage(browser,tab){
try{
   await tab.waitForSelector('a[data-attr1="Page"]', {visible:true})
   let pageATags= await tab.$$('a[data-attr1="Page"]');
   let pageATagsLinks=[];
   for(let i=0;i<pageATags.length;i++){
    let plink=await tab.evaluate(function(elem){return elem.getAttribute("href")} , pageATags[i]);
    pageATagsLinks.push(`https://www.hackerrank.com${plink}`);
   
   }
    //console.log(pageATagsLinks);
   for(let i=0;i<pageATagsLinks.length;i++){
    await tab.goto(pageATagsLinks[i]);
    await addModerators(browser , tab); // add moderators to all the questions on all the pages
   }
   await tab.goto(pageATagsLinks[0]);
}
catch(error){
    console.log(error);
}
}
async function addModerators(browser , tab){
  try{
      await tab.waitForSelector('.backbone.block-center' , {visible:true});
      let allQuesATags = await tab.$$('.backbone.block-center');
      let allQuesLinks = [];
      for(let i=0 ; i<allQuesATags.length ; i++){
          let qLink = await tab.evaluate( function(elem){ return elem.getAttribute("href")}   , allQuesATags[i])
          allQuesLinks.push(`https://www.hackerrank.com${qLink}`);
      }
      for(let i=0 ; i<allQuesLinks.length ; i++){
          let newTab = await browser.newPage();
      addModeratorToAQues(allQuesLinks[i] , newTab );
      }
  }
  catch(error){
      return error;
  }
}

async function handleConfirmBtn(tab){
  try{
      await tab.waitForSelector('#confirm-modal' , {visible:true , timeout:5000});
      await tab.click('#confirmBtn');
  }
  catch(error){
      return;
  }
}
async function addModeratorToAQues(qLink , newTab){
  await newTab.goto(qLink);
  await handleConfirmBtn(newTab);
  await newTab.waitForSelector('li[data-tab="moderators"]' , {visible:true});
  await newTab.click('li[data-tab="moderators"]');
  await newTab.waitForSelector('#moderator' , {visible:true} );
  await newTab.type('#moderator', "aarti");
  await newTab.click('.btn.moderator-save');
  await newTab.click('.save-challenge.btn.btn-green');
  await newTab.close();
}

