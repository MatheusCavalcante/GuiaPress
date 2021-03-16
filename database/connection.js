const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = connection;