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
import NavBar from "../components/NavBar";

const Quiz = ({theme}) => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

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