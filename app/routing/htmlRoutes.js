

module.exports = function(){
    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/home.html");
    });
    
    app.get("/survey", function(req, res) {
        res.sendFile(__dirname + "/survey.html");
    });
}

