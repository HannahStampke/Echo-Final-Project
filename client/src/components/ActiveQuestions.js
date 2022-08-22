import React from "react";
import { useMutation } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';
import {REMOVE_QUESTION} from '../utils/mutations';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

import {
    QuestionCard,
    ExistingHeader,
    QuestionItem,
} from "../styles/QuizStyle";
import {
    ContentContainer,
} from "../styles/HeaderStyle"

const ActiveQuestions = ({
    questions,
    showButton
    }) => {
    const [removeQuestion] = useMutation(REMOVE_QUESTION)

    const handleDeleteQuestion = async (question._id) => {

        try {
            const { data } = await removeQuestion({
                variables: { QuestionId: question._id }
            });
            window.location.reload();
        } catch (error) {
            console.log(error)
        };
    }

    if (!questions.length) {
        return <p className='no-data'>You don't have any active questions!</p>
    }
    
    const questionData = data?.questions || []
        return (
            <div>
                <div className='row'>
                    {questions?.map((question) => (
                        <div key={question._id} className="col-12 col-lg-6">
                            <div className="card-styling">
                                <div className="card-header">
                                    <h3>
                                        <Link
                                            to={`/addquestions/${question._id}`}
                                            className="title-style"
                                        >
                                            {question}
                                        </Link>
                                        ) : (
                                        <span></span>
                                        )
                                    </h3>
                                    <p className='created-date'>{' '}Created on {question.createdAt}</p>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {question.correctchoice}
                                    </p>
                                    <p>
                                        {question.incorrectchoice}
                                    </p>
                                </div>
                                <Link className="btn btn-style" to={`/addquestions/${question._id}`}>
                                    Add Questions
                                </Link>
                                {showButton ? (
                                    <button className='btn btn-style' onClick={() => handleDeleteQuestion(question._id)}>
                                        Remove question
                                    </button>
                                ) : (
                                    <span></span>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        );
};
//     return (
//         <div>
//             <ExistingHeader>Your Active Questions</ExistingHeader>
//             {questionData.map(question => (
//                 <QuestionCard>
//                     <QuestionItem>
//                         {question.question}
//                         <button>🗑️</button>
//                     </QuestionItem>
//                 </QuestionCard>
//             )) }
//         </div>
//     )
// }

export default ActiveQuestions;