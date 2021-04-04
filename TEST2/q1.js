//side effects it will mutate the values of arr (outside the scope of fn).
let arr = [1, 2, 3, 4];

function f(arr) {
    let a = arr.slice();
    for (x in a) {
        a[x] = 0;
    }
    return a;
}

console.log(arr);

console.log(f(arr));

console.log(arr);
