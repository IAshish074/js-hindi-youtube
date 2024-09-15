// // var c = 300
// {
//     //scope

//     if(true){
//         let a = 10
//         const b = 20

//     }
// }

// // console.log(a);
// // console.log(b);

// console.log(c);

// child functions can access their parent functions

function one(){

    const userName = "Ashish"

    function two (){
        const website = "youtube"
        // console.log(userName)
    }
    // console.log(website)
    // two()
}
// one()


if(true){
    const username = "Ashish"
    if(username === "Ashish"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



// +++++++++++++ interesting +++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))
 // 


