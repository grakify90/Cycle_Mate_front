import React from "react";
import { NavButton } from "./NavBar.Styles";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <div>
      <NavButton onClick={() => dispatch(logOut())}>Log out</NavButton>
    </div>
  );
}
