//IIFE:Immediately Invoked Function Expressions (IIFE): the secret sauce for 
//      encapsulating code and maintaining a clean global scope.
//A function that is called immediately after it is defined.

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

//agar 2 iife likhne hai or ; nhi lgaya to error aana tay h
( (name) => {

    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
