var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var html = require("./routing/htmlRoutes.js")
var api = require("./routing/apiRoutes.js")

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());