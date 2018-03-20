

module.exports = function(){
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });
    
    app.post("/api/friends", function(req, res) {
        var newfriend = req.body;
        // newfriend.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
      
        console.log(newfriend);
      
        friends.push(newfriend);
      
        res.json(newfriend);
      });
}