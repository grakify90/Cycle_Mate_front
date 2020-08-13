import React from "react";
import "./MyPage.scss";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

export default function Reply(props) {
  const user = useSelector(selectUser);
  return (
    <div className="mypageContainer">
      <div className="mypageDetailContainer">
        <h1>{user.firstName}'s Cycle Mate</h1>
        <button className="actionButton">Manage my account</button>
        <button className="actionButton">Organize a new trip</button>
        <button className="actionButton">My cycle agenda</button>
      </div>
    </div>
  );
}
