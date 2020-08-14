import React from "react";
import "./MyPage.scss";
import Home from "./Home";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";

export default function Reply(props) {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  if (token) {
    return (
      <div className="mypageContainer">
        <div className="mypageDetailContainer">
          <h1>{user.firstName}'s Cycle Mate</h1>
          <Link to="/manageaccount">
            <button className="actionButton">Manage my account</button>
          </Link>
          <Link to="/addtrip">
            <button className="actionButton">Organize a new trip</button>
          </Link>
          <Link to="/myagenda">
            <button className="actionButton">My cycle agenda</button>
          </Link>
        </div>
      </div>
    );
  }
  return <Home />;
}
