module.exports = (app) => {
	const car = require('../controllers/car.controller.js');

	app.get('/car', car.findAll);
	app.get('/car/:id', car.findById);
};
