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


app.get('/api/ift/:telefono', (req, res) => {

    var telefono = req.params.telefono;
    var web = "http://office.ekiwi.net:8081/MonteDePiedadAPI/runSnsIft?apiKey=UhTtDEtCgAwTQ2y6htVKV9BL&host=localhost&port=8799&phone=" + telefono;

    var promise = new Promise(function(resolve, reject) {
        request({
            method: "GET",
            url: web,
            headers: {
                "Content-Type": "application/json"
            }
        }, function(error, res, body) {
            console.log(body);
            if (error) reject(error);
            else resolve(body);
        });
    });

    promise.then(function(response) {
        var resp = JSON.parse(response);
        console.log(resp);
    }).then(function(respuesta) {
        res.send(respuesta);
    });

});