//load data
//var friendData = require ("../data/friends");

//routing
module.exports = function(app) {
    // API GET Request
    //a GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
// API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  //a POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
   app.post("/api/tables", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (friend.length < 5) {
      friend.push(req.body);
      res.json(true);
    }
    else {
      friend.push(req.body);
      res.json(false);
    }
  });
};