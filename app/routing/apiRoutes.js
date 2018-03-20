

var friendsList = require("../data/friends.js")


function apiRoutes(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.get("/api", function(req, res){
        return res.json(friendsList)
    });
    
    app.post("/api/friends", function(req, res) {
        console.log("this is the req.body: " + req.body)
        // var newfriend = {
        //    name: req.body.name,
        //    photo: req.body.photo,
        //    scores: req.body.scores
        // }
        var newFriend = req.body;
        // newfriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log("this is the new friend object: " + newFriend);
        friendsList.push(newFriend);
        res.json(newFriend);
      });
}

module.exports = apiRoutes;