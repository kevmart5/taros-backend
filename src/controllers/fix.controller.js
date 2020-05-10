const mongoose = require('mongoose');
const Fix = require('../models/fix.model.js');

exports.findAll = (req, res) => {
	Fix.find()
		.then((fixes) => {
			res.send(fixes);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};

exports.findByCar = (req, res) => {
	const carId = req.params.id;
	Fix.find()
		.then((fixes) => {
			const fixesByCar = fixes.filter((fix) => fix.car === carId);
			res.send(fixesByCar);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};
