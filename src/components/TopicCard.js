import React from "react";
import "./TopicCard.scss";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";

export default function TopicCard(props) {
  return (
    <div className="container" key={Math.random()}>
      <div className="topicsdate">
        <p>
          {props.lengthReplies}{" "}
          {props.lengthReplies === 1 ? "reply" : "replies"}
        </p>
      </div>
      <div className="innerContainer1">
        {" "}
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <Link className="tripButton" to={`/topic/${props.id}`}>
        <Button>View topic</Button>
      </Link>
    </div>
  );
}
