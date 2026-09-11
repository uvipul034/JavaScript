// node 05_iterations/08_eight.js

 const myNume = [1, 2, 3]
// const myTotal = myNume.reduce(function (accumulator, currentValue){
//     console.log(`acc is ${accumulator} and curval is ${currentValue}`);
    
//     return accumulator + currentValue
// }, 3)

const myTotal = myNume.reduce((acc, curr) => acc + curr, 0)
//console.log(myTotal);


const shoppingCart = [
    {
       courseName: "java",
       coursePrice: 5000
},
    {
       courseName: "javascript",
       coursePrice: 3000
},
    {
       courseName: "python",
       coursePrice: 500
},
    {
       courseName: "data science",
       coursePrice: 15000
}
]

const priceToPay = shoppingCart.reduce((acc, element) => acc + element.coursePrice, 0)
console.log(priceToPay);
