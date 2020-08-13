import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../store/user/actions";
import { Link } from "react-router-dom";

export default function LoggedIn() {
  const dispatch = useDispatch();
  return (
    <>
      <button className="logButton" onClick={() => dispatch(logOut())}>
        Log out
      </button>
      <Link to="/mypage">
        <button className="logButton">My Page</button>
      </Link>
    </>
  );
}
