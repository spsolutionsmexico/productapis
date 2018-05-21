var express = require("express");
var app = express();
var cfenv = require("cfenv");

var appEnv = cfenv.getAppEnv();

app.get('/api/v1/welcome', function(req, res) {
    res.send("Hello Sunil");
});
var port = process.env.PORT || 9080;
app.listen(port, function() {
    console.log('App started on port:' + port);
});