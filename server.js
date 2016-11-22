var http = require('http');
var app = require('./config/express');
<<<<<<< HEAD
require('./config/database')('192.168.0.3/alurapic');
=======
>>>>>>> b2c5be896fa0a33daedd83b1ad69f9870b74d617

http.createServer(app).listen(3000, function() {
	console.log('Servidor rodando');
});