import React from "react";
import "./TripCard.scss";
import "./Reply.scss";
import moment from "moment";

export default function Reply(props) {
  return (
    <div className="replyContainer">
      <h3>
        <strong>
          {props.replierFirstName} {props.replierLastName} at{" "}
          {moment(props.time).format("D MMM YYYY, HH:mm")}:
        </strong>
      </h3>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt="" />
    </div>
  );
}
