import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';
import {
    ContentContainer,
    IntroSection,
    IntroText,
    UserPictureContainer,
    IntroImage,
    AboutSection,
    HomeLink,
    HomeHeaderContainer,
} from "../styles/HomeStyle";

import NavBar from "../components/NavBar"
import ActiveQuestions from '../components/ActiveQuestions';

const Profile = () => {
    const {loading, data} = useQuery(QUERY_ME);

    if (loading) {
        return (
            <ContentContainer>
                Loading...
            </ContentContainer>
        )
    }

    const profileData = data?.me || {}

    return (
        <div>
        <NavBar></NavBar>
        <ContentContainer>
            <HomeHeaderContainer>
                <br></br>
                {profileData.username}'s Profile
                <br></br>
            </HomeHeaderContainer>
            <br></br><br></br>
            <IntroText>
                <img alt="elliot's image" src="../public/Elliot.jpeg"></img>
                <br></br>
                Username: {profileData.username}
                <br/>
                Email: {profileData.email}
                <br/><br></br>
            </IntroText>
        </ContentContainer>
        <br></br><br></br>
        <ActiveQuestions></ActiveQuestions>
        </div>
    );
};

export default Profile