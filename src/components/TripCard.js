import React from "react";
import { Link } from "react-router-dom";
import { PurpleButton } from "../styles/Button";

export default function TripCard(props) {
  return (
    <div className="container">
      <div className="tripsdate">
        <p>{props.date}</p>
        <p>{props.startingTime}</p>
      </div>
      <div className="innerContainer1">
        {" "}
        <h3>{props.title}</h3>
        <p>
          {props.locationCity} ({props.locationProvince}) {props.lengthKM}km
        </p>
        <p>
          Capacity: {props.participantLength}/{props.numPeopleAllowed}
        </p>
      </div>
      <Link to={`/detail/${props.id}`}>
        <PurpleButton>See details</PurpleButton>
      </Link>
    </div>
  );
}
