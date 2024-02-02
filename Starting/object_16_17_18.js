// singleton
// Object.create

// object literals

const mySym = Symbol("key1")//interesting  thora sa alag way


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    //symbol ko key tarah express kr re hai [] 
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//purana tarika
// console.log(JsUser.email)  
 //node Starting/object_16_17.js
 
 //new way to access object
//  console.log(JsUser["email"])
// console.log(JsUser["full name"])

//acesss bhhi symbol ko aise hi kiya jata hai [] symbol ki baat hori hai
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"

//object ko lock krne ke liye hum :freeze() use krte hai
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }

//string manipulation using ``
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());




//lecture -17


// const tinderUser = new Object()   singleton object
// const tinderUser = {}   non singlton object rest ,internal are same

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {  //object
//         userfullname: {   //object
//             firstname: "hitesh",  //key:value
//             lastname: "choudhary"
//         }
//     }
// }


//nesting object
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
// here:{} is optional bec values will be combine 
// and and we get exact same option

//another way of combij eusing spread operTIOR
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);



//ARRAYOBJECTS
// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor


//object destructure

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price":"free"
}

[
    {},
    {},
    {}
]
