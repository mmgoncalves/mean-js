module.exports = function(uri) {

	var mongoose = require('mongoose');

	// database
	mongoose.connect('mongodb://'+uri);

	mongoose.connection.on('connected', function() {
		console.log('Conectado ao mangoDb');
	});


	mongoose.connection.on('error', function(e){
	    console.log(e);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Desconectado do mongoDB.');
	});

	process.on('SIGINT', function() {
		mongoose.connection.close(function() {
			console.log('Connexão fechado pelo termino da aplicaao.');
			process.exit(0);
		});
	});
};