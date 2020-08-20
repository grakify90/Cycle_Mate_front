import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 10vh;
  margin: 20px 20px;
  justify-content: space-between;

  // @media screen and (max-width: 600px) {
  //   width: 100vw;
  // }
  // @media screen and (min-width: 1200px) {
  //   width: 50vw;
  // }
`;

export const NavBarItem = styled(NavLink)`
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  text-transform: uppercase;
  font-size: 4.5vw;
  color: black;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;

  h1 {
    font-size: 70%;
    text-transform: none;
  }

  .activeLink {
    font-weight: bold;
    border-bottom: 2px double black;
  }

  :hover {
    font-weight: bold;
    border-bottom: 2px double black;
  }

  @media screen and (max-width: 600px) {
    font-size: 7vw;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3.6vw;
  }
`;

export const NavButton = styled.button`
  padding: 5px;
  font-weight: bold;
  font-family: Courier;
  background-color: #c0c0c0;
  margin: 5px 5px 0 5px;
  border: 1px solid white !important;
  border-radius: 3px;
  :hover {
    color: #ffffff !important;
    background: black;
    border: 1px solid #494949 !important;
    border-radius: 3px;
  }
`;
