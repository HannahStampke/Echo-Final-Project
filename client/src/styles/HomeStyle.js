import styled from "styled-components";
import { colours } from "../assets/colours";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

export const HomeHeaderContainer = styled.h1`
  flex-direction: row;
  width: 100%;
  min-height: 80px;
  display: flexbox;
  justify-content: center;
  align-self: center;
  background-color: ${colours.feijoa};
  color: ${colours.rhino};
`;

export const IntroSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 500px){
    flex-direction: column;
  }
`;

export const IntroText = styled.div`
  flex: 2 1 65%;
  margin: 0, 10%;
  width: 45%;
  align-self: flex-start;
  text-align: left;
  background-color: ${colours.feijoa};
  color: ${colours.rhino};
`;

export const UserPictureContainer = styled.div`
  flex: 1 5 35%;
  margin: 2%;
`;

export const IntroImage = styled.img`
  height: 33vw;
  max-height: 350px;
  width: auto;
  border: 5px dotted ${colours.riverbed};
  border-radius: 50%;
  padding: 2px;
  @media (max-width: 500px){
    height: 60vw;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const HomeLink = styled.a`
  text-decoration: none;
  color: ${colours.riverbed};
`