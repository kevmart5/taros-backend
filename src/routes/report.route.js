module.exports = (app) => {
	const report = require('../controllers/report.controller.js');

	app.get('/report', report.findAll);
};
