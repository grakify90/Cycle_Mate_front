import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton } from "./NavBar.Styles";
import color from "../styles/_colors";

export default function LoggedOut() {
  return (
    <div style={{ backgroundColor: `${color.whitesmoke}` }}>
      <NavLink to="/login">
        <NavButton>Log in</NavButton>
      </NavLink>
    </div>
  );
}
