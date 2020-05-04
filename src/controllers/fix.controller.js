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
