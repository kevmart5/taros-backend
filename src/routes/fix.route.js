module.exports = (app) => {
	const fix = require('../controllers/fix.controller.js');

	app.get('/fix', fix.findAll);
};
