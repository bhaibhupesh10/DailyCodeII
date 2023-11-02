// Arrow function: another way to write a function. It is introduced in the ES6 version of JS. It's syntax is shorter than regular function 

// example let add = function(a, b){
    // return a+b}
    // normal function by passing values
let add2 = function(a, b){
    return a+b;
}
console.log(add2(33,5))

// arrow function by passing parameters
let add3 = (a,b)=>{
    return a+b;
}
console.log(add3(345,56))
//     let add = (a, b)=> {return a+b};
// console.log(add(3, 5));

// function with single parameter.
// (p1) => {statements} // syntax1
// p1 => {statements} // syntax2 
let a =10;
let b = 30;
const add4= (a, b)=>{
    return a+b;
}
console.log(add4())
// function with no parameter 
// let a = (aa) => {
//     // syntax 
//     return aa;
// }

let add5 = (aww) =>{
    return aww;
}
console.log(add5(90879))

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

function areaOfFunc(){
    let base = 10;
    let height = 20;
    return area = (base * height)/2;
    // console.log(area);
}

let add = function(a, b){
    return a+b;
};
console.log(add(34, 2032));

let add1 = (x, y) => {
    return x+y;
};
console.log(add1(20, 20));


// // function with single parameter
// const name = (p1)=>{
//     // let name =
//     console.log(p1);
// }

// name("bhupesh");

// console.log("bhupesh2"
// const myName = () =>[ {
//         Sname: "Bhupesh choudhary", 
//         class: "MCA", 
//         price: 200
//     },
//     {
//         Sname1:"Tarun Choudhary",
//         class:"MCA9",
//         price:299
//     }
// ]
// let obj = myName();
// console.log(obj);

// let firstName = "John";
// let lastName = "Doe";
// let age = 30;

// let person = {
//     firstName,
//     lastName,
//     age,
// };


const createMultipleObjects = () => [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const objectsArray = createMultipleObjects();
let obj=objectsArray[2];
console.log(obj)

// object destructuring: it assigns property of an object to individual variable

// let person = {
//     name:"coder",
//    age:23};
// };
// let name = person.name;
// let age = person.age;

// console.log(name);
// console.log(age);
// console.log(name, age)

// let {name, age}=person;
// console.log(age, name);

let person2 = {
    name:"jonh", 
    age:24
}
// object destructuring
let {name, age} = person2;
console.log(Object.keys(person2))
console.log(person2.name, person2.age);
let valuess = Object.values(person2);
console.log(valuess);




console.log()

let user = {
    username:"Bhupesh choudhary",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} welcome to the ...`)
    }

    }
user.welcomeMessage();
user.username = "Tarun choudahry";
user.welcomeMessage();
  
function chai(){
    let username="bhhu";
    
    
    console.log(this);
}
chai();

const addTwo= (a,b) => {
    return a+b;
}
console.log(addTwo(3,5));

const arr = (num1, num2) => num1 + num2;
console.log(arr(3, 6));

const arr1 = (num1, num2) => (
    num1 + num2 
    );
console.log(arr(54,654));


const arr2 = (num1, num2) => ({
    username:"bhupesh",
    password:1234
})
console.log(arr2().username);