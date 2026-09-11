// for each loop   node 05_iterations/05_five.js

const coding = ["js", "ruby", "python", "java"]

// coding.forEach( function(val){
//     console.log(val)
// })

coding.forEach((element) => {
    //console.log(element);
    
});


function printMe(element){
 //   console.log(element);
    
}
//coding.forEach(printMe)

//objects insdide array
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {

    console.log(item.languageName);
    
})