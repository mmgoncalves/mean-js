var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/v1/fotos', function(req, res ){

});

module.exports = app;