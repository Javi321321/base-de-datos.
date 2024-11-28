const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('taskdb', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = { sequelize };
