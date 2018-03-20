

var friendsList = require("../data/friends.js")
console.log(friendsList)



function apiRoutes(app){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/newfriends", function(req, res) {
        var newfriend = {
           name: req.body.name,
           photo: req.body.photo,
           scores: req.body.scores
        }
        req.body;
        // newfriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
        console.log(newfriend);
        friends.push(newfriend);
        res.json(newfriend);
      });
}

module.exports = apiRoutes;