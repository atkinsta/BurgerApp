let db = require("../models");
let Burger = db.Burger;

module.exports = app => {
    app.get("/api/burgers", (req, res) => {
        Burger.findAll({}).then(data => {
            res.json(data);
        });
    });
}

