import React from "react";
import "./TripCard.scss";
import "./Reply.scss";
import moment from "moment";

export default function Reply(props) {
  return (
    <div className="replyContainer">
      <p>
        {props.replierFirstName} {props.replierLastName} at{" "}
        {moment(props.time).format("D MMM YYYY, HH:mm")}:
      </p>
      <p>{props.content}</p>
      <img src={props.imageUrl} />
    </div>
  );
}
