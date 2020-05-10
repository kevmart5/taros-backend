const mongoose = require('mongoose');
const Car = require('../models/car.model.js');

exports.home = (req, res) => {
	res.send('Cars home');
};

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

exports.createCar = (req, res) => {
	const newCarObject = new Car(req.body);
	newCarObject
		.save()
		.then((data) => {
			res.send(newCarObject);
		})
		.catch((error) => {
			res.status(500).send({
				message: error.message,
			});
		});
};

exports.updateCar = (req, res) => {
	Car.findOneAndUpdate({ _id: req.body._id }, req.body)
		.then((data) => {
			res.status(200).send(req.body);
		})
		.catch((error) => {
			res.status(500).send({
				message: error.message,
			});
		});
};
