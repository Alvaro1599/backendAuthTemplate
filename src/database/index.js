const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_auth', 'postgres', '152220', {
	host: 'localhost',
	dialect: 'postgres',
	logging: false
});

module.exports = sequelize;
