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
	properties: {
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: String
  }
}, {
  timestamps: true
});

var Features = mongoose.model('Features', featuresSchema);

module.exports = Features;