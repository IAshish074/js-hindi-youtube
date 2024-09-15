// const user = {
//     username : "Ashish" , 
//     price : 999 ,

//     welcomeMessage : function(){

//         console.log(`${this.username} , welcome to website`)

//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// console.log(this) // empty object


// function chai(){
//     let username = "Ashish"
//     console.log(this.username)
// }
// chai() --- undefined

// const chai = function(){
//     let userName = "Ashish"
//     console.log(this.userName)
// }
// chai() --- ye v undefined


// const chai = () => {
//     let uesrname = "Ashish"
//     console.log(this.username)
// }
// chai()


// const addTwo = (num1 , num2) => {
//     return  num1 + num2

// }
// when using curly braces in the function we have to use return keyword

// else we can use as follow

// const addTwo= (num1 , num2) => num1 + num2
// or we can write it in the same way
// const addTwo = (num1, num2) => (num1 + num2)

// this way is know as implicit return


const addTwo = (num1, num2) => ({username : "Ashish"})




console.log(addTwo(3 , 4))