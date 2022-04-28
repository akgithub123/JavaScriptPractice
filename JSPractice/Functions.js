//Functions and its syntax in JS

//! regular function

function add(a,b){
    return a+b
}
console.log(add(2,3))

//! anonymous function
//it contains function keyword but not function name

let use = function(c,d){
   return c+d
}
console.log(use(3,4))

// or by using arrow functions
let used = (a,b) => a+b
console.log(used(5,5))

var greet = () => 
{
    console.log("Welcome to nextiva!");
}
greet();





