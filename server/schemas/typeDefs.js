const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Question {
    _id: ID
    question: String
    correctchoice: String
    incorrectchoice: String
  }

  type Query {
    users: [User]
    me: User
    questions: [Question]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addQuestion(question: String, correctchoice: String, incorrectchoice: String): Question

  }
`;

module.exports = typeDefs;
