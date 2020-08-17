import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import { CardContainer, CardCircle } from "../styles/CardStyles";

export default function TopicCard(props) {
  return (
    <CardContainer key={Math.random()}>
      <CardCircle primary>
        <p>
          {props.lengthReplies}{" "}
          {props.lengthReplies === 1 ? "reply" : "replies"}
        </p>
      </CardCircle>
      <div>
        {" "}
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <Link className="tripButton" to={`/topic/${props.id}`}>
        <Button primary>View topic</Button>
      </Link>
    </CardContainer>
  );
}
