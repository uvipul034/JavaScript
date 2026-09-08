// Singleton      node 02_basics/03_objects.js
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sangam",
    "full name": "Vipul Upadhyay",
    [mySym]: "mykey1",
    age: 23,
    city: "Meerut",
    email: "vipul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);  // This is used for taking output from input enclosed inside ""
// console.log(JsUser[mySym]);


JsUser.email = "tamtam@google.com"
//Object.freeze(JsUser)         // freeze is used so that the the object can't be changed further 
JsUser.email ="bachu@google.com"
 //console.log(JsUser);


 JsUser.greeting = function(){
    console.log("Hello JS user");
 }
 JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
 }

 console.log(JsUser.greeting());
 console.log(JsUser.greetingTwo());