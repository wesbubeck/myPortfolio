// Dependencies
// =============================================================
var path = require("path");
var express = require("express");

// Routes
// =============================================================

//htmlRoutes.jss exports the following routes to servver
module.exports = function(app) {
    //if express can't find any static files, it will look for them in public
    app.use(express.static("public"));
    //the route for the home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};