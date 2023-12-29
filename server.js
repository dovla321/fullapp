const express = require("express");
const app = express();
const routes = require('./routes');


app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(express.static(__dirname + "/public"))
app.set("view engine","ejs");

app.use('/',routes);

app.listen(3000,()=>{
    console.log('Listening to port 3000');
})