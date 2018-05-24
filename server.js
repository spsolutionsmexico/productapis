var express = require("express");
var app = express();
var cfenv = require("cfenv");
var request = require('request');

var appEnv = cfenv.getAppEnv();

app.get('/api/v1/welcome', function(req, res) {
    res.send("Hello User");
});

app.get('/api/ift/:telefono', function(req, res) {
    var telefono = req.params.telefono;
    res.send("Telefono = " + telefono);
});

var port = process.env.PORT || 9080;
app.listen(port, function() {
    console.log('App started on port:' + port);
});