// const tinderUser = new Object()

const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name = "Ashish"
 tinderUser.isLoggedIn = false



// console.log(tinderUser)

const regularUser = {
    email : "ashish@ulilily.com",
    fullname : {
        userfullname : {
            firstname : "Ashish Kumar",
            lastname : "Mishra"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}

// const obj3 = {obj1 , obj2 }
// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3)


const users = [
    {
    id : 1,
    email : "h@email.com"
},
{
    id : 2,
    email : "h@email.com"
},
{
    id : 3,
    email : "h@email.com"
},
{
    id : 4,
    email : "h@email.com"
},
{
    id : 5,
    email : "h@email.com"
},

]

users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))


// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



const course = {
    courname : "js in hindi",
    price : "999",
    courseInstructor : "hitesh"
}

// console.log(course.courseInstructor)

// course.courseInstructor

const { courseInstructor : instructor} = course
console.log(instructor)


// const navbar = ({company}) => {


// }


// ++++++++++++++++++ API ++++++++++++

// {
//    "name" : "ashish",
//   "courname":  "js in hindi",
//    "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]