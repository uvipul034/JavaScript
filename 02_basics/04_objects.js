// const tinderUser = new Object()      node 02_basics/04_objects.js
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sangam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "baru@langda.com",
    fullname: {
        userfullname: {
            firstname: "Baru Barota",
            lastname: "Bhopat Wala"
        }
    }
      
}
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

//object of an Array
const users = [
    {
        id: 1,
        email: "j@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    }
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//Destructuring in Objects
const course = {
    coursename: "NMMS",
    price: "200",
    courseMentor: "Anshuman"
}

//course.courseMentor

const{courseMentor: mentor} = course
//console.log(courseMentor);
console.log(mentor);

//json APIs

{
    "name": "sangam",
    "age": 23,
    "sport": "tennis"
}