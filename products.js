var cloudant = require('cloudant')(cloudantService.credentials.url);
exports.cloudant = cloudant;
var productDb = cloudant.use('products');
exports.productDb = productDb;

//list all the database contents.
exports.list = function(req, res) {
    productDb.list({include_docs: true}, function(err, body/*, headers*/) {
	    if (!err) {
	        res.send(body);
	        return;
	    }
	   	res.send({msg:'Error listing items: ' + err});
    });
};
