// const user = {
//     username: "Bhupesh",
//     price:999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website`)
//     console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// // empty object
// console.log(this)

// function chai(){
//     let username = "bhupesh";
//     console.log(this.userame);
// }
// chai()


// const chai1 = () => {
//     let username = "bhupesh"
//     console.log(this.username);
// }
// chai1();








// // arrow function 
// explicitely return 
// let chai2 = () => {
//    let name = "Bhupesh";
//    console.log(this);  // we can use this keyword in arrow function 
// }
// chai2();

// this value arrow function ho gaya hai ab arrow function ke upar charcha karenge

// arrow function ka basic syntax

// const addTwo = (num1, num2) => { // curely braces me rap kara to return keyword likhna padega 
//     return num1 + num2;
// }

// console.log(addTwo(3, 5));


// implicit return
const addTwo1 = (num1, num2) => num1 + num2 // curley braces me rap nahi kiya to fir return keyword nahi likhna padega
// bracket me likh bhi sakte hai aur nahi bhi code will run properly 
const addTwo2 = (num1, num2) => (num1 + num2) // curley braces me rap nahi kiya to fir return keyword nahi likhna padega
console.log(addTwo1(2, 5));
console.log(addTwo2(3,6));


// to return object
const addTwo3=(num1, num2)=>({username:"bhupesh"})
console.log(addTwo3(3, 5));

const name = ()=>({username: "Bhupesh"});
console.log(name());

// arrow functions
// explict return
// implicit value

const myArray = [2, 3, 5, 6 ,3, 6];
// myArray.forEach();