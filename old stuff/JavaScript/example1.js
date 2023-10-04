// object delclaration
function objects(){
    let person = {
    name: "Bhupesh", 
    age: "22"
}
// to get the output 
console.log(person); //{name: 'Bhupesh', age:'22' }
 // to access seperate data from the object 
 // person.name or person.age---- object.key
 console.log(person.name);
 console.log(person.age);

 // we can add new data in the object or a key value 
person.id = 1234;
person.class = 34;

console.log(person) //{ name: 'Bhupesh', age: '22', id: 1234, class: 34 }
}
// Calling the function 
objects();

function bracketNotation(){
    const person = {
        name: 'coder', 
        "person age" :22
    };
    // key stored as a string by default 
    //lets access data by bracket notation 
    console.log(person["person age", "name"]);
    console.log(person)
    // console.log(person.person age) // error
    console.log(person["person age"]);
}
// calling the bracket function m
bracketNotation();

// braket notaiton vs dot notation
// in above example there is a  key named as "person age"  let's access it by dot notation


function iterateObject(){
    let person = {
        firstName: "Programmer", 
        lastName: "girl",
        age: 21
    };
    for(let key in person){
        // console.log(key); // firstName  lastname age
        
        // console.log(person[key]) //girl age 21     
    //  console.log(key, ":" , person[key]); // it access both key value 
        
     // Object keys()
     // this method was introduced in es6 . it takes an object and returns an array of the object properties(key)
    //  console.log(Object.keys(person));
     console.log(Object.values(person));
     // it takes an object and returns the key value pair
     console.log(Object.entries(person));
    }
}
iterateObject();

function objectDestructuring(){
    // it assigns properties of an object to individual variables
    let person = {
        name: 'coder',
        age: 'twenty'
    };
    // let name = person.name;
    // let age = person.age; 
    
    let {name, age} = person;
    console.log(name , age);

    // setting default values:-
    // let{name, age, class = ''} = person;
    // console.log(class);
}
objectDestructuring();


