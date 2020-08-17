import React from "react";
import { CardContainer, CardCircle } from "../styles/CardStyles";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";

export default function MyTripCard(props) {
  return (
    <CardContainer>
      <CardCircle>
        <p>{props.date}</p>
        <p>{props.startingTime}</p>
      </CardCircle>
      <div>
        {" "}
        <h3>{props.title}</h3>
        <p>
          {props.locationCity} ({props.locationProvince}) {props.lengthKM}km
        </p>
      </div>
      <Link to={`/detail/${props.id}`}>
        <Button>See details</Button>
      </Link>
    </CardContainer>
  );
}
