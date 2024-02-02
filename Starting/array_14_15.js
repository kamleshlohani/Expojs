// node Starting/array_14.js
// const ar=[0,1,2,3,4]
// const ar2=["a","b","c"]
// const ar3=new Array(1,2,3,4)

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
// console.log("A ", ar3);

//  const myn1 = ar3.slice(1, 3)

//  console.log(myn1);
// console.log("B ", ar3);

//splice():It is used to remove elements from an array or replace them.
//  const myn2 = ar3.splice(1, 3)
//  console.log("C ", ar3);
//  console.log(myn2);

//lecture 15

//  const marvel_heros = ["thor", "Ironman", "spiderman"]
//  const dc_heros = ["superman", "flash", "batman"]

//  marvel_heros.push(dc_heros)
//  console.log(marvel_heros);
  //  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// marvel_heros.concat(dc_heros) agar ye run krenge to keval marvel print hoga
// console.log(allHeros);
//spread operator:(...)work same as concat.
//spread operator (...) allows us to quickly copy all or part 
//of an existing array or object into another array or object.

// const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat():method concatenates sub-array elements.
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
//string ko array me convert krne ke liye :From ()use krte hai
 console.log(Array.from("Hitesh"))
 //[ 'H', 'i', 't', 'e', 's', 'h' ]
 console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300
// console.log(Array.of(score1, score2, score3));