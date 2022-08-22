import React from "react";
import {
    ContentContainer, 
} from "../styles/HeaderStyle";

import auth from "../utils/auth";
import TheQuiz from "../components/TheQuiz";
import NavBar from "../components/NavBar";

const Quiz = ({theme}) => {
    
    return (
        <div>
            {auth.loggedIn() ? (
                <div>
                <NavBar>
                </NavBar>
                <br></br><br></br><br></br><br></br>
                <ContentContainer id="quiz">
                    <ContentContainer>
                        <TheQuiz></TheQuiz>
                    </ContentContainer>
                </ContentContainer>
                </div>
            ) : (
                <div>
                <NavBar></NavBar>
                <ContentContainer id="quiz">
                    <ContentContainer>
                        <TheQuiz></TheQuiz>
                    </ContentContainer>
                </ContentContainer>
                </div>
            )}
        </div>
    );
}

export default Quiz;