module.exports = (app) => {
	const report = require('../controllers/report.controller.js');

	app.get('/report', report.findAll);
	app.get('/report/car/:id', report.findByCar);
	app.post('/report', report.createReport);
	app.put('/report', report.updateReport);
	app.delete('/report', report.deleteReport);
};
