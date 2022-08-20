import styled, {css} from "styled-components";
import {colours} from "../assets/colours";

const v = {
    headerHeight: "50px",
    smSpacing: `5px`,
    mdSpacing: `20px`,
    lgSpacing: `30px`,
    xlSpacing: `40px`,
    xxlSpacing: `60px`,
    borderRadius: "5px",
    boxShadow: `0 1px 1px rgba(0,0,0,0.20), 
    0 2px 2px rgba(0,0,0,0.20)`
};

export const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
    background-color: ${colours.jaggedice};
    color: ${colours.riverbed};
    font-size: ${v};
    text-align: center;
    font-weight: normal;
    border-radius: 25px;
    margin: 20px;
`

export const ChoiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${colours.jaggedice};
    color: ${colours.riverbed};
    border-radius: 25px;
    margin: ${v};
`

export const ButtonReset = css`
    font-family: inherit;
    background: ${colours.riverbed};
    letter-spacing: inherit;
    color: ${colours.feijoa};
    font-size: 20px;
    text-align: center;
    padding: 0;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 4px solid ${colours.hopbush};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
  font-size: ${v};
  align-self: center;
  align-items: center;
  font-weight: bold;
`;

export const SFormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const SFormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const SLabel = styled.label`
  display: block;
  align-self: auto;
  font-size: 16px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const SInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 90%;
  padding: ${v.smSpacing};
  margin: 1%;
  font-size: 16px;
  border-radius: ${v.borderRadius};
  border-color: ${colours.riverbed};
  color: ${colours.riverbed};
`;

export const SMessage = styled.textarea`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 90%;
  height: 150px;
  padding: ${v.smSpacing};
  font-size: 16px;
  border-radius: ${v.borderRadius};
`;

export const SButton = styled.button`
  ${ButtonReset};
  width: 30%;
  background: ${colours.feijoa};
  font-weight: bold;
  font-size: ${v};
  color: ${colours.riverbed};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: space-around;
  align-self: auto;
  border-width: 0px;
  border-radius: ${v.borderRadius};
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
`;