


function htmlRoutes(app, path, express){

   
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    app.get("/style", function(req, res) {
        res.sendFile(path.join(__dirname, "../../style.css"));
    });

    app.get("/style2", function(req, res) {
        res.sendFile(path.join(__dirname, "../../surveyStyle.css"));
    });

    app.use('/', express.static('images'));

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });


    
}

module.exports = htmlRoutes;

