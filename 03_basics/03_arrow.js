// Arrow functions     node 03_basics/03_arrow.js

const user = {
    username: "Vipul",
    application: "Ideological Arena",

    welcomeMessage: function(){
        //console.log(`${this.username}, Welcome to niche community`);
    }
}
//user.welcomeMessage()
 //user.username = "Tamtam"
 //user.welcomeMessage()


 // this keyword points out the current context inside the function

//  function tea(){
//     let username = "kanan"
//     console.log(this);
//  }
//  tea()


// Syntax of Arrow function
// () => {}

    // const addTwo = (num1, num2) => {
    //     return num1 + num2

    // }
    // console.log(addTwo(17,43));

    //Implicit Return

    const addTwo = (num1, num2) => (num1 + num2)
    console.log(addTwo(17, 43));
    