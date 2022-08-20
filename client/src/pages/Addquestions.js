import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
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
} from "../styles/QuizStyle";

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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">
            <br></br>
            Add a Unique Question
            <br></br><br></br>
          </h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You added a question.
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
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
