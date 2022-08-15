import React from "react";
import {
    headerContainer,
    contentContainer,
    leftContainer,
    innerContainer,
    extendedContainer,
    linkTag,
    extendedLinkTag,
    menuButton,  
} from "../styles/HeaderStyle";

import auth from "../utils/auth";
import {link} from "react-router-dom";

const Header = ({theme}) => {
    const logout = (event) => {
        event.preventDefault();
        auth.logout();
    };

    return (
        <Header>
            {auth.loggedIn() ? (
                <headerContainer>
                    <leftContainer>
                        <h1>ECHO</h1>
                    </leftContainer>
                </headerContainer>
            ) : (
                <extendedContainer>
                    <div>
                        <h2>
                            Reverberate the past.
                        </h2>
                    </div>
                    <linkTag to= "/signup">
                        <button>
                            Log In
                        </button>
                    </linkTag>
                    <linkTag to= "/login">
                        <button>
                            Sign Up
                        </button>
                    </linkTag>
                </extendedContainer>
            )}
        </Header>
    );
};

export default Header;