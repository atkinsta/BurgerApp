// Dependancies
let express = require("express");
let bodyParser = require("body-parser");
let exphbs = require("express-handlebars");

// Server setup
let app = express();
const PORT = process.env.PORT || 4570;

// Importing models
var db = require("./models");

// Setting up Body Parser
app.use(bodyParser.urlencoded({ entended: true }));
app.use(bodyParser.json());

//Static server for public folder
app.use(express.static("public"));

//setting up view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routing
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

//Start server after sync-ing SQL db. 
db.sequelize.sync().then(function () {
    app.listen(PORT, function() {
        console.log("Listening on PORT: " + PORT);
    });
});
