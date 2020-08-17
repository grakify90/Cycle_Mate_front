import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton } from "./NavBar.Styles";

export default function LoggedOut() {
  return (
    <>
      <NavLink to="/login">
        <NavButton>Log in</NavButton>
      </NavLink>
    </>
  );
}
