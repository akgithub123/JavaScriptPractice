//Scope of variables
//! Var = Functional / Global scope - depends on its declaration, other than that it by default takes global scope
// block scope (by default global scope)is different than functional scope for var but same for let

var greet = "evening"
let ans = "yes"

function print(a,b) {
    var greet = "morning"
    let ans = "no"  // it is block scope
    return a+b;
}

if (1==1){
    var greet = "afternoon"  // so by default block scope is global scope for var type, here it overwrites globally declared greet
    let ans = "neutral"   // it is block scope
}

console.log(greet)
console.log(ans)
console.log(print(2,3))

//main differences between let, var and const

//* 1.var can be reinitialized, redeclare and it has a functional/global scope
//* 2.let can be reinitialized, but cannot be redeclare and it has a block/global scope
//* 3.const cannot be reinitialized or redeclare 




