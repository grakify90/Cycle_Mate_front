import React from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

import { NavBarContainer, NavBarItem, NavBarCycleMate } from "./NavBar.Styles";

export default function NavBar() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      {loginLogoutControls}
      <NavBarContainer>
        <NavBarCycleMate activeClassName="activeLink" exact to="/">
          <h1>Cycle Mate</h1>
        </NavBarCycleMate>
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
