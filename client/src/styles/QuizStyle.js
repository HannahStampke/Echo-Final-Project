import styled, {css} from "styled-components";
import {colours} from ".../assets/colours";

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

const buttonReset = css`
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    letter-spacing: inherit;
    colour: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
`;

export const sForm = styled.form`
  width: 60%;
  border: 4px solid ${colour.riverbed};
  border-radius: ${v.borderRadius};
  padding: ${v.mdSpacing};
`;

export const sFormTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const sFormControl = styled.div`
  :first-of-type {
    margin-top: ${v.mdSpacing};
  }
  :not(:last-of-type) {
    margin-bottom: ${v.smSpacing};
  }
`;

export const sLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: calc(${v.smSpacing} / 4);
`;

export const sInput = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 90%;
  padding: ${v.smSpacing};
  font-size: 16px;
  border-radius: ${v.borderRadius};
`;

export const sMessage = styled.textarea`
  outline: none;
  border: 1px solid ${({ theme }) => theme.textFade};
  width: 90%;
  height: 150px;
  padding: ${v.smSpacing};
  font-size: 16px;
  border-radius: ${v.borderRadius};
`;

export const sButton = styled.button`
  ${buttonReset};
  width: 100%;
  background: ${colours.hopbush};
  color: ${colours.jaggedice};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: center;
  border-radius: ${v.borderRadius};
  margin-top: ${v.mdSpacing};
  cursor: pointer;
`;