import React from "react";
import {
    HeaderContainer,
    ContentContainer,
    LeftContainer,
    MenuButton,
    ExtendedContainer,  
} from "../styles/HeaderStyle";

import auth from "../utils/auth";
import {Link} from "react-router-dom";
import Profile from "../pages/Profile";
import TheQuiz from "../components/TheQuiz";

const Quiz = ({theme}) => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

    return (
        <div>
            {auth.loggedIn() ? (
                <HeaderContainer>
                    <LeftContainer>
                        <h1>ECHO</h1>
                    </LeftContainer>
                </HeaderContainer>
            ) : (
                <ContentContainer id="quiz">
                    <ContentContainer>
                        <TheQuiz></TheQuiz>
                    </ContentContainer>
                </ContentContainer>
            )}
        </div>
    );
}

export default Quiz;