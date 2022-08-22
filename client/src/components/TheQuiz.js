import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_QUESTIONS } from '../utils/queries';
import {Link} from "react-router-dom";

import {
    QuizContainer,
    SForm,
    SButton,
    ChoiceContainer,
    SLabbo,
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
            <div>
                <label for="qstn">{question.question}</label>
                <ChoiceContainer>
                <SLabbo for="correct">{question.correctchoice}
                <input type="radio" id="correct" name="correct"></input>
                </SLabbo>
                <br></br><br></br>
                <SLabbo for="incorrect">{question.incorrectchoice}
                <input type="radio" id="incorrect" name="incorrect"></input>
                </SLabbo>
                <br></br><br></br>
                </ChoiceContainer>
            </div>
            )) }
            <SButton type="submit"style={{ cursor: 'pointer' }}>
                <Link to="/submitted">Submit</Link>
            </SButton>
        </SForm>
    )
}

export default TheQuiz;