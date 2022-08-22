import { useQuery } from '@apollo/client';
import React from 'react';
import { QUERY_ME } from '../utils/queries';
import {
  ContentContainer,
} from "../styles/HomeStyle";
import NavBar from '../components/NavBar';

const Home = () => {

  return (
    <main>
      <NavBar>
      </NavBar>
      <ContentContainer>
      </ContentContainer>
    </main>
  );
};

export default Home;
