const { AuthenticationError } = require('apollo-server-express');
const { User, Question } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ email: context.user.email});
      }
      throw new AuthenticationError('You must be signed in');
    },
    questions: async () => {
      return Question.find().sort({createdAt: -1});
    },
    question: async (parent,{questionId}) => {
      return Question.findOne({_id: questionID});
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addQuestion: async (parent, {question, correctchoice, incorrectchoice}) => {
      const createdQuestion = await Question.create({question, correctchoice, incorrectchoice});
      console.log(question);
      return createdQuestion;
    },
    removeQuestion: async (parent, { questionId }) => {
      if (context.question) {
        const question = await Question.findOneAndDelete({
          _id: questionId,
        });
  
        await Question.findOneAndUpdate(
          { _id: context.question._id },
          { $pull: { questions: question._id } }
        );
  
        return question
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
