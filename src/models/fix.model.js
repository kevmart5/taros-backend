const mongoose = require('mongoose');

const FixSchema = mongoose.Schema(
	{
		car: Number,
		date: String,
		mileage: String,
		spareParts: String,
		procedures: String,
		comments: String,
		pendings: String,
		observations: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Fixes', FixSchema);
