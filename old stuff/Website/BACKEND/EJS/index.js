const express = require("express");
const app = express();
const path = require("path")
const port = 8080;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/hello", (req, res)=>{
    res.send("Hello ");
});

app.get("/home", (req, res)=>{
    res.send("<h1>Home</h1>");
});

app.get("/rolldice", (req, res)=>{
    let diceValue = Math.floor(Math.random() * 6)+1;
    res.render("rolldice", {diceValue});
});

// app.get("/ig/:username",(req, res)=>{
//     const followers = ["Bhupesh", "Anurag", "Vikash", "Harsh"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username, followers });
//     console.log(username)
// });

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data)
    if(data){
        res.render("instagram.ejs", { data });
    } else{
        res.render("error.ejs");
    }

});

app.listen(port, () => {
console.log(`listening on port ${port}`)
});