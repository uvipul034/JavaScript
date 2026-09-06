const name = "Vipul"
const absRepCount = 50

// console.log(name + absRepCount); // output will be Vipul50 bcz + operator is used for concatenation of string and number
// console.log(typeof(name + absRepCount)); // output will be string bcz + operator is used for concatenation of string and number

// console.log(name - absRepCount); // output will be NaN bcz - operator is not used for concatenation of string and number
// console.log(typeof(name - absRepCount)); // output will be number bcz - operator is not used for concatenation of string and number

// console.log(name * absRepCount); // output will be NaN bcz * operator is not used for concatenation of string and number
// console.log(typeof(name * absRepCount)); // output will be number bcz * operator is not used for concatenation of string and number

// console.log(name / absRepCount); // output will be NaN bcz / operator is not used for concatenation of string and number
// console.log(typeof(name / absRepCount)); // output will be number bcz / operator is not used for concatenation of string and number

// console.log(name % absRepCount); // output will be NaN bcz % operator is not used for concatenation of string and number
// console.log(typeof(name % absRepCount)); // output will be number bcz % operator is not used for concatenation of string and number

// console.log(name ** absRepCount); // output will be NaN bcz ** operator is not used for concatenation of string and number
// console.log(typeof(name ** absRepCount)); // output will be number bcz ** operator is not used for concatenation of string and number

// these are way outdated methods to concetanate strings in javascript, we can use template literals to concatenate strings in javascript

console.log(`My name is ${name} and my abs count is ${absRepCount}`); // output will be My name is Vipul and my abs count is 50 bcz we are using template literals to concatenate strings in javascript

const gameName = new String('Cricket') // this is a way to create string using constructor function in javascript
console.log(gameName); // output will be [String: 'Cricket'] bcz we are using constructor function to create string in javascript
console.log(typeof gameName); // output will be object bcz we are using constructor function to create string in javascript

console.log(gameName[0]);
console.log(gameName.length);


console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase()); 
console.log(gameName.charAt(5));
console.log(gameName.indexOf('c'));


const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(0,5);
console.log(anotherString);

const newString2 = "     Bhopat   "
console.log(newString2);
console.log(newString2.trim()); // output will be Bhopat bcz trim() method is used to remove whitespace from both ends of a string in javascript

const url = "https://vipul.com/vipul%20upadhyay"

url.replace('%20', '-'); // output will be https://vipul.com/vipul-upadhyay bcz replace() method is used to replace a specified value with another value in a string in javascript
console.log(url.includes('vipul')); // output will be true bcz includes() method is used to check if a string contains a specified value in javascript

const givenSpace = "Baru Barota Bhopat Wala"
console.log(givenSpace.split(' ')); // output will be [ 'Baru', 'Barota', 'Bhopat', 'Wala' ] bcz split() method is used to split a string into an array of substrings in javascript