import React from "react";
import { ReplyContainer } from "./Reply.Styles";
import moment from "moment";

export default function Reply(props) {
  return (
    <ReplyContainer>
      <h3>
        <strong>
          {props.replierFirstName} {props.replierLastName} at{" "}
          {moment(props.time).format("D MMM YYYY, HH:mm")}:
        </strong>
      </h3>
      <p>{props.content}</p>
      <img src={props.imageUrl} alt="" />
    </ReplyContainer>
  );
}
