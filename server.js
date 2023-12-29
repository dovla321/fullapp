const express = require("express");
const app = express();


app.set("view-engine","ejs");

app.get('/',(req,res) =>{
    res.send("Ok");
})

app.listen(3000,()=>{
    console.log('Listening to port 3000');
})