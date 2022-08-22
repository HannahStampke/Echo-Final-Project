const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
    unique: true,
  },
  correctchoice: {
    type: String,
    required: true,
  },
  incorrectchoice: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  // If your user needs more properties, add them here. Don't forget to add them to the typeDefs.js, resolvers.js and the userSeeds.
});

const Question = model("Question", questionSchema);

module.exports = Question;
