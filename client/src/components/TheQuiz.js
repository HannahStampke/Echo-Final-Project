import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';

import {
    QuizContainer,
    SForm,
    SButton,
    ChoiceContainer,
} from "../styles/QuizStyle";
import {
    ContentContainer,
} from "../styles/HeaderStyle"

const TheQuiz = () => {
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
        <SForm>
            Quiz
            {questionData.map(question => (
                <QuizContainer>
                    {question.question}
                <ChoiceContainer>
                <SButton>
                    {question.correctchoice}
                </SButton>
                <SButton>
                    {question.incorrectchoice}
                </SButton>
                </ChoiceContainer>
                </QuizContainer>
            )) }
        </SForm>
    )
}

export default TheQuiz;