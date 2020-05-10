module.exports = (app) => {
	const car = require('../controllers/car.controller.js');

	app.get('/', car.home);
	app.get('/car', car.findAll);
	app.get('/car/:id', car.findById);
	app.post('/car', car.createCar);
	app.put('/car', car.updateCar);
};
