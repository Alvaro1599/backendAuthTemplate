const app = require('./app.js');
const sequelize = require('./database');
app.listen(app.get('PORT'), async () => {
	try {
		console.log(`Server is running on port ${app.get('PORT')}`);
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
		await sequelize.sync({ force: false });
	} catch (error) {
		console.log(error);
	}
});
