// Q) How to implement setInterval of your own using setTimeout
function customSetInterval (fun, interval){
   return setTimeout(function(){
       fun();
       customSetInterval(fun,interval);
},interval);
}


  
function f(){
        console.log('hello')
  }
let id = customSetInterval(f, 1000);
