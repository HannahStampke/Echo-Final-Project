const { Schema, model } = require('mongoose');

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
  // If your user needs more properties, add them here. Don't forget to add them to the typeDefs.js, resolvers.js and the userSeeds.
});

const Question = model("Question", questionSchema);

module.exports = Question;
