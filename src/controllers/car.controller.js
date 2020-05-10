const mongoose = require('mongoose');
const Car = require('../models/car.model.js');

exports.findAll = (req, res) => {
	Car.find()
		.then((cars) => {
			res.send(cars);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};

exports.findById = (req, res) => {
	Car.findById({ _id: req.params.id })
		.then((car) => {
			res.send(car);
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
			});
		});
};
