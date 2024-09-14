// Dates


let myDate = new Date()
// console.log(myDate.toString()) //Sat Sep 14 2024 16:20:56 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Sat Sep 14 2024
// console.log(myDate.toISOString()) // 2024-09-14T16:20:56.460Z
// console.log(myDate.toJSON()) // 2024-09-14T16:20:56.460Z
// console.log(myDate.toLocaleDateString()) // 9/14/2024
// console.log(myDate.toLocaleString()); // 9/14/2024
// console.log(myDate.toUTCString()); //9/14/2024, 4:23:48 PM
// console.log(myDate.toTimeString());// Sat, 14 Sep 2024 16:23:48 GMT
// console.log(myDate.getTimezoneOffset()); // 16:23:48 GMT+0000 (Coordinated Universal Time)


// console.log(typeof mydate)


// let myCreatedDate = new Date(2023,0,23,5,3)

// let myCreatedDate = new Date("2023-01-14")

let myCreatedDate = new Date("01-14-2023")



// console.log(myCreatedDate.toDateString());

// console.log(myCreatedDate.toLocaleString());


let MyTimeStamp=Date.now()

// console.log(MyTimeStamp)
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000))



let newDate = new Date()

// console.log(newDate.getDate())
// console.log(newDate.getMonth())


newDate.toLocaleDateString('default',{
    weekday:"long",
})




