// const name = "Bhupesh";
// const repoCount = 50;


// console.log(`Hello ${name} repocount: ${repoCount}`);

// const game = new String('bhupeshChoudhary');
// console.log(game[0]);
// console.log(game.__proto__);
// console.log(game.length);

// console.log(game.charAt(2));
// console.log(game.indexOf("b"))

// const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)


// let myNewDate = new Date(2023, 0, 20);
// console.log(myNewDate);
// console.log(myNewDate.toLocaleString());


// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// const date = new Date() 
// console.log(date.getMonth()+1)
// console.log(date.getDay()+1);





// const myArr = [0, 1, 3, 4, 5];
// console.log(myArr[2]);


// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length);


// fruits[5] = "mango";
// console.log(fruits[5]);
// console.log(Object.keys(fruits));


// console.log(fruits.length);

// fruits.length = 10;
// console.log(fruits);

// console.log(Object.keys(fruits));

// console.log(fruits.length);
// console.log(fruits[8]);


// fruits.length = 2;
// console.log(Object.keys(fruits));
// console.log(fruits);



// // const colors = ["red", "yellow", "blue"];
// // colors[5] = "purple";
// // console.log(colors);

// //  colors.forEach((item, index)=>{
// // console.log(`${index}: ${item}`)
// // });

// // console.log(colors.reverse());


// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";
// const iterator = colors.keys();
// for(const key of iterator){
//     console.log(`${key}: ${colors[key]}`)
// }

// const newColors = colors.reverse();
//  console.log(newColors);


//  const myArrs = ["bhupesh", "anurag", "rajat", "lucky", "mayank"]
//  console.log(myArrs);

//  myArrs.push("Aman");
//  console.log(myArrs);
//  myArrs.pop();
//  console.log(myArrs);


const myArr = [1, 2, 3, 4,5,7];
console.log(myArr)

let a = myArr.slice(1,3);
console.log(a);

let b = myArr.splice(1 , 3);
console.log(b);

const marvel = ['a', 'b', 'c'];




let myDataOfObject = {};

myDataOfObject.name = "bhupesh";
myDataOfObject.class = "bhu";

console.log(myDataOfObject);


let myData2 = {
    name: "anurag",
    class: "st",
    std: [
        {name: "dk",
    bro: "kkl"},
    {dsjlsda: "kdkj"}, 
    ]
}
console.log(myData2.std);