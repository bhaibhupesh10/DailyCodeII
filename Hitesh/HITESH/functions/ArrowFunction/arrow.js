const users = {
    username: "Bhupesh" ,
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

// users.welcomeMessage();

// users.username = "sam";
// users.welcomeMessage();

console.log(this);