import styled from "styled-components";
import { NavLink } from "react-router-dom";
import color from "../styles/_colors";

const activeClassName = "active";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: center;
  background-color: ${color.whitesmoke};
  border-bottom: 6px solid ${color.darkgrey};
  align-items: center;
  margin-bottom: 20px;
  height: 100px;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    justify-content: center;
  }
`;

export const NavBarItem = styled(NavLink).attrs({
  activeClassName: activeClassName,
})`
  text-decoration: none;
  font-family: "Courier";
  text-transform: uppercase;
  font-size: 3em;
  font-weight: bold;
  padding: 0 2vw;
  color: ${color.greysmoke};
  transition: all 0.2s ease-in-out;

  &.${activeClassName} {
    font-weight: bold;
    color: ${color.grey};
  }

  :hover {
    font-weight: bold;
    color: ${color.grey};
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
    color: ${color.grey};
    padding: 0 10px;
  }
`;

export const NavBarCycleMate = styled(NavLink)`
  text-decoration: none;
  padding: 0 50px;
  color: black;
  h1 {
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }

    padding: 0;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3.6vw;
  }
`;

export const NavButton = styled.button`
  padding: 5px;
  font-weight: bold;
  font-family: Courier;
  background-color: white;
  margin: 5px 5px 0 5px;
  border: 1px solid ${color.greysmoke} !important;
  border-radius: 3px;
  :hover {
    color: #ffffff !important;
    background: black;
    border: 1px solid black !important;
    border-radius: 3px;
  }
`;
