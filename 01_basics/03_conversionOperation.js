let score = "33"

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);
/*
Conversion:
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/
  
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
1 => true; 0=> false
"" => false
"Vipul" => true
*/

let x = 33

let stringNumber = String(x)
//console.log(stringNumber);

//******************* Operations ******************** //

let value = 3
let negValue = -value
//console.log(negValue);


let str1 = "Hello"
let str2 = " Bhopat"

let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2); => 12
// console.log(1 + "2"); => 12
// console.log("1" + 2 + 2); => 122
// console.log(1 + 2 + "2"); => 32

// console.log(true);
// console.log(+true); 

let gameCounter = 100
gameCounter++ // postfix
console.log(gameCounter);
++gameCounter //prefix
console.log(gameCounter)
