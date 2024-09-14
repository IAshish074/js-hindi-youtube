const score = 400

const balance = new Number(100)

//console.log(balance);


//console.log(balance.toString().length);
//console.log(balance.toFixed(2)) // precision value of balance


const otherNumber = 123.67890

//console.log(otherNumber.toPrecision(3)) // priority is before decimal

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')) // without en-IN we get 1,000,000 and with en-IN we get indian standard 10,00,000



// +++++++++++++++++++ Maths ++++++++++++++++++++++++


// console.log(Math)
// console.log(Math.abs(-4)) // to get absolute value
// console.log(Math.round(4.6)) // 5
// console.log(Math.ceil(4.2)) // if number is even 1 greater in decimal than it will give to value to +1 to the precise number

// console.log(Math.floor(4.9)) // take lower value


// console.log(Math.min(2,3,6,8))
// console.log(Math.max(2,3,6,8))


console.log(Math.floor(Math.random()*10) + 1) // always value comes in range of 0 to 1


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))  + min )
