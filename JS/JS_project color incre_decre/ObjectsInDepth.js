//singleton 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"bhupesh",
    "full name": "Bhupesh choudhary",
    [mySym]:"mykey1",
    age: 18,
    location: "jaipur",
    email:"bhupesh7750@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "bhaibhupesh10@gmail.com"
Object.freeze(JsUser)
console.log(JsUser.email);