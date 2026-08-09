// Primitive 

// These are of 7 categories
//7 types : String, Number, Boolean, Null, undefined, Symbol(uniqueness), BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // output will be false bcz Symbols datatype creates uniqueness in variables

const bigNumber = 3254582845554154n // n is used as prefix to make it a bigInt 



// Reference Type / Non-Primitive

// Array, Objects, Functions

const biscuits = ["Unibic", "Britania", "Happy-Happy"]; // Array

let myObj = {               // Object
    name: "Vipul",
    age: 22,
}

const myFunction = function(){
    console.log("Hello Country");
}
