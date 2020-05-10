const mongoose = require('mongoose');
const Report = require('../models/report.model.js');

exports.findAll = (req, res) => {
	Report.find()
		.then((reports) => {
			res.send(reports);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};

exports.findByCar = (req, res) => {
	const carId = req.params.id;
	Report.find()
		.then((reports) => {
			const reportsByCar = reports.filter((report) => report.car === carId);
			res.send(reportsByCar);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};
