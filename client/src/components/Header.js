import React, {useState} from "react";

import {
    HeaderContainer,
    ContentContainer,
    LeftContainer,
    MenuButton,
    ExtendedContainer,
    LinkTag, 
} from "../styles/HeaderStyle";

import auth from "../utils/auth";
import {Link} from "react-router-dom";
import Profile from "../pages/Profile";

const Header = ({theme}) => {
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
                <ContentContainer>
                    <div>
                        <h2>
                            <br>
                            </br>
                            Reverberate the past.
                        </h2>
                    </div>
                    <ExtendedContainer>
                            <MenuButton button to= "/signup">
                                Log In
                                About Me
                            <LinkTag
                            onClick={() => handlePageChange("signup")}
                            ></LinkTag>
                            </MenuButton>
                            <MenuButton button to= "/login">
                                Sign Up
                            </MenuButton>
                            <MenuButton button to= "/profile">
                                Profile
                            </MenuButton>
                            <MenuButton button to= "/results">
                                Results
                            </MenuButton>
                    </ExtendedContainer>
                </ContentContainer>
            )}
        </div>
    );
};

export default Header;