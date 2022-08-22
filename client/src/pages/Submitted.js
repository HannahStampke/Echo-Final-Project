import React from 'react';

import {
  ContentContainer,
  HomeHeaderContainer,
} from "../styles/HomeStyle";
import NavBar from '../components/NavBar';

const Submitted = () => {

  return (
    <main>
      <NavBar>
      </NavBar>
      <ContentContainer>
        <br></br>
      <HomeHeaderContainer>
      <br></br>
        Thanks for submitting!<br></br>
        Your results will be evaluated by the team!
        <br></br><br></br>
      </HomeHeaderContainer>
      </ContentContainer>
    </main>
  );
};

export default Submitted;
