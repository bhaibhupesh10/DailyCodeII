const express = require("express")
const app = express();

app.get("/", (req, res)=>{
    res.return("its working");
})

app.listen(8080, () => {
    console.log("Server is litening on port 8080");
});