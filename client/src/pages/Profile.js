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
        <ContentContainer>
            <HomeHeaderContainer>
                <br></br>
                Profile
                <br></br>
            </HomeHeaderContainer>
            <IntroText>
                Id: {profileData._id}
                <br/>
                Email: {profileData.email}
                <br/>
                Username: {profileData.username}
            </IntroText>
        </ContentContainer>
    );
};

export default Profile