// global scope
var name = 'Bhupesh';
// console.log(name);
// console.log(name);
// document.write(name);
// window.alert("this is bhupesh");
// alert("bhupesh choudhary");
// name = "<br>tarun";
// document.write(name);
// let name2= "bhupesh";
// document.write("<br>"+ name2+"<br>");
// name2 = 'Bhupesh2';
// document.write(name2)
// const name3 = "bhupeshchoudhary";
// document.write("<br>"+ name3 +"<br>");
// name3 = "tarunchoudhary";
// document.write(name3);


// objects
// window object..

// var keyword 
// let keyword
// const keyword

// globale scope
// var marks = 10;
// function sayName(){
//     console.log(name);

// }
// sayName()
// sayName()
// console.log(marks);


// function marksOnly(){
//     console.log(marks);
// }
// marksOnly();



// global scope
function fist(){
    var x = 1;
    console.log(x);
    // local scope
    function childOfFirst(){
        var x = 2;
        console.log(x)
    }
    childOfFirst()
}
fist()