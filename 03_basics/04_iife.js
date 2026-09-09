// Immediately Invoked Function Expressions (IIFE)    node 03_basics/04_iife.js
//IIFE is used to save the function from global pollution to execute the function immediately

//Syntax of iife
// ()();

// (function(){
//     console.log(`Baru Barota`);
// })();

// From Arrow Function

// ( () => {
//     console.log(`Baru Barota Bhopat Wala`);
// })();

// With Arguments and Parameters
((name) => {
    console.log(`${name} Barota Bhopat Wala`)
})('Baru');