// promitive datatype

// 7 types: String,Number,boolean, null,undefined,symbol,BigInt

const score = 100 
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id =Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId) // false


const bigNumber = 5234524526262564352n

console.log(bigNumber)

//Reference Type/Non-Primitive

//Array,objects,functions


const heros = ["shaktiman","naagraj","doga"]

let myobj={
    name :"Ashish",
    age:21
}


const myfunction=function(){
    console.log("Hello world")
}

console.log(typeof bigNumber) // bigint
console.log(typeof heros) // object
console.log(typeof outsideTemp)// object
console.log(typeof myobj) // object
console.log(typeof myfunction) // function


