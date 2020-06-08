const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema(
	{
		car: String,
		procedureDate: Date,
		mileage: String,
		type: String,
		brand: String,
		quantity: String,
		nextMileage: String,
		nextDate: Date,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Reports', ReportSchema);
