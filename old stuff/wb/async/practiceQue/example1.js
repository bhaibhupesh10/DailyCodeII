let str = "my name is bhupesh";
let reversed = '';
for(let i=str.length-1; i>=0; i--){
    reversed += str[i];
} 
console.log(reversed);

// using split revese and join method/function
let str2 = str.split('').reverse().join('');
console.log(str2);

//using for of loop
let reversed1='';
for(const charr of str){
    reversed1 = charr+reversed1;
}
console.log(reversed1);


let str3 = '';
let str4 = Array.from(str).reverse().join('');
console.log(str4);