import React, {useState} from "react";
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';

import {
    QuizContainer,
    ButtonReset,
    SForm,
    SFormTitle,
    SFormControl,
    SLabel,
    SInput,
    SMessage,
    SButton,
    ChoiceContainer,
    QuestionCard,
    ExistingHeader,
    QuestionItem,
} from "../styles/QuizStyle";
import {
    ContentContainer,
} from "../styles/HeaderStyle"

const ActiveQuestions = () => {
    const {loading, data} = useQuery(QUERY_QUESTIONS);

    if (loading) {
        return (
            <ContentContainer>
                Loading...
            </ContentContainer>
        )
    }

    const questionData = data?.questions || []

    return (
        <div>
            <ExistingHeader>Your Active Questions</ExistingHeader>
            {questionData.map(question => (
                <QuestionCard>
                    <QuestionItem>
                        {question.question}
                        <button>🗑️</button>
                    </QuestionItem>
                </QuestionCard>
            )) }
        </div>
    )
}

export default ActiveQuestions;