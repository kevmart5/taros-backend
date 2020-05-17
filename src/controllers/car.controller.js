const mongoose = require('mongoose');
const errorMessages = require('../constants/errorMessages');
const successMessages = require('../constants/successMessages');
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
	Car.find()
		.then((cars) => {
			const existCar = cars.find((car) => car.plate === newCarObject.plate);
			if (existCar) {
				return res.status(400).json({
					status: 'error',
					message: errorMessages.CAR_REGISTER_ALREADY,
				});
			} else {
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
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message,
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

exports.deleteCar = (req, res) => {
	Car.deleteOne({ _id: req.params.id })
		.then((data) => {
			res.status(200).send({
				status: 'OK',
				message: successMessages.CAR_DELETE_SUCCESS,
				deleteCount: data.deletedCount,
			});
		})
		.catch((error) => {
			res.status(500).send({
				message: errorMessages.CAR_DELETE_REQUEST,
				serverMessage: error.message,
			});
		});
};
