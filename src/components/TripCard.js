import React from "react";
import { CardContainer, CardCircle } from "../styles/CardStyles";
import { Link } from "react-router-dom";
import { Button } from "../styles/Button";
import moment from "moment";

export default function TripCard(props) {
  const date = moment(props.date).format("DD-MM-YYYY");
  return (
    <CardContainer>
      <CardCircle>
        <p>{date}</p>
        <p>{props.startingTime}h</p>
      </CardCircle>
      <div>
        {" "}
        <h3>{props.title}</h3>
        <p>
          {props.locationCity} ({props.locationProvince}) {props.lengthKM}km
        </p>
        <p>
          Capacity:{" "}
          {props.participantLength === props.numPeopleAllowed
            ? "FULL"
            : `${props.participantLength} / ${props.numPeopleAllowed}`}
        </p>
      </div>
      <Link to={`/detail/${props.id}`}>
        <Button>See details</Button>
      </Link>
    </CardContainer>
  );
}
