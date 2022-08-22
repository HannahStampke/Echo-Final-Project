import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      name
      username
      email
    }
  }
}`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const ADD_QUESTION = gql`
mutation AddQuestion($question: String, $correctchoice: String, $incorrectchoice: String) {
  addQuestion(question: $question, correctchoice: $correctchoice, incorrectchoice: $incorrectchoice) {
      _id
      question
      correctchoice
      incorrectchoice
  }
}`

export const REMOVE_QUESTION = gql`
  mutation removeQuestion($questionId: ID!) {
    removeQuestion(questionId: $questionId) {
      _id
      question
      correctchoice
      incorrectchoice
    }
  }
`