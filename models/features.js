var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var featureSchema = new Schema({
  geometry: {
    'type': { type: String, default: 'Point' },
    coordinates: [Number, Number]
  },
  properties: Schema.Types.Mixed
});

var featuresSchema = new Schema({
  'type': { type: String, default: 'FeatureCollection', required: false },
  name: { type: String, default: '', required: false },
  features: [ featureSchema ]
}, {
  timestamps: true
});

var Features = mongoose.model('Features', featuresSchema);

module.exports = Features;