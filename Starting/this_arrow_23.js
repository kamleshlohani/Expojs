//node Starting/this_arrow_23.js

//current context ko refer krne ke liye :this operator use krte hai
//current context bole to value ya jiske baare me baat ho rahi hai ya jo jo variable hai or kya hold kr  re hai

const user = {
    username: "hitesh",
    price: 999,
    
    welcomeMessage: function() {
        username:"Ravi",
        console.log(`${this.username} , welcome to website`);
        //ye krne ke baaad output hitesh aaya to conclusion:this keval object ke sath work krta hai function ke sath nahi
         console.log(this);

         //see this example clear ho jaayga this
// hitesh , welcome to website
// {
//   username: 'hitesh',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
// sam , welcome to website
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }
    }

}

// user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

console.log(this);

//output {}

//Mote :browser ke anderr jo global object hai usko :window object bolte hai

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

//Arrow func
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit func-only remove curly braces
// const addTwo = (num1, num2) =>  num1 + num2


// const addTwo = (num1, num2) => ( num1 + num2 )
//also a implicit function but it dont requires return type

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()