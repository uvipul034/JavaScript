//Functions         node 03_basics/01_functions.js

function sayMyName(){
    console.log("V")
    console.log("I")
    console.log("P")
    console.log("U")
    console.log("L")
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
//addTwoNumbers(17,43)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(17,43)
//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined ) {
        console.log("Please enter a username");
        return
    }
       return `${username} just logged in`
}

//console.log(loginUserMessage("Sangam"));

function calculateCartPrice(...num1){          // ... is rest operator
    return num1
}
//console.log(calculateCartPrice(200,500,1400));

const user ={
    username: "Vipul",
    gender: "Male"
}

// function handleObject(anyObject){
//     console.log(`Username is ${anyObject.username} and gender is ${anyObject.gender}`);
// }

//handleObject(user)

// handleObject({
//     udername: "Vipul",
//     gender: "Male"
// })

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));