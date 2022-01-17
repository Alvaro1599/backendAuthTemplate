const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const user = sequelize.define(
	'user',
	{
		id: {
			type: DataTypes.CHAR,
			primaryKey: true,
			allowNull: false
		},
		name: {
			type: DataTypes.STRING
		},
		lastname: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING
		}
	},
	{
		timestamps: false
	}
);

module.exports = user;
