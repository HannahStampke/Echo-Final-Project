import styled, { keyframes } from "styled-components";
import { colours } from "../assets/colours";

const waveAnimation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
`;

export const contentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 1400px;
`;

export const introSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 500px){
    flex-direction: column;
  }
`;
export const introText = styled.div`
  flex: 2 1 65%;
  margin: 2%;
  text-align: center;
`;

export const userPictureContainer = styled.div`
  flex: 1 5 35%;
  margin: 2%;
`;

export const introImage = styled.img`
  height: 33vw;
  max-height: 350px;
  width: auto;
  border: 5px dotted ${Pallette.secondary};
  border-radius: 50%;
  padding: 2px;
  @media (max-width: 500px){
    height: 60vw;
  }
`;

export const wave = styled.span`
  &:hover {
    animation-name: ${waveAnimation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
`;

export const aboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const link = styled.a`
  text-decoration none;
`