// Dates        node 01_basics/07_dates.js

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2026, 8, 7)   // months starts from 0 to 11
//console.log(myCreatedDate.toDateString());

//let myRecreatedDate = new Date(2026, 8, 7, 8, 39)
let myRecreatedDate = new Date("07-09-2026")
//console.log(myRecreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); // Conversion of milliseconds into seconds


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // bcz months stars from 0 to 11
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
     weekday: "long"
})