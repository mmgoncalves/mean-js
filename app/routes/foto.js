module.exports = function(app) {
	var api = app.api.foto;

	app.route('/v1/fotos')
		.get(api.lista)
		.post(api.adicionar);
	app.route('/v1/fotos/:id')
		.get(api.buscaPorId)
		.put(api.atualizar)
		.delete(api.removePorId);
};
