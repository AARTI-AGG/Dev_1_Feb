const puppeteer= require("puppeteer");
//promisified -every fn returns a pending promise 

//fake account created from temp mail.org

const id="lidano9735@hrandod.com";
const pw="123456789";
let tab;
let idx;
let gCode;
//open a browser instance 
//headless false means it will show you the browser instance
let browserOpenPromise=puppeteer.launch({headless: false,
    defaultViewport:null,
    args:["--start-maximized"],
});
console.log(browserOpenPromise);

//.pages shows the total no of pages
browserOpenPromise.then(function(browser){
let pagesPromise=browser.pages();
return pagesPromise;
})
//go to by default have wait fn
.then(function(pages){
    let page=pages[0];
    tab=page;
    let pageOpenPromise=page.goto("https://www.hackerrank.com/auth/login");
    return pageOpenPromise;
})
.then(function(){
    let waitPromise= tab.waitForSelector("#input-1",{visible:true}); 
    return waitPromise;
})
//will automatically type id and pswd field
.then(function(){
let idTypedPromise=tab.type("#input-1", id);
return idTypedPromise;
})
.then(function(){
    let pwTypedPromise=tab.type("#input-2", pw);
    return pwTypedPromise;
})
.then(function(){
    let loginPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginPromise;
})
.then(function(){
    let waitAndClickPromise = waitAndClick('#base-card-1-link');
    return waitAndClickPromise;
  })
  .then(function(){
    let waitAndClickPromise = waitAndClick('a[data-attr1="warmup"]');
    return waitAndClickPromise;
  })

  .then(function(){
    let waitPromise = tab.waitForSelector('.js-track-click.challenge-list-item' , {visible:true} );
    return waitPromise;
})
//tab $$ will perform the operation on dom  will calculate all a tags(basically all challenges)
.then(function(){
    let allATagsPromise = tab.$$('.js-track-click.challenge-list-item');
    return allATagsPromise;
    // Promise<pending>
})
.then(function(allATags){
   // console.log(allATags);
    // [<a> </a> , <a> </a> , <a> </a> , <a> </a> ];
    
    let allLinksPromise = [];
    //   [ Promise<pending> , Promise<pending> , Promise<pending> , Promise<pending> ];

    //evaluate will take a fn and attribute which will calculate href tags for all a tags and then  push in the array
    for(let i=0 ; i<allATags.length ; i++){
        let linkPromise = tab.evaluate( function(elem){  return elem.getAttribute("href");  }   ,  allATags[i] );
        allLinksPromise.push(linkPromise);
    }
    
    //when allLinksPromise changes there state from pending to resolved
    //takes promises in array form and will return pp- we used Promise.all to avoid callback hell
    let pendingPromise = Promise.all(allLinksPromise);
    return pendingPromise;  
})     
 // gives href link
.then(function(allLinks){
  //solve first question
  let oneQuesSolvedPromise = solveQuestion(allLinks[0]);
  //after that it solves each question one by one ----chaining with loop concept
  for(let i=1 ; i<allLinks.length ; i++){
    oneQuesSolvedPromise = oneQuesSolvedPromise.then(function(){
      let nextQuesSolvePromise = solveQuestion(allLinks[i]);
      return nextQuesSolvePromise;
    })
  }
  return oneQuesSolvedPromise;
})
.then(function(){
  console.log("All Questions solved !!!! ");
})
.catch(function(error){
console.log(error);
})
//it will wait and click if there is any unlock button in the editorial
function handleLockBtn(){
  return new Promise(function(resolve , reject){
    let waitLockPromise = tab.waitForSelector('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled' , {visible:true , timeout:5000});
    waitLockPromise.then(function(){
      let lockBtnClickedPromise = tab.click('.ui-btn.ui-btn-normal.ui-btn-primary.ui-btn-styled');
      return lockBtnClickedPromise;
    })
    .then(function(){
      //lock btn found and clicked
      console.log("lock btn found and clicked");
      resolve();
    })
    .catch(function(error){
      //lock btn not found !!
      console.log("lock btn not found !!");
      resolve();
    })
  })
}

function solveQuestion(qLink){
    return new Promise(function(resolve , reject){
      let gotoPromise = tab.goto("https://www.hackerrank.com"+qLink);
      gotoPromise
      .then(function () {
        let clickPromise = waitAndClick('div[data-attr2="Editorial"]');
        return clickPromise;
      })
      .then(function(){
        let lockBtnPromise = handleLockBtn();
        return lockBtnPromise;
      })
      .then(function(){
        let codePromise = getCode();
        return codePromise;
      })
      .then(function(){
        let clickPromise = tab.click('div[data-attr2="Problem"]');
        return clickPromise;
      })
      .then(function(){
        let pasteCodePromise = pasteCode();
        return pasteCodePromise;
      }).then(function(){
        let submitPromise = tab.click('.pull-right.btn.btn-primary.hr-monaco-submit');
        return submitPromise;
      })
      .then(function(){
        resolve();
      })
      .catch(function(error){
        reject(error);
      })     
  });
}
  function getCode(){
    return new Promise(function(resolve , reject){
//we will calculate the heading names for code and search index for c++ and then on that indexed div we will find its contents
    let waitPromise=tab.waitForSelector('.hackdown-content h3',{visible:true});

waitPromise.then(function(){
    let allCodeNamesPromise=tab.$$('.hackdown-content h3');
    return allCodeNamesPromise; //promise<pending>
})
.then(function(allCodeElements){
  // will give <h3>C++</h3> , <h3>Python</h3> , <h3>Java</h3>
  let codeNamesPromise = [];
  // [Promise<pending> , Promise<pending> , Promise<pending> ];

  for(let i=0 ; i<allCodeElements.length ; i++){
    let codeNamePromise = tab.evaluate( function(elem){ return elem.textContent;    }   , allCodeElements[i] );
    codeNamesPromise.push(codeNamePromise);
  }
  //it will return pp and check if all three previous promises are resolved then its state will also change
  let pendingPromise =Promise.all(codeNamesPromise);
  return pendingPromise; // Promise<pending>
})
.then(function(allCodeNames){
  // [ "C++" , "Python" , "Java" ];
  for(let i=0 ; i<allCodeNames.length ; i++){
    if(allCodeNames[i] == "C++"){
      idx = i;
      break;
    }
  }
  let allCodeDivPromise = tab.$$(".hackdown-content .highlight");
  return allCodeDivPromise;
})
.then(function(allCodeDiv){
  // [ <div class="highlight">code</div> , <div class="highlight">code</div> , <div class="highlight">code</div>];
  let codeDiv = allCodeDiv[idx];
  let codePromise = tab.evaluate( function(elem){ return elem.textContent;  } , codeDiv);
  return codePromise;
})
.then(function(code){
    gCode = code;
    resolve();
  })
  .catch(function(error){
    reject(error);
  })
});
}
function pasteCode(){
    return new Promise(function(resolve , reject){
      let waitAndClickPromise = waitAndClick('.custom-input-checkbox');
      waitAndClickPromise.then(function(){
        let codeTypePromise = tab.type('.custominput' , gCode);
        return codeTypePromise;
      }).then(function(){
        let ctrlDownPromise = tab.keyboard.down("Control");
        return ctrlDownPromise;
      })
      .then(function(){
        let aKeyPromise = tab.keyboard.press("A");
        return aKeyPromise;
      })
      .then(function(){
        let xKeyPromise = tab.keyboard.press("X");
        return xKeyPromise;
      })
      .then(function(){
        let clickPromise = tab.click('.monaco-scrollable-element.editor-scrollable.vs');
        return clickPromise;
      })
      .then(function(){
        let aKeyPromise = tab.keyboard.press("A");
        return aKeyPromise;
      }).then(function(){
        let vKeyPromise = tab.keyboard.press("V");
        return vKeyPromise;
      }).then(function(){
        let ctrlUpPromise = tab.keyboard.up("Control");
        return ctrlUpPromise;
      })
      .then(function(){
        resolve();
      })
      .catch(function(error){
        reject(error);
      })
    })
  }




function waitAndClick(selector){
return new Promise(function(resolve,reject){
//resolve will call scb (next then)
//reject will call fcb(next catch)
 // waitForSelector wait until it is visible on dom ---- as it will start looking for interview kit in the  login page itself
let waitPromise= tab.waitForSelector(selector,{visible:true}); //Promise<Pending>
waitPromise.then(function(){
let clickPromise=tab.click(selector);
return clickPromise;
})//call scb
.then(function(){
    resolve();
})//call fcb ---last catch
.catch(function(error){
    reject(error);
})
})
}