const score = 400                       //node 01_basics/06_nums_and_math.js
//console.log(score);

const balance = new Number(100)
//console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));  // Output will be 100.00

const otherNumber = 123.4545
//console.log(otherNumber.toPrecision(3)); //Output will be 123


const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN')); // Output will be 10,00,000



//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,5,8));
// console.log(Math.max(4,5,7,9));

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log((Math.floor(Math.random()*10) + 1));


const min = 10
const max = 28


console.log(Math.floor(Math.random() * (max-min +1)) + min);