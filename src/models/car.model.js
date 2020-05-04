const mongoose = require('mongoose');

const CarSchema = mongoose.Schema(
	{
		auto: String,
		motor: String,
		year: String,
		cc: String,
		plate: String,
		owner: String,
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Cars', CarSchema);
