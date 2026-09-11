//  node 05_iterations/07_seven.js

const myNume = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// //const newNums = myNume.map( (num) => {
//     return num + 10
// })
//console.log(newNums);

const newNums = myNume
.map((num) => num * 10)
.map((num) => num + 1)
 
console.log(newNums);



