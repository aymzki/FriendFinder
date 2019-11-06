//dependencies
var express = require("express");
var path = require("path");

//set up express app
var app = express();
var PORT = 3000;

//allows for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes-- points server to a series of route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  