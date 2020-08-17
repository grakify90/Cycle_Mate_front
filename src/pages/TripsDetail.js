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
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const accessToken =
  "pk.eyJ1IjoiaGVsbG9rbHZlIiwiYSI6ImNrZHlwazkxYTNkc2kycnRhZnQxc2FvM3oifQ.X3DrrVAEgxtRpcO9kbYD_w";

const Map = ReactMapboxGl({
  accessToken,
});

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

  const alreadyParticipant = tripData.participants.find((participant) => {
    return user.id === participant.id;
  });

  return (
    <div>
      {" "}
      <h1>{tripData.item.title}</h1>{" "}
      <DetailContainer>
        <InnerDetailContainer>
          <p>
            <TitleBlock>Location</TitleBlock>
            <br /> {tripData.item.locationCity} (
            {tripData.item.locationProvince})
            <a
              href={`http://www.google.com/maps/place/${tripData.item.latitude},${tripData.item.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Here
            </a>
          </p>
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
              Participants {tripData.participants.length}/
              {tripData.item.numPeopleAllowed}
            </TitleBlock>
          </p>
          <br />{" "}
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
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            containerStyle={{
              height: "45vw",
              width: "45vw",
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
            >
              <Feature
                coordinates={[tripData.item.longitude, tripData.item.latitude]}
              />
            </Layer>
          </Map>
        </InnerDetailContainer>
      </DetailContainer>
    </div>
  );
}
