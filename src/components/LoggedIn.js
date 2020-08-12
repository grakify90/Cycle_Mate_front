import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      {/* <div style={{ padding: ".5rem 1rem" }}>{user.email}</div> */}
      <button className="logButton" onClick={() => dispatch(logOut())}>
        Log out, {user.firstName}
      </button>
    </>
  );
}
