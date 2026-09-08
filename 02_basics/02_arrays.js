//Arrays   node 02_basics/02_arrays.js

const homies = ["vasu", "yash"]
const neigh =  ["veer", "aavik", "power"]

// Concat opeartor is uded for merging elements from two arrays
const allChuba = homies.concat(neigh)
//console.log(allChuba);

//spread operator => used for merging elements from differemt arrays
const sab_chube = [...homies, ...neigh]
//console.log(sab_chube);

// flat method
 const nestedArray = [1, 2, 3,[4, 5, 6,], 7, [6, 7, [4, 5]]]
 const solvedArray = nestedArray.flat(Infinity)
// console.log(solvedArray);


//console.log(Array.isArray("Bhopat")); // Checking if the given input is Array or not in true or false
//console.log(Array.from("Bhopat"));  // Converting the input into an Array

let score1 = 1441
let score2 = 2442
let score3 = 3443

console.log(Array.of(score1, score2, score3));
