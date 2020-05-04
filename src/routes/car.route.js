module.exports = (app) => {
	const car = require('../controllers/car.controller.js');

	app.get('/', car.homePage);

	app.get('/car', car.findAll);
};
