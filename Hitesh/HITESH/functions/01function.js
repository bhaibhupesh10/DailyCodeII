function sayMyName(){ 
    console.log("B")
console.log("H")
console.log("U")
console.log("P")
console.log("E")
console.log("S")
console.log("H");
}

// sayMyName();


function addTwoNumbers(Num1, Num2){
 
   return Num1 + Num2;
}

addTwoNumbers(3, null);
 const result = addTwoNumbers(3, 5);
//  console.log("Result: ", result);


function loginUserMessage(username){
   if(!username){
    console.log("please enter a username");
    return
}   return `${username} just logged in`;
}

// console.log(loginUserMessage("Bhupesh"));
// console.log(loginUserMessage());
 


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 600, 700))



const user = {
    username: "Bhupesh", 
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// // handleObject(user);

// handleObject({
//     username: "sam", 
//     price:399
// })

const myNewArray = [200, 400, 100, 500];

function returnSecondValue(getArray){
    return getArray[1];
};

// console.log(returnSecondValue(myNewArray));

//// scope **************



{
    let a = 10; 
    const b = 20;
    var c = 30;
    }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Bhupesh";

    function two (){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);
    two();
}
one();

if(true){
    const username = "Bhupesh";
  if(username === "Bhupesh") {
     const website = "youtube";
    // console.log(username +  website);
}
// console.log(website);

}
// console.log(username);

// ++++++++++++interesting +++++++++++++++

// console.log(addOne(5))
function addOne(num){
    return num + 1;
}


// addTwo(5);
const addTwo = function (num){
    return num + 2;
}


