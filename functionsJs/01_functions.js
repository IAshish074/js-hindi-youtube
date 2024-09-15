// function sayMyName()
// {
// console.log("A");
// console.log("s");
// console.log("h");
// console.log("i");
// console.log("s");
// console.log("s");
// console.log("h");
// }

// sayMyName()


function addTwoNumbers(number1 , number2){

    // console.log(number1 + number2);

    return number1 +  number2
    

}

const result = addTwoNumbers(3,"4")

// console.log("Result :",result)


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username")

    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Ashish"))