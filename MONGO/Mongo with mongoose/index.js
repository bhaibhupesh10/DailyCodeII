const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection successful")
})
.catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test")
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User", userSchema);
//const Employee = mongoose.model("Employee", userSchema);
// const user2 = new User({
// name:"Eve",
// email:"eve@gmail.com",
// age:26,
// })
User.insertMany([
    {name:"Tony", email:"tony@gmail.com", age:99},
    {name:"Peter", email:"peter@gmail.com", age:27},
    {name:"Marq", email:"marq@gmail.com", age:33},
])
.then((res)=>{
    console.log(res);
}).catch((err)=>console.log(err))

