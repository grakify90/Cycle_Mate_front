import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton, NavBarItem } from "./NavBar.Styles";

export default function LoggedOut() {
  return (
    <>
      <NavBarItem activeClassName="activeLink" to="/mypage">
        My Page
      </NavBarItem>
      <NavLink to="/login">
        <NavButton>Log in</NavButton>
      </NavLink>
    </>
  );
}
