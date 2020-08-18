import React, { useEffect } from "react";
import { DetailContainer } from "../styles/DetailContainer";
import { Button } from "../styles/Button";
import { InnerDetailContainer } from "../styles/InnerDetailContainer";
import { TitleBlock } from "../styles/TitleBlock";
import { Participant, HiddenAboutMe } from "./TripsDetail.Styles";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneTrip, changeParticipant } from "../store/oneTrip/actions";
import { selectTripData } from "../store/oneTrip/selectors";
import { selectUser, selectToken } from "../store/user/selectors";
import ReactMapboxGl, { Layer, Marker } from "react-mapbox-gl";

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

  const accessToken =
    "pk.eyJ1IjoiaGVsbG9rbHZlIiwiYSI6ImNrZHlwazkxYTNkc2kycnRhZnQxc2FvM3oifQ.X3DrrVAEgxtRpcO9kbYD_w";

  const Map = ReactMapboxGl({
    accessToken,
  });

  const alreadyParticipant = tripData.participants.find((participant) => {
    return user.id === participant.id;
  });

  function age(birthDateString) {
    var now = moment();
    var birthDate = moment(birthDateString, "YYYY-MM-DD");
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

  const coordinate = [tripData.longitude, tripData.latitude];

  return (
    <div>
      <h1>{tripData.item.title}</h1>{" "}
      <DetailContainer>
        <InnerDetailContainer>
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
              {tripData.participants.participantLength ===
              tripData.participants.numPeopleAllowed
                ? "(FULL)"
                : `${tripData.participants.participantLength} / ${tripData.participants.numPeopleAllowed}`}
            </TitleBlock>
          </p>
          Average age:{" "}
          {parseInt(agesParticipantsTotal / tripData.participants.length)}
          <br />
          Percentage: male(
          {parseInt(
            (participantsMale.length / tripData.participants.length) * 100
          )}
          ) female(
          {parseInt(
            (participantsFemale.length / tripData.participants.length) * 100
          )}
          ) other(
          {parseInt(
            (participantsOther.length / tripData.participants.length) * 100
          )}
          )
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
