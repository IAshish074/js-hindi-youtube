// objects
// singleton from constructors

//obeject.create

// object literals

const mysym = Symbol("key1")

const JsUser ={
    name : "Ashish",
    age : 21,
    mysym : "mykey1",
    "full name" : "Ashish Kumar Mishra",
    location : "Himachal",
    email : "amishrahsm@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser["email"])
// console.log(JsUser.email)
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mysym])
// console.log(JsUser[mysym])


JsUser.email = "ashish@ulilily.com"

// Object.freeze(JsUser)

JsUser.email ="ashish@ishu.com"
console.log(JsUser)



JsUser.greetings = function(){
    console.log("Hello js user")
}
JsUser.greetings2 = function(){
    console.log(`Hello js User, ${this.name}`)
}


console.log(JsUser.greetings())
console.log(JsUser.greetings2())