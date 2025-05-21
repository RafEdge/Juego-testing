var express = require('express');
var createError = require('http-errors');
var path = require('path');

var app = express();

// Servir archivos estáticos desde la carpeta donde se encuentra el script
app.use(express.static(__dirname));

// Ruta para renderizar el archivo `index.html`
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware para manejar errores 404
app.use(function (req, res, next) {
    next(createError(404));
});

// Manejador de errores


module.exports = app;