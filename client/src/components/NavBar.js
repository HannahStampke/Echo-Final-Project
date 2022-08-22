import { useQuery } from '@apollo/client';
import React, {useState} from "react";
import { QUERY_ME } from '../utils/queries';

import {
    HeaderContainer,
    ContentContainer,
    LeftContainer,
    MenuButton,
    ExtendedContainer,
    LinkTag, 
    StyledH2,
} from "../styles/HeaderStyle";

import auth from "../utils/auth";
import {Link} from "react-router-dom";
import Profile from "../pages/Profile";

const NavBar = ({theme}) => {
    const {data} = useQuery(QUERY_ME);

    const profileData = data?.me || {}
    return (
        <div>
            <ContentContainer>
                <div>
                    <StyledH2>
                        <br></br>
                        Hi there, {profileData.username}.
                        <br></br><br></br>
                    </StyledH2>
                </div>
                <ExtendedContainer>
                        <MenuButton>
                            <Link to="/quiz">Quiz</Link>
                        </MenuButton>
                        <MenuButton>
                            <Link to="/profile">Profile</Link>
                        </MenuButton>
                        <MenuButton>
                            <Link to="/addquestions">Settings</Link>
                        </MenuButton>
                        <MenuButton>
                            <Link to="/">Log Out</Link>
                        </MenuButton>
                </ExtendedContainer>
            </ContentContainer>
        </div>
    );
};

export default NavBar;