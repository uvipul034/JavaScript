// node 05_iterations/06_six.js

const coding = ["js", "ruby", "python", "java", "cpp"]

// const values =coding.forEach((item) => {
//     console.log(item);
    
// })
// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = mynums.filter((num) => num > 4)
//console.log(newNums);

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Second method
// const newNums = mynums.filter((num) {
//     return num > 4}
// )
// //console.log(newNums);


const newNums = []

mynums.forEach((num) => {
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums);




