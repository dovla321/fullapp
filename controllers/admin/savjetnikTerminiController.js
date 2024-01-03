const mongojs = require("mongojs");
const db = mongojs("fullapp",["termini"]);

const savjetnikTerminiController = (req,res) =>{
   
    let name = req.params.name;
    let user = req.session.user;

    db.termini.find({savjetnik : name},(err,termini)=>{
        console.log(termini);
        res.render("admin/savjetnikTermin", {name:name, termini: termini });
    })

    

}

module.exports = savjetnikTerminiController;