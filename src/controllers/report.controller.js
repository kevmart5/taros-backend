const mongoose = require('mongoose');
const errorMessages = require('../constants/errorMessages');
const successMessages = require('../constants/successMessages');
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

exports.createReport = (req, res) => {
	const newReport = new Report(req.body);
	newReport
		.save()
		.then((data) => {
			res.status(200).send(newReport);
		})
		.catch((error) => {
			res.status(500).send({
				message: error.message,
			});
		});
};

exports.updateReport = (req, res) => {
	Report.findOneAndUpdate({ _id: req.body._id }, req.body)
		.then((data) => {
			res.status(200).send(req.body);
		})
		.catch((error) => {
			res.status(500).send({
				message: error.message,
			});
		});
};

exports.deleteReport = (req, res) => {
	Report.deleteOne({ _id: req.params.id })
		.then((data) => {
			res.status(200).send({
				status: 'OK',
				message: successMessages.REPORT_DELETE_SUCCESS,
				deleteCount: data.deletedCount,
			});
		})
		.catch((error) => {
			res.status(500).send({
				message: errorMessages.REPORT_DELETE_SUCCESS,
				serverMessage: error.message,
			});
		});
};
