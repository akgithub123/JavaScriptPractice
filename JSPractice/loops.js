const flag = false

//if expression is true then it will execute if block otherwise else block
if (flag) {
    console.log('condition satisfied')
}
else {
    console.log('condition not satisfied')
}

console.log('***********************************************8')

/**While loop */
//while loop keeps running unless condition becomes false
let i =0
while(i<10){
    i++
    console.log('inside the loop')
}

/**Do while loop */
//in do while loop it will execute once no matter if condition is false or true(before checking condition)
do 
{
    i++
}
while (i < 10){
    console.log(i)
}

/**for loop */
//for loop is used when you know how many times the loop should be run 
for (let k=0; k<=10; k++){
    console.log("value of k is"+ k)
}

//write program to print the common divisible number by 2 and 5 upto number 10
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%')
let n = 0
for (k=1;k<=100;k++){
    if (k%2 == 0 && k%5 == 0){
        n++    //incrementing n value
        console.log(k)
        if (n == 3)        //it will run the loop till we get first three common divisible numbers
        break    //break statement is used to break the flow of the loop
    }
}

