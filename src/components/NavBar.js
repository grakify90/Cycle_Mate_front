import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./NavBar.scss";

export default function NavBar() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      {loginLogoutControls}
      <div className="navbarContainer">
        <NavLink
          className="navbarItem"
          activeClassName="activeLink"
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="navbarItem"
          activeClassName="activeLink"
          to="/agenda"
        >
          Agenda
        </NavLink>
      </div>
    </>
  );
}
