const app = require('./app');

const { conectarBanco } = require('./config/config') // função que conecta com o db

require('./models/index');

require('dotenv').config(); //requere o dotenv para usar váriaveis de ambiente

const PORT = process.env.PORT || 9090; // porta do erver

async function startServer() { // função que inicia o server

    await conectarBanco();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`) // Escutar a porta de operação do server
    })
}

startServer();

