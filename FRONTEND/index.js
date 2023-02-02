// alert("this is javascript program you know na")
// document.write("java script program will be written here with if else statements bole to conditional statement: \n ")

// console.log("javascript programming such statements that we can consider: like if, if else, if else if, \n");

// a= 20;

// if(a>=18 && a<=21) {
//     document.write("a can do anything: " );
// }
// else{
//     document.write("a can't do anything: ");
// }
// var arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// for(var i=0;i<arr.length;i++)
// {
//     console.log( arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 5;
// const ac = 0;
// ac++;
// alert("this is java script program you know better write.....");
// console.log("this is javascript");
// document.write("ye webpage me print karne ke liye use hota hai []");
// let age = 12;
// if(age>32)
// {
//     document.write("you are not a kid");
// }
// else if(age>26){
//     console.log("bachhe nahi rhe ");
// }
// else if(age>22)
// {
//     console.log("Yes Bacche nahi rahe");
//   }
//     else if(age>18)
// {
//     console.log("18 Bacche nahi rahe");
//     }
//     else{
//         document.write("bacche rahe")
//     }
// console.log("end of ladder");

// var day = 2;

// switch (day) {
//     case 0:
//         document.write("Today is Monday");
//         break;

//     case 1:
//         document.write("Today is Tuesday");
//          break;
//     case 2:
//         document.write("Today is Wednesday");
//         break;

//     case 3:
//         document.write("Today is Thursday");
//         break;

//     case 4:
//         document.write("Today is Friday");
//         break;

//     case 5:
//         document.write("Today is Saturday");
//         break;

//     case 6:
//         document.write("Today is Sunday");
//         break;
        
//         default:
//             document.write("Enter the valid Week day");         
// }

const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  toggle.onlick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
  }

