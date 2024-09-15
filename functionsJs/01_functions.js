// // function sayMyName()
// // {
// // console.log("A");
// // console.log("s");
// // console.log("h");
// // console.log("i");
// // console.log("s");
// // console.log("s");
// // console.log("h");
// // }

// // sayMyName()


// function addTwoNumbers(number1 , number2){

//     // console.log(number1 + number2);

//     return number1 +  number2
    

// }

// const result = addTwoNumbers(3,"4")

// // console.log("Result :",result)


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username")

//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Ashish"))

function calculateCarrtPrice(val1, val2,...num1){
return num1
}
// console.log(calculateCarrtPrice(200,400,500,2000))


const user = { 
    userName : "Ashish",
    price : 199

}

function handleObject(anyobject){

    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}
// handleObject(user)

handleObject({
    userName : "sam",
    price : 399
})


const myNewArray = [200 , 400 ,100 , 600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))