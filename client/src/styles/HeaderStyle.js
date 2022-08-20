import styled from "styled-components";
import { colours } from "../assets/colours";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${colours.rhino};
  color: ${colours.feijoa};
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colours.hopbush};
  color: ${colours.jaggedice};
  font-size: 40px;
`;

export const LeftContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  @media (max-width: 700px) {
    flex: 90%;
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const ExtendedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  top: 80px;
  background-color: ${colours.jaggedice};
  z-index: 99;
  justify-content: center;
  @media (min-width: 700px) {
    display: flex;
  }
`;

export const LinkTag = styled.a`
  text-decoration: none;
  font-size: large;
  cursor: pointer;
  ${(props) =>
    props.current ? `color: ${colours.hopbush}; font-weight: bold;` : ``}
  @media (max-width: 700px) {
    display: none;
  }
`;

export const ExtendedLinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: large;
  margin-bottom: ${(props) => (props.openedNavbar ? "2%" : 0)};
  ${(props) =>
    props.current ? `color: ${colours.hopbush}; font-weight: bold;` : ``}
`;

export const MenuButton = styled.button`
  width: 90px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: ${colours.hopbush};
  border-radius: 10px;
  margin: 20px;
  color: ${colours.jaggedice};
  font-size: 20px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: flex;
  }
`;