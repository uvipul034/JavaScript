// if statement  node 04_control_flow/one.js

const tempreature = 41

if (tempreature < 40){
    //console.log("Tempreature is lesser than 40")
} else {
//console.log("Tempreature is greater than 40")
}

//comparisons 
// <, >, <=, >=, ==, !=, ===


// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

 // short hand notation 

 const balance = 1000

//if(balance > 500) console.log("test");


// nesting (Checking multiple conditions)
// if(balance < 500){
//     console.log("Less than 500");
// } else if(balance< 750){
//     console.log("Less than 750");
// } else if ( balance < 900){
//     console.log("Less than 900");
// } else {
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard ){
    console.log("Allow to the hall");
}
 if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to the web"); 
 }
