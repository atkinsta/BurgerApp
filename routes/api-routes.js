let db = require("../models");
let Burger = db.Burger;

module.exports = app => {
    app.get("/api/burgers", (req, res) => {
        Burger.findAll({}).then(data => {
            res.json(data);
        });
    });

    app.post("/api/burgers", (req, res) => {
        Burger.create({
            burger_name: req.body.name,
            eaten: req.body.eaten
        }).then(data => {
            res.json(data);
        });
    });

    app.put("/api/burgers/:id", (req, res) => {
        Burger.update({
            burger_name: req.body.name,
            eaten: req.body.eaten
        }, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data);
        });
    });

    app.delete("/api/burgers/:id", (req, res) => {
        Burger.destroy({
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.end();
        });
    });
}

