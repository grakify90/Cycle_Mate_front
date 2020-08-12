import React from "react";
import { NavLink } from "react-router-dom";

export default function LoggedOut() {
  return (
    <>
      <NavLink to="/login">Log in</NavLink>
    </>
  );
}
