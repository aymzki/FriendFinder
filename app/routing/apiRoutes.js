//load data, require friends.js
var friends = require('../data/friends.js');

//routing
module.exports = function (app) {
    // API GET Request
    //a GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    // API POST Requests
    //a POST route for /api/friends. This will be used to handle incoming survey results. 
    //This route also handles the compatibility logic.
    app.post("/api/friends", function (req, res) {
        //console.log(req.body);
        //loop through all options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        //parse results 
        var userData = req.body;
        var userScores = userData.scores;
        //take results of the user's name and photo, other than the survey questions, to post and parse it
        var userName = userData.name;
        var userPhoto = userData.photo;
        //var calculates the difference of a user's scores versus others'
        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i].name);
            totalDifference = 0;

            //loop through that friends score and the users score and calculate the absolute difference between the two and push that to the total difference variable set above
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {

                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
            console.log(totalDifference);
        }

        // push user's data to the database
        friends.push(userData);

        //The res.json method will return a JSON data with the user's match which was looped through frieds data array. 
        res.json(bestMatch);
    });
};