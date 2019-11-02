//dependencies
var path = require("path");

//routing
module.exports = function(app) {
    // HTML GET Requests
    // first is GET Route to /survey which should display the survey page.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
      });
    // second is default, catch-all route that leads to home.html which displays the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};