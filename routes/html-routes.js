let db = require("../models");
let Burger = db.Burger;

module.exports = app => {
    app.get("/", (req, res) => {
        Burger.findAll({}).then(burgers => {
            res.render("index", {burgers: burgers});
        })
    })
}