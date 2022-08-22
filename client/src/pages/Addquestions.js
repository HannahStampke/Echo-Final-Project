import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';
import { ADD_QUESTION } from '../utils/mutations';

import {
    ButtonReset,
    SForm,
    SFormTitle,
    SFormControl,
    SLabel,
    SInput,
    SMessage,
    SButton,
    QuizContainer,
    QuestionCard,
    ExistingHeader,
} from "../styles/QuizStyle";

import {
  HomeHeaderContainer,
} from "../styles/HomeStyle";

import NavBar from "../components/NavBar";
import Auth from '../utils/auth';

const AddQuestions = () => {
  const [formState, setFormState] = useState({
    question: '',
    correctchoice: '',
    incorrectchoice: '',
  });
  const [addQuestion, { error, data }] = useMutation(ADD_QUESTION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addQuestion({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <NavBar></NavBar>
        <div>
          <HomeHeaderContainer>
            <br></br>
            Add a Unique Question
            <br></br><br></br>
          </HomeHeaderContainer>
          <div>
            {data ? (
              <p>
                Success! You added a question. Feel free to head back to the 
                <Link to="/"> homepage.</Link>
              </p>
            ) : (
                <div>
                  <QuizContainer>
                      <SForm onSubmit={handleFormSubmit}>
                      <SLabel>
                              Question
                          </SLabel>
                          <SInput
                          className="form-input"
                          placeholder="Enter a question"
                          name="question"
                          type="text"
                          value={formState.question}
                          onChange={handleChange}
                          />
                          <SLabel>
                              <br></br>
                              Correct Answer
                          </SLabel>
                          <SInput
                          className="form-input"
                          placeholder="Enter the correct answer"
                          name="correctchoice"
                          type="text"
                          value={formState.correctchoice}
                          onChange={handleChange}
                          />
                          <SLabel>
                          <br></br>
                              Incorrect Answer
                          </SLabel>
                          <SInput
                          className="form-input"
                          placeholder="Enter an incorrect answer"
                          name="incorrectchoice"
                          type="text"
                          value={formState.incorrectchoice}
                          onChange={handleChange}
                          />
                          <br></br>
                          <SButton
                          className="btn btn-block btn-primary"
                          style={{ cursor: 'pointer' }}
                          type="submit"
                          >
                              Add Question
                          </SButton>
                      </SForm>
                  </QuizContainer>
                  <QuestionCard>
                    See your active questions on the
                    <Link to="/profile"> profile page.</Link>
                  </QuestionCard>
                </div>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddQuestions;
