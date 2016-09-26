var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');
var Schema = mongoose.Schema;

var featuresSchema = new Schema({
	type: { type: String, required: true },
	geometry: {
		type: { type: String, required: true },
		coordinates: [Number],
		bbox: [Number]
	},
	properties: Schema.Types.Mixed
});

// var featuresSchema = new Schema({
// 	type: { type: String, required: true },
// 	coordinates: [Number],
// 	bbox: [Number]
// });

var Features = mongoose.model('Features', featuresSchema);

module.exports = Features;