import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';
import Header from "../components/Header";

import {
    HeaderContainer,
    ContentContainer,
    LeftContainer,
    MenuButton,
    ExtendedContainer,
    LinkTag, 
    OtherButton,
} from "../styles/HeaderStyle";
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <br></br><br></br>
        <ExtendedContainer>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <OtherButton>
            <Link to= "/login">Log In</Link>
        </OtherButton>
        <OtherButton>
            <Link to= "/signup">Sign Up</Link>
        </OtherButton>
        
        </ExtendedContainer>
        </div>
    );
};
export default Welcome;