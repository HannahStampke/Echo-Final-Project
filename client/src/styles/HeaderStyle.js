import { colours } from "../assets/colours";

export const headerContainer = styled.header`
  width: 100%;
  min-height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${colours.rhino};
  color: ${colours.feijoa};
`;

export const contentContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  min-height: 80px;
  display: flex;
  flex-direction: column;
`;

export const leftContainer = styled.div`
  flex: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  @media (max-width: 700px) {
    flex: 90%;
  }
`;

export const innerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const extendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 80px;
  background-color: ${colours.rhino};
  opacity: 90%;
  z-index: 99;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const linkTag = styled.a`
  text-decoration: none;
  font-size: large;
  cursor: pointer;
  ${(props) =>
    props.current ? `color: ${colours.hopbush}; font-weight: bold;` : ``}
  @media (max-width: 700px) {
    display: none;
  }
`;

export const extendedLinkTag = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: large;
  margin-bottom: ${(props) => (props.openedNavbar ? "2%" : 0)};
  ${(props) =>
    props.current ? `color: ${colours.hopbush}; font-weight: bold;` : ``}
`;

export const menuButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${colours.feijoa};
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;