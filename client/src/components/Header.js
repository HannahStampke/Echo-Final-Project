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
                            <MenuButton>
                                <Link to= "/login">Log In</Link>
                            </MenuButton>
                            <MenuButton>
                            <Link to= "/signup">Sign Up</Link>
                            </MenuButton>
                    </ExtendedContainer>
                </ContentContainer>
            )}
        </div>
    );
};

export default Header;