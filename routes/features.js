var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Features = require('../models/features');

var featureRouter = express.Router();
featureRouter.use(bodyParser.json());

featureRouter.route('/')
  .get(function(req, res, next) {
    Features.find({}, function(err, features) {
      if (err) {
        return next(err);
      }
      res.json(features);
    });
  })
  .post(function(req, res, next) {
    console.log(req.body);
    Features.create(req.body, function(err, features) {
      if (err) {
        return next(err);
      }
      res.end();
    });
  })
  .delete(function(req, res, next) {
    Features.remove({}, function(err, resp) {
      if (err) {
        return next(err);
      }
      res.json(resp);
    });
  })
;
featureRouter.route('/:layerId')
  .get(function(req, res, next) {
    Features.findById(req.params.layerId)
  })
  .put(function(req, res, next) {
    Features.update({ name: req.params.layerId}, {
      $set: req.body
    }, function(err, feature) {
      if (err) {
        return next(err);
      }
      res.json(feature);
    });
  })
  .post(function(req, res, next) {
    Features.create(req.body, function(err, feature) {
      if (err) {
        return next(err);
      }
      res.json(feature);
    });
  })
  .delete(function(req, res, next) {
    Features.remove({ name: req.params.layerId }, function(err, resp) {
      if (err) {
        return next(err);
      }
      res.json(resp);
    });
  })
;

module.exports = featureRouter;