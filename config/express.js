var express = require('express');
var app = express();

var consign = require('consign');
var bodyParser = require('body-parser');

app.set('secret', 'qualquersenha');

app.use(express.static('./public'));

app.use(bodyParser.json());

consign({ cwd: 'app' })
	.include('models')
	.then('api')
	.then('routes/auth.js')
	.then('routes')
	.into(app);

app.use(express.static('./public'));

module.exports = app;