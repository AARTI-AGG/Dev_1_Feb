console.log("Hello World");
let a=10.1;
console.log(a);

const b =15.6;
console.log(b);

if(true) {
const b=2.0; //scope limited to if
console.log(b);
}
console.log(b); 

//let a and const b not possible as with in the block scope , identifier is aready used.
let obj={
    "names":"steve",
    "skills":["martial arts","boxing"],
    "movies":["captain america","infinity war"]
};

console.log(obj.names);
console.log(obj.skills);

let key="skills"
console.log(obj[key]);
obj.places="New York";

obj.skills[2]="taekwando";
console.log(obj);

