import { gql } from '@apollo/client';

export const QUERY_ME= gql`
query Me {
  me {
    _id
    username
    email
  }
}
`;

export const QUERY_QUESTIONS= gql`
query Questions {
  questions {
    question
    correctchoice
    incorrectchoice
  }
}
`