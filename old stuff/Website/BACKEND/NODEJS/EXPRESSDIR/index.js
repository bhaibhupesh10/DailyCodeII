const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;;
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

// app.use((req, res)=>{ 
//     console.log("request received");
//    res.send("this is the response");
//    let data = "<h1>Bhupesh</h1><li><ul>abc</ul><ul>hsdflj</ul></li>";
//    res.send(data)
//     res.send({
//         name: "apple",
//         color: "red"
//     })
// });
// app.get("/apple", (req, res)=>{
//     res.send("You send a get request for apple");
// }); 
// app.get("/banana", (req, res)=>{
//     res.send("you requested for banana path");  
// });
//     app.get("/checkk", (req, res)=> {
//         res.send("let me check the nodemon is working or not");
  
// });
// app.get("/*", (req, res)=>{
//     res.send("this path doesn't exist");
// });
// app.post("/", (req, res)=>{
//     res.send("you request for the path of post resquest");
// });

// app.get("/:username/:id", (req, res)=>{
//    let {username, id} = req.params;
// // console.log(req.params);
//     res.send(`welcome to the page of @${username}.`);
//     // res.send("hello i'm root");
// });

// app.get("/search", (req, res)=>{
//     console.log(req.query);
//     res.send("no result");
// }); 


app.get("/search", (req, res)=>{
    let {q} = req.query;

    res.send(`Search result for query : ${q}`);
}); 