// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)

// function f(x,y)
// {
    
//     var pro= function(y)
//     {
//         return x* y;
//     }
//     if(typeof y =='undefined')
//     {
//         return pro;
//     }
//     else
//     {
//         return pro(y);
//     }
// }

const f = (x, y) => (y || y === 0) ? x * y  : (y) => x * y ;
console.log(f(2,4));
console.log(f(2)(4));
