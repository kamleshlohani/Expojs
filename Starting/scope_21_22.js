//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
console.log("sam")
    function two(){
        const website = "youtube"
        console.log(username);
        console.log("Kamlesh")
    }
    // console.log(website);

     two()

}

one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
        // console.log(username + website);
    //}
    // console.log(website);
//}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5) will throw an eroor because we are trying to access addtwo before initialization
// const addTwo = function(num){
//     return num + 2
// }