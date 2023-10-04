// function personMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hi my name is ${this.name}`);
//         }
//     }
//     return person;
// }
// let p1 = personMaker("bhupesh", 23);
// let p2 = personMaker("eve", 35);


// New operator 
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     // console.log(this);
// }
// Person.prototype.talk = function(){
//     console.log(`Hi, my name is ${this.name}`);

// };
// let p1 = new Person("adam", 23);
// let p2 = new Person("adam", 35);


// #classes
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     talk(){
//         console.log(`Hi my name is ${this.name}`);

//     }
// }

// let p1 = new Person("adam", 35);
// let p2 = new Person("eve", 54);

// console.log("bhupesh choudhary ka pc hai ye ");


// INHERITENCE 
// class Person{
//     constructor(name, age){
//         console.log("person class construcotr: ");
//         this.name = name;
//         this.age = age; 
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
//     }
//     class student extends Person{
//         constructor(name, age, marks){
//             console.log("student class constructor");
//             super(name, age);//parent class constructor is being called
//         this.marks;
//         }
//     }
//     class teacher extends Person{
//         constructor(name, age, subjects){
//             console.log("teacher class constructor");
//             super(name, age); 
//             this.subjects;
//         }
//     }


// class Mammal{ //base class /parent class
//     constructor(name){
//         this.name = name;
//         this.type = "warm-blooded";
//     }
//     eat(){
//         console.log("I'm eating");
//     }
// }


// let arr=[7, 9, 0,-2];
// let n=3;
// let ans=arr.slice(0,n);
// console.log(ans);

// class Dog extends Mammal{ // child class 
//     constructor(name){
//         super(name);
//     }
//     bark(){
//         console.log("woff...");
//     }
// }

// class cat extends Mammal{// child class 
//     constructor(name){
//         super(name);
//     }
//     bark(){
//         console.log("meow..");
//     }
// }

// let str=prompt("please enter a string");
//  if (str.length==0){
//     console.log("string is empty");
// } else {
//     console.log("string is not empty"); 
// }

// let str="apnacollege";
// let idx=3; 
// if(str[idx]==str[idx].toLowerCase())
// { 
//     console.log("character is lowercase");
// } else { 
//     console.log("character is not lower case"); 
//     }

// let str=prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

//   let arr = [ "hello",'a',23,64,99,-6];
//   let item = 'a';
//   if(arr.indexOf(item)!=-1) {
//     console.log("element exists in array");
//     } else {
//     console.log("element doesn't exist in array")
//     };

let marks = 34;
if((marks>33 && marks<=80)||true){
    console.log("pass");
}