/*
convrsions and operations
*/
let score = "33abc"

console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score)// convert the value in number(int)

console.log(typeof valueInNumber);
console.log(valueInNumber) // the value is NaN(not a number) since 33abc is not a number type


let score2= null
console.log(typeof score2);
console.log(typeof(score2)); 

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2)
console.log(score2)



let score3 = undefined
console.log(typeof score3);
console.log(typeof(score3)); 

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3)
console.log(score3)


/*

"33" => 33
"33abc" => NaN
true=>1
false=>0

1=>true
0=>false

""=>false
"Ashish"=>true
 */

let isLoggedIn = "Ashish"
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
