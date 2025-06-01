const express = require('express'); //requerer o express em uma váriavel
const app = express(); //instância do express
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('dev'));

const rotaTeste = require('./routes/rota-teste'); // chama a rota de teste
const rotaRegister = require('./routes/authRoutes');
const rotaTask = require('./routes/taskRoutes');

app.use('/', rotaTeste);
app.use('/', rotaRegister)
app.use('/', rotaTask)

module.exports = app