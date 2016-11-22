var http = require('http');
var app = require('./config/express');
require('./config/database')('192.168.0.3/alurapic');

http.createServer(app).listen(3000, function() {
	console.log('Servidor rodando');
});