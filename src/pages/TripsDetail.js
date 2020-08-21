import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
//Library to display MapBox
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";
import { fetchOneTrip, changeParticipant } from "../store/oneTrip/actions";
import { selectTripData } from "../store/oneTrip/selectors";
import { selectUser, selectToken } from "../store/user/selectors";

import { DetailContainer } from "../styles/DetailContainer";
import { Button } from "../styles/Button";
import { InnerDetailContainer } from "../styles/InnerDetailContainer";
import { TitleBlock } from "../styles/TitleBlock";
import { Participant, HiddenAboutMe } from "./TripsDetail.Styles";

export default function TripsDetail() {
  const { tripId } = useParams();
  const id = parseInt(tripId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneTrip(id));
  }, [dispatch, id]);

  const tripData = useSelector(selectTripData);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const joinOrUnjoin = () => {
    dispatch(changeParticipant(id));
  };

  if (!tripData) {
    return null;
  }

  //Necessary data to display MapBox map
  // const accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

  //Netlify local variable doesn't work so
  const accessToken =
    "pk.eyJ1IjoiaGVsbG9rbHZlIiwiYSI6ImNrZHlwazkxYTNkc2kycnRhZnQxc2FvM3oifQ.X3DrrVAEgxtRpcO9kbYD_w";
  const Map = ReactMapboxGl({
    accessToken,
  });
  const coordinate = [tripData.longitude, tripData.latitude];

  //Check if user is already a participant to find out whether to dipslay "join" or "unjoin" on button
  const alreadyParticipant = tripData.participants.find((participant) => {
    return user.id === participant.id;
  });

  //Necessary data handling to display stats about average age and gender ratio of trip
  function age(birthDateString) {
    var now = moment();
    var birthDate = moment(birthDateString, "DD-MM-YYYY");
    var yearDiff = moment.duration(now - birthDate).as("years");
    return Math.floor(yearDiff);
  }

  const participantsAgesArray = tripData.participants.map((participant) => {
    return age(participant.dateOfBirth);
  });
  const agesParticipantsTotal = participantsAgesArray.reduce(
    (total, next) => total + next,
    0
  );

  const participantsMale = tripData.participants.filter((participant) => {
    return participant.gender === "m";
  });
  const participantsFemale = tripData.participants.filter((participant) => {
    return participant.gender === "f";
  });
  const participantsOther = tripData.participants.filter((participant) => {
    return participant.gender === "o";
  });

  return (
    <div>
      <DetailContainer>
        <InnerDetailContainer>
          <h1>{tripData.item.title}</h1>{" "}
          <div>
            <TitleBlock>Location</TitleBlock>
            <br />{" "}
            <p>
              {tripData.locationDetails
                ? tripData.locationDetails
                : `${tripData.item.locationCity}, ${tripData.item.locationProvince}`}
            </p>
            {tripData.latitude !== 0 && (
              <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                  height: "40vh",
                  width: "100%",
                }}
                center={coordinate}
              >
                {tripData.item.precise ? (
                  <Layer
                    type="circle"
                    id="marker"
                    paint={{
                      "circle-color": "#ff5200",
                      "circle-stroke-width": 2,
                      "circle-stroke-color": "#fff",
                      "circle-stroke-opacity": 1,
                    }}
                  >
                    <Marker coordinates={coordinate} />
                  </Layer>
                ) : (
                  <Layer>
                    <Marker coordinates={coordinate} />
                  </Layer>
                )}
              </Map>
            )}
          </div>
          <p>
            <TitleBlock>Organizer</TitleBlock>
            <br /> {tripData.organizer.firstName} {tripData.organizer.lastName}
          </p>
          <p>
            <TitleBlock>When</TitleBlock>
            <br /> {moment(tripData.item.date).format(
              "dddd, MMMM Do YYYY"
            )}{" "}
            {tripData.item.startingTime}h
          </p>
          <p>
            <TitleBlock>Length of trip</TitleBlock> <br />
            {tripData.item.lengthKM}km
          </p>
          <p>
            <TitleBlock>Intended for</TitleBlock>
            <br /> {tripData.item.typeBike}, {tripData.item.tempo} tempo
          </p>
          <p>
            <TitleBlock>Description</TitleBlock>
            <br /> {tripData.item.description}
          </p>
          <p>
            <TitleBlock>
              Participants{" "}
              {tripData.participants.length === tripData.item.numPeopleAllowed
                ? "(FULL)"
                : `${tripData.participants.length} / ${tripData.item.numPeopleAllowed}`}
            </TitleBlock>
          </p>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            Average age:{" "}
            {parseInt(agesParticipantsTotal / tripData.participants.length)}
          </span>
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: `${parseInt(
                (participantsMale.length / tripData.participants.length) * 100
              )}% ${parseInt(
                (participantsFemale.length / tripData.participants.length) * 100
              )}% ${parseInt(
                (participantsOther.length / tripData.participants.length) * 100
              )}%`,
            }}
          >
            <span style={{ backgroundColor: "green" }}>
              {parseInt(
                (participantsMale.length / tripData.participants.length) * 100
              ) > 0
                ? "Male"
                : ""}
            </span>
            <span style={{ backgroundColor: "hotpink" }}>
              {parseInt(
                (participantsFemale.length / tripData.participants.length) * 100
              ) > 0
                ? "Female"
                : ""}
            </span>
            <span style={{ backgroundColor: "purple" }}>
              {parseInt(
                (participantsOther.length / tripData.participants.length) * 100
              ) > 0
                ? "Other"
                : ""}
            </span>
          </div>
          {tripData.participants.map((participant) => {
            return (
              <div key={Math.random()}>
                <Participant>
                  {participant.firstName} {participant.lastName}
                  <HiddenAboutMe>
                    <strong>About {participant.firstName}:</strong>
                    <i> {participant.aboutMe}</i>
                  </HiddenAboutMe>
                </Participant>
              </div>
            );
          })}
          {token === null ||
          tripData.organizer.id === user.id ||
          tripData.participants.length === tripData.item.numPeopleAllowed ? (
            <div></div>
          ) : (
            <Button onClick={joinOrUnjoin}>
              {alreadyParticipant ? "Unjoin trip" : "Join this trip!"}
            </Button>
          )}
        </InnerDetailContainer>
      </DetailContainer>
    </div>
  );
}
