// node Starting/array_14.js
const ar=[0,1,2,3,4]
const ar2=["a","b","c"]
const ar3=new Array(1,2,3,4)

// console.log(ar[2])

//Array methods
// ar2.push("d")
// ar2.pop("d")

 
// ar2.unshift(1)
// console.log(ar2)

// ar2.shift()
// console.log(ar2)

// console.log(ar3.includes(3))
// console.log(ar3.indexOf(2))
// //join():it binds the array and converts it in the string
// const ab=ar3.join()
// console.log(ar2)
// console.log(typeof ab)


// slice, splice
//slice(): literally means to cut something into pieces. It is used to cut out elements from an array. It does not affect the original array.
console.log("A ", ar3);

 const myn1 = ar3.slice(1, 3)

 console.log(myn1);
console.log("B ", ar3);

//splice():It is used to remove elements from an array or replace them.
 const myn2 = ar3.splice(1, 3)
 console.log("C ", ar3);
 console.log(myn2);