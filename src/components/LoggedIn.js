import React from "react";
import { NavButton } from "./NavBar.Styles";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import color from "../styles/_colors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <div style={{ backgroundColor: `${color.whitesmoke}` }}>
      <NavButton onClick={() => dispatch(logOut())}>Log out</NavButton>
    </div>
  );
}
