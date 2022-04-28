//! String is nothing but the collection of characters

let str = "afterday "

//getting length of string
console.log(str.length) 

// access the characters of string
console.log(str[3])

// Getting substring from main strings
console.log(str.slice(0,4))
// accessing characters of string
console.log(str[4])

//splitting string
let splitStr = str.split("e") // here it splits the string in two arrays (left to "e" 0th index, right to "e" index 1)
console.log(splitStr[1]) //here 1 is the index of the splitted string

//removing white spaces
console.log(str.length)
console.log(str.trim().length)





