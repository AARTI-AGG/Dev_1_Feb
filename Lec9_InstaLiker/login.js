const puppeteer = require("puppeteer");
const{id,pw} = require("./credentials");  //module.exports ={    id: "..", pw: ".."}
// IIFE => Immediately Invoked Function Expressions
(async function () {
  try{

      let browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null, // page size reset
      args: ["--start-maximized"], // browser maximize
      slowMo:50
    });
    let pages = await browser.pages();
    let tab = pages[0];
    let name="pepper_pepcoding";
    await tab.goto("https://www.instagram.com/");
    await tab.waitForSelector('input[aria-label="Phone number, username, or email"]',{visible:true});
    await tab.type('input[name="username"]',id)
    await tab.type('input[name="password"]',pw)
    //for login page
    await Promise.all( [ tab.waitForNavigation({waitUntil:"networkidle2"}), tab.click('.sqdOP.L3NKy.y3zKF') ] );
    await tab.waitForSelector('.sqdOP.yWX7d.y3zKF' , {visible:true});
    await tab.click('.sqdOP.yWX7d.y3zKF');
    await tab.waitForSelector('.aOOlW.HoLwm' , {visible:true});
    await tab.click('.aOOlW.HoLwm');
    await tab.waitForSelector('.XTCLo.x3qfX' , {visible:true});
    await tab.type('.XTCLo.x3qfX',name);
    await tab.waitForSelector('.-qQT3' , {visible:true});
    // going to desired page
    await Promise.all( [ tab.waitForNavigation({waitUntil:"networkidle2"}), tab.click('.-qQT3') ] );
    await tab.waitForSelector('.eLAPa' , {visible:true});
    await tab.click('.eLAPa')
    for(let i=0 ; i<10 ; i++){ // i<109 
        await tab.waitForSelector('.fr66n .wpO6b' , {visible:true});
        await tab.click('.fr66n .wpO6b');
        await tab.click('._65Bje.coreSpriteRightPaginationArrow');
    }
}catch(error)
{
    console.log(error);
}
})();