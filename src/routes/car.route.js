module.exports = (app) => {
	const car = require('../controllers/car.controller.js');

	app('/', car.home);
	app.get('/car', car.findAll);
	app.get('/car/:id', car.findById);
};
