const mongoose = require('mongoose');

const ReportSchema = mongoose.Schema(
	{
		car: Number,
		procedureDate: String,
		mileage: String,
		type: String,
		brand: String,
		quantity: String,
		nextMileage: String,
		nextDate: String,
		fixes: Number,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Reports', ReportSchema);
