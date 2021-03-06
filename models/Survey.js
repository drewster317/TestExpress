 'use strict';

var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// export a mongoose model

var surveySchema = new Schema({
  surveyName : {
    type : String,
    unique : true,
    required : true
  },
  surveyQuestion : {
    type : String,
    required : true
  }
});

surveySchema.plugin(uniqueValidator);


module.exports = surveySchema;
