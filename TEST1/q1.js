// const num = 5;
// console.log(num+5);
// let a = 6;
// a = a+num;
// console.log(num-a);

//var hota toh sbmeh 5 aata
// let a = 2;
// {
//   let a = 3;
//   {
//     let a = 4;
//     {
//       let a = 5;
//       console.log(a);
//     }
//     console.log(a);
//   }
//   console.log(a);
// }
// console.log(a);
// let input = [
//     { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
//     { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
//     { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
//     { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
// ]


// function getAvgRainfall(input){
//     // map , filter , reduce
// //makes fn to be called on every value of object
//     let modifiedInput = input.map( function(inputObj){
//         // { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }
//         let obj = {};
//         obj.name = inputObj.name;
// //reduces a array to single values
//         let sum = inputObj.rainfall.reduce( function(total , currentValue){
//             return total+currentValue;
//         });
//         let avgRainfall = sum/inputObj.rainfall.length;
//         obj.avgRainfall = avgRainfall;
//         return obj;
//     });
//     console.log(modifiedInput);
// }

// getAvgRainfall(input)


// let obj = {
//     newObj: {
//       obj2: {
//         obj5: {
//           one: 1,
//         },
//       },
//     },
//     obj3: {
//       obj4: { two: 2 },
//     },
// };
// console.log(obj);
// // { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }

// let flatObject = {};

// function flattenObject(obj , flatObject , keyTillNow){
//     for(key in obj){
//         if( typeof obj[key] == "object"){
//             keyTillNow = keyTillNow + key +"."
//             flattenObject( obj[key] , flatObject , keyTillNow);
//         }
//         else{
//             keyTillNow = keyTillNow + key;
//             flatObject[keyTillNow] = obj[key];
//         }
//     }
// }

// flattenObject(obj , flatObject , "");
// console.log(flatObject);
  

// let arr = [1, 2, 3];
// (function () {
//   for (x in arr) arr.unshift(arr.pop());
//   console.log(arr);
// })();

// let randomAdder = function (arr = ["a", "b"]) {
//     //console.log(arr.length);
//   arr[arr.length * arr.length] = arr.length * arr.length;
// };

// randomAdder(arr);
// randomAdder();

// console.log(arr[9]);
// console.log(arr[8]);

// (function () {
//     if ((-100 && 100 && "0") || [] === true || 0) {
//       console.log(1);
//       if ([] || (0 && false)) {
//         console.log(2);
//       }
  
//       if (Infinity && NaN && "false") {
//         console.log(3);
//         if ("") {
//           console.log(4);
//         }
//       } else {
//         console.log(5);
//         if (({} || false === "") && !(null && undefined)) {
//           console.log(6);
//         }
//       }
//     } else {
//       console.log(7);
//     }
//   })();

//   let a = "This only works if and only if";

// let b = a.slice(a.indexOf("only"));
// //console.log(b); //only ke baad vali string

// let c = b.lastIndexOf("only");
// console.log(c); //18
// b[c] = "i";

// console.log(a);
// console.log(b);

function f() {
    console.log(arguments);
  }
  
  function f(a, b) {
    return a + b;
  }
  
  console.log(f(2, 3, 4, 5));
  
  function f(x, y, z, t) {
      return x + y + z + t;
  }
  
  console.log(f(2, 3, 4, 5));
  