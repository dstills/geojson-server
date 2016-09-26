var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var GeoStore = require('terraformer-geostore').GeoStore;
// var RTree = require('terraformer-rtree').RTree;
// var LevelStore = require('terraformer-geostore-leveldb');
var cors = require('cors');
var Features = require('../models/features');

// var store = new GeoStore({
//   store: new LevelStore(),
//   index: new RTree()
// });

var featureRouter = express.Router();
featureRouter.use(bodyParser.json());
featureRouter.use(cors());

featureRouter.route('/')
  .get(function(req, res, next) {
    Features.find({}, function(err, features) {
      console.log('features: ', features);
      res.json(features);
    });
  })
  .post(function(req, res, next) {
    console.log('body', req.body);
    Features.create(req.body, function(err, feature) {
      if (err) return next(err);
      res.json(feature);
    });
  })
  .delete(function(req, res, next) {
    Features.remove({}, function(err, resp) {
      if (err) return next(err);
      res.json(resp);
    });
  })
;

featureRouter.route('/:id')
  .get(function(req, res, next) {
    Features.findById(req.params.id, function(err, feature) {
      if (err) return next(err);
      res.json(feature);
    });
  })
  .post(function(req, res, next) {
    console.log(req.body._id);
    Features.create(req.body, function(err, feature) {
      if (err) return next(err);
      res.json(feature);
    })
  })
  .delete(function(req, res, next) {
    Features.findByIdAndRemove(req.id, function(err, resp) {
      if (err) return next(err);
      res.json(resp);
    });
  })
;

module.exports = featureRouter;