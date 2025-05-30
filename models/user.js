const { DataTypes } = require('sequelize'); // tipos de dados do sequelize
const { sequelize } = require('../config/config'); // estância do sequelize
const Task = require('../models/task');

const User = sequelize.define('User', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail: true, // valida que é um email
        }
    },

    senha:{
        type: DataTypes.STRING,
        allowNull:false,
    },

    ativo:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },

}, {
    timestamps: false // evita a criação automatica de campos
});

User.hasMany(Task, { foreignKey: 'userId' }); // um usuário possui várias tasks

module.exports = User;