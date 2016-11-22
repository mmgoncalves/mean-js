module.exports = function(app) {
	var mongoose = require('mongoose');
	var jwt = require('jsonwebtoken');


	var api = {};
	var model = mongoose.model('Usuario');

	api.autentica = function(req, res) {
		model
			.findOne({login: req.body.login, senha: req.body.senha})
			.then(function(usuario) {
				if(!usuario) {
					console.log('Login e senha invalidos');
					res.sendStatus(401);
				}

				var token = jwt.sign(usuario.login, app.get(secret), {
					expiresIn: 84600+
				});

			}, function(error) {
				console.log('Login e senha invalidos');
				res.sendStatus(401);
			});
	};

	api.verificaToken = function(req, res) {

	};
};
