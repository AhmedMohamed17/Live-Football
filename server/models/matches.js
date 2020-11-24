const Joi = require("joi");
const mongoose = require("mongoose");

const Match = mongoose.model(
  "Match",
  new mongoose.Schema({
    homeTeam: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    awayTeam: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50,
    },
    startTime: {
      type: Number,
      required: true,
    },
    endTime: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    homeTeamScore: {
      type: Number,
      required: true,
    },
    awayTeamScore: {
      type: Number,
      required: true,
    },
    league: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  })
);

function validateCustomer(match) {
  const schema = {
    homeTeam: Joi.string().min(5).max(50).required(),
    awayTeam: Joi.string().min(5).max(50).required(),
    startTime: Joi.number().required(),
    endTime: Joi.number().required(),
    duration: Joi.number().required(),
    homeTeamScore: Joi.number(),
    awayTeamScore: Joi.number(),
    league: Joi.string().min(5).max(50).required(),
    isActive: Joi.boolean(),
  };

  return Joi.validate(match, schema);
}

exports.Match = Match;
exports.validate = validateCustomer;
