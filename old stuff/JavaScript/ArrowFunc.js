// Arrow function: another way to write a function. It is introduced in the ES6 version of JS. It's syntax is shorter than regular function 

// example let add = function(a, b){
    // return a+b}

//     let add = (a, b)=> {return a+b};
// console.log(add(3, 5));

// function with single parameter.
// (p1) => {statements} // syntax1
// p1 => {statements} // syntax2 

// function with no parameter 
// let a = (aa) => {
//     // syntax 
//     return aa;
// }

// console.log(a(43));

// Hoisting: it is a behaviour in which a function or a variable can be used before CSSStyleDeclaration. 
// variable hoisting:-
// console.log(name); // undefined
// var name = "xyz";
// // In case of let keyword:
// console.log(name);
// let name = "xyz";
// in case of const keyword
// console.log(name);
// const name= "xyz";

// conclusion: let and cosnt variable are hoisted but they cannot be acccessd befor etheir declaration 

// function hoisting:- funcation can be called before declaring it.
// name(); -> function called;
// declaration //
// function name(){
//     console.log('Bhupesh');
// };
// name();

// Function expression: typeError occurs in case of function expression.
// name();
// var name = function(){
//     console.log("Bhupesh");
// }
// name();
// // conclusion: javascript does not hoist the function expression and arrow function 

// LEXICAL SCOPE
//Lexical scope:- it means that a variable defined outside a function can be accessible inside another function defined after the variable declaration But the opposite is not tru;

// function add(){
//     var x = 4; // y is not accessible
//     function mult(){
//         // x is accessible here, y is not
//         return x+3;
//         function minus(x){
//             var y = 6; // x is accessible
//             return x+y;
//         }
//         // add();
//     }
//     // mult();
// }
// minus();

// #Default parameters#
// Default parameters: it allows us to give default values to the function parameters if no values is given.
// function add(x=1, y=2){
//     return x+y;
// }
// console.log(add());
// console.log(add(2, 3));
// console.log(add(6))

// #Rest parameters
// Rest parameterss: It is used to gather parameters and put them all in an array.
// lets understand with an example
// function test(a, b){
//     console.log(a);// output 8
//     console.log(b);// output 9
//     console.log(a, b)// 8, 9 
// }
// test(8, 9);
// test(8, 9);

// function test1(a, ...b){
// console.log(a);
// console.log(b);
// }
// test1(1,2,3,4,5);

// parseInt(a) + parseInt(b); // to covert string into integer
// Math.sqrt() // to get the square root value

// let a = "1234";
// let b = parseInt(a);
// console.log(b);

// let aa = prompt("enter the value: ");
// // let bb = Math.sqrt(aa);
// console.log(aa);



// javascript program to print area of triangle 
// general formula  => areaOfTriangle = (base*height)/2;
// taking the value of base and height from user 

// console.log(area);
// console.log("my name is bhupesh");

function areaFunc(){
    let base = prompt("enter base");
let height = prompt("enter height: ");
var area = (base*height)/2;
document.getElementById("AreaOf").innerHTML = "Area of triangle= " + area;

  
}