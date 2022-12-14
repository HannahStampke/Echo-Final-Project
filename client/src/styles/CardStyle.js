import styled, {css} from "styled-components";
import { colours } from "../assets/colours";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 31%;
  margin: 1%;
  background-color: ${colours.jaggedice};
  min-height: 50vh;
  border-radius: 5%;
  color: ${colours.terracotta};
  text-align: center;
  box-sizing: border-box;
  @media (max-width: 1000px) {
    min-height: 45vh;
  }
  @media (max-width: 700px) {
    flex: 1 1 48%;
  }
  @media (max-width: 500px) {
    flex: 1 1 98%;
    min-height: 40vh;
  }
`;

export const CardImage = styled.img`
  border-radius: 5% 5% 0 0;
  object-fit: cover;
  width: 100%;
`;

export const CardTitle = styled.h3`
  margin: 2%;
`;

export const CardDescription = styled.p`
  margin: 2%;
`;

export const CardLink = styled.a`
  text-decoration: none;
  color: ${colours.terracotta};
`