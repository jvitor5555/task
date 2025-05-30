const express = require('express'); //requerer o express em uma váriavel
const app = express(); //instância do express

const rotaTeste = require('./routes/rota-teste'); // chama a rota de teste

app.use('/', rotaTeste);

module.exports = app