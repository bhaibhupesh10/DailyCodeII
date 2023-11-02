// immediately invoked function expressions (iife);

//IIFE => jaise hi functio likha turant hi execute karvana hai
//jaise hi file start ho vaise hi database ka connection start ho jaye
// global variable jo bhi ap function me declare kar rhe hai vo global scope se pollution nahi chahiye to alg se bana lete hai 
// jab aap function likhte hai function ke ander likhte hai console log

(function chai(){ // named iife
    console.log(`DB CONNECTED`);
})(); //  iife function invoke to ho gaya but isko patanahi hai ki rokna hai iske liye semi colon lagan jaruri hai 

// ()// first parenthesis is for function writting
// ()//for execution immediately 

// ()()// global scope ke pollution se problem hoti hai kai bar to us global scope ke jo variable hai ya pollution hai usko hatane ke liye iife ka use karte hai 

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('bhupesh'); 

// ye tha basic 

const a = function add(a, b){
    return a+b;
}
console.log(a(3, 5));
console.log(a(3,55));