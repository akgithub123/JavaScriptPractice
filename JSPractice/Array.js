//Basic syntax of declaring array
//let marks = Array(6)   // this statement defines array contains 6 elements
let marks2 = new Array(20, 30, 40, 50, 60, 90)
console.log(marks2)

//creating sub array from main array
subMarks = marks2.slice(1, 4)
// here 1 and 4 are index of array elements creates array from 2nd to 4th element of array
// 4 index is mentioned because it considers element before that index
console.log(subMarks)

//or the other way is simple way
let marks3 = [50, 90, 30, 60, 11, 100]
console.log(marks3)

/**operations performing on arrays */

//accessing the values of array using index
console.log("4th element of the array is: " + marks3[3]) //here index 3 shows 4th element from array

//updating elements of array array
marks3[2] = 99  // here changed the 3rd element of array to 99
console.log(marks3)

//getting the length of the array
console.log("length of the array is: " + marks3.length)

//adding element to the last of arrays
marks3.push(45) //appending 45 to last of array
console.log(marks3)
// adding element to the start of the array
marks3.unshift(121)
console.log("adding element to start: " + marks3)

// deleting element to from last of array
marks3.pop()
console.log("removed last ele of array: " + marks3)

//getting index of array element
console.log(marks3.indexOf(60))
console.log(marks3)

//performing sum of all elements of Array
let sum = 0
for (let mark of marks3) {
    sum = sum + mark
}
console.log(sum)

//!REDUCE Function
//reduce method used to perform operations on all the elements of an array
//here we are performing sum on all array elements
let total = marks3.reduce((s, curr) => s + curr, 0)
console.log("reduce o/p = "+total)

//!FILTER Function
//program to extract array of even numbers from given array
let arr = [12, 13, 14, 15]
let ArrEven = []

for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 == 0) {
        ArrEven.push(arr[j]);
    }
}
console.log(ArrEven)

//achieving above scenario using filter method
let evenFilter = arr.filter(arry => arry % 2 == 0)
console.log(evenFilter)

//! MAP Function
// map function creates new array with operation performed on all the elements of already provided array
let mappedArr = evenFilter.map(ary => ary*3) //here it is multiplying each element of evenFilter by 3 and storing in new array mappedArr
console.log(mappedArr) 

let addArr = mappedArr.map(arrr => arrr+4)
console.log(addArr)

let addedAr = addArr.reduce((su, summed) => su+summed , 0)
console.log(addedAr)

// chaining of functions 

let newArr = [5, 19, 16, 6, 33]

let reducedArr = newArr.map(ar => ar*3).filter(fil => fil % 2 == 0).reduce((cr, su) => cr+su, 0)
console.log(reducedArr)

// in arrow function "=>" this arrow called as flat pipe operator
//! SORT function Array
// sorting strings array
let sorArr = ['pratik','akshay','neelam']
console.log(sorArr.sort())

//sorting numbers array
let sorNum = [2, 14, 13, 3, 1]

//*sort function does not works properly for numbers array, so for that we need to use compare function inside sort method

let sortedNum = sorNum.sort((a,b)=>a-b)
console.log(sortedNum)















