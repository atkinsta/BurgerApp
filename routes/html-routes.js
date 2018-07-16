let db = require("../models");
let Burger = db.Burger;

module.exports = app => {
    app.get("/", (req, res) => {
        Burger.findAll({}).then(data => {
            res.render("index", { burgers: data })
        })
    })
}