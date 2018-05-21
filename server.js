var express = require("express");
var app = express();
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();
cloudantService = appEnv.getService("TestDB");


/******************************
 * APIs 
 *******************************/

var products = require("./products");
app.get('/api/v1/products', function(req, res) {
    products.list(req, res);
});
app.get('/api/v1/welcome', function(req, res) {
    res.send("Hello Sunil");
});
var port = process.env.PORT || 9080;
app.listen(port, function() {
    console.log('App started on port:' + port);
});