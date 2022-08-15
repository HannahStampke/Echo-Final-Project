import styled, {css} from "styled-components";
import {colours} from ".../assets/colours";

export const footerContainer = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100px;
    width: 100%;
    background-colour: ${colours.riverbed};
    `;
export const contentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-width: 2000px;
`;

export const socialsContainer = styled.div`
    display: flex;
    width: 70%;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const footerImage = styled.img`
    height: 40px;
    filter: grayscale(100%);
    &:hover {
        filter: grayscale(0%);
    }
`;