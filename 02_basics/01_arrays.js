//array


const myArr = [0,1,2,3,4,5,true,"Ashish"]

const myHeros = ["Shaktiman","naagraj"]


const myArr2 = new Array(1,2,3,4)

// console.log(myArr[0])

// array methods

// myArr.push(7)
// myArr.push(6) // add the given element at the last of array elements
// myArr.pop() // remove element from the last of the array

// myArr.unshift(9) // add element at the start index of an array


// myArr.shift() //delete element from the start position

// console.log(myArr.includes(9)) // to check the element is present in the array or not
// console.log(myArr.indexOf(9)) // -1 because element does not exist in the array

// const newArray = myArr.join() // joined in the form of string with commas separated
// console.log(myArr)
// console.log(newArray)



//slice and splice


console.log("A", myArr);

const myn1 = myArr.slice(1,3) // no change in original array

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3) // change in original array

console.log("c", myArr);


console.log(myn2);






