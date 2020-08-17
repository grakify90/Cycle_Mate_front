import React from "react";
import { NavBarContainer, NavBarItem } from "./NavBar.Styles";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function NavBar() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      {loginLogoutControls}
      <NavBarContainer>
        <NavBarItem activeClassName="activeLink" exact to="/">
          Home
        </NavBarItem>
        <NavBarItem activeClassName="activeLink" to="/agenda">
          Agenda
        </NavBarItem>
        <NavBarItem activeClassName="activeLink" to="/community">
          Community
        </NavBarItem>
      </NavBarContainer>
    </>
  );
}
