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
          <h1>Cycle Mate</h1>
        </NavBarItem>
        <NavBarItem activeClassName="activeLink" to="/agenda">
          Agenda
        </NavBarItem>
        <NavBarItem activeClassName="activeLink" to="/community">
          Community
        </NavBarItem>
        {token && (
          <NavBarItem activeClassName="activeLink" to="/mypage">
            My Page
          </NavBarItem>
        )}
      </NavBarContainer>
    </>
  );
}
