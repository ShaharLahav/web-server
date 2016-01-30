var express = require('express');
var app = express();
var PORT = 3000;

var middlewware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log(new Date().toString() + 'Request: ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

 app.use(middlewware.logger);

app.get('/about' ,middlewware.requireAuthentication , function (req, res) {
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server Started on port: ' + PORT);
});