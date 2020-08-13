import React, { useEffect, useState } from "react";
import "./TripsDetail.scss";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTrip, changeParticipant } from "../store/oneTrip/actions";
import { selectTripData } from "../store/oneTrip/selectors";
import { selectUser } from "../store/user/selectors";

export default function TripsDetail() {
  const { tripId } = useParams();
  const id = parseInt(tripId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneTrip(id));
  }, [dispatch, id]);

  const tripData = useSelector(selectTripData);
  const user = useSelector(selectUser);

  const joinOrUnjoin = () => {
    dispatch(changeParticipant(id, user));
  };

  if (!tripData) {
    return <h1></h1>;
  }

  const alreadyParticipant = tripData.participants.find((participant) => {
    return user.id === participant.id;
  });

  return (
    <div>
      {" "}
      <h1>{tripData.item.title}</h1>{" "}
      <div className="tripContainer">
        <div className="tripDetailContainer">
          <p>
            <span className="tripBar">Location</span>
            <br /> {tripData.item.locationCity} (
            {tripData.item.locationProvince})
          </p>
          <p>
            <span className="tripBar">Organizer</span>
            <br /> {tripData.organizer.firstName} {tripData.organizer.lastName}
          </p>
          <p>
            <span className="tripBar">When</span>
            <br /> {moment(tripData.item.date).format(
              "dddd, MMMM Do YYYY"
            )}{" "}
            {tripData.item.startingTime}h
          </p>
          <p>
            <span className="tripBar">Length of trip</span> <br />
            {tripData.item.lengthKM}km
          </p>
          <p>
            <span className="tripBar">Intended for</span>
            <br /> {tripData.item.typeBike}, {tripData.item.tempo} tempo
          </p>
          <p>
            <span className="tripBar">Description</span>
            <br /> {tripData.item.description}
          </p>
          <p>
            <span className="tripBar">Participants </span>
          </p>
          <br />{" "}
          {tripData.participants.map((participant) => {
            return (
              <div key={Math.random()}>
                <p className="tripParticipant">
                  {participant.firstName} {participant.lastName}
                  <span className="hiddenAboutMe">
                    <strong>About {participant.firstName}:</strong>
                    <i> {participant.aboutMe}</i>
                  </span>
                </p>
              </div>
            );
          })}
          {tripData.organizer.id === user.id ? (
            <div></div>
          ) : (
            <div className="joinTripButton">
              <button onClick={joinOrUnjoin}>
                {alreadyParticipant ? "Unjoin trip" : "Join this trip!"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
