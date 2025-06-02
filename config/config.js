const { Sequelize } = require('sequelize');

require('dotenv').config();
 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false, // cuidado, é inseguro em produção sem configuração correta
        },
    },
});

async function conectarBanco() {
    
    try {
        await sequelize.authenticate(); // authenticate() - testa se a conexão com o bd está funcionando
        console.log("Conexão com o banco de dados realizada com Sucesso")

        await sequelize.sync({ force: true });
        console.log("Apagando tabelas e Recriando...")

        await sequelize.sync();
        console.log("Tabelas Criadas com Sucesso")
    } catch (error) {
        console.log("Erro ao conectar ou sincronizar o banco de dados", error.message)
        process.exit(1); // derruba a aplicação caso ela falhe
    }
}

module.exports = { sequelize, conectarBanco};
 