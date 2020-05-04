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

exports.homePage = (req, res) => {
	res.send('Im here');
};
