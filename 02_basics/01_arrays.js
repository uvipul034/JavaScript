// array    // arrays in javaScript are resizeable   // node 02_basics/01_arrays.js

const myArr = [1, 2, 3, 4, 5]
const myCookies = ["Unibic", "Britania", "Treat"]
const myArr2 = new Array(1, 2, 3, 4, 5)
//console.log(myArr[0]);

// Arrays methods

// myArr.push(6)  //Adds one or more elements in Array
// myArr.push(7)
// myArr.pop()     // Removes the last element from an array
// myArr.unshift(25)  //Adds one or more elements in beggining of an array
// myArr.shift(25)  // Removes the first element from an array
// console.log(myArr);

//console.log(myArr.includes(5));  // Tells whether the particular element is present in array or not
//console.log(myArr.indexOf(5));    // Tells the index of the particular element

// const newArr = myArr.join()  // Adds all the elements of a array into a string 
// console.log(typeof newArr); // String type


//+++++++++++++ slice and splice ++++++++++++++++
/* the difference between slice and splice is that the slice method 
doesn't maniplulate the original array but the splice method does manipulate the array */

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)        // Slice the array from 1 to 3 doesn't include the range  
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)      // Slice the array from 0 to 3 includes the range 
console.log("C", myArr);
console.log(myn2);

