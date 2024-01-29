// ECMAScript: It is a standard that all implementations of JavaScript must follow.
// ECMAScript defines what a scripting language should look like, 
//     while JavaScript is an actual implementation of that specification.

// Scripting language: It is a programming language that employs a high-level construct to interpret and execute one command at a time

"use strict"  //treat all JS code to newer Version
alert(gf) //here it will throw an error because we are using node.js not the web browser where all the engine of JS is already present
let a=34
 const b=3
let  isValid=true
let d=null
let e
console.table([a,b,isValid]);

// number=2^53
// bigInt =store store number which is>2^53
// string=""
// boolean true/false
// null=standalone value/empty value
//     = undefined(kindda place holder for a value which is not defined yet (type = undefined))
//symbol=unique
//object
console.log(typeof null);  //type is object
console.log(typeof undefined); //type is undefined
console.log(typeof true); //type is boolean
console.log(typeof 64587);  //type is number
console.log(typeof "Kamlesh"); //type is string


//6 

let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

//7

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//there is confusion sometimes null is treated to be 0 and some time its value is miswerable by the compiler
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
//not only checks the vaalue but also checks the datatypes if any one of the value is different then it results to be false
console.log("2" === 2);

//8

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object


// JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly 
// declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

// For example, in JavaScript, you can do the following:

// let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean
// On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, 
 // before the code is executed.

// Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

// int x = 10; // x is a variable of type int
// String name = "John"; // name is a variable of type String
// JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. 
 tatic typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
