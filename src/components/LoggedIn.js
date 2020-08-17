import React from "react";
import { NavButton } from "./NavBar.Styles";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <>
      <NavButton onClick={() => dispatch(logOut())}>Log out</NavButton>
      <Link to="/mypage">
        <NavButton>My Page</NavButton>
      </Link>
    </>
  );
}
