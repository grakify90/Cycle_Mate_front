import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyTripCard from "../components/MyTripCard";
import { fetchTripsUser } from "../store/trips/actions";
import {
  selectSpecificUserTrips,
  selectTripsLoading,
} from "../store/trips/selectors";
import { selectToken } from "../store/user/selectors";

import { Container } from "../styles/Container";

export default function MyAgenda() {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [token, history]);

  useEffect(() => {
    dispatch(fetchTripsUser());
  }, [dispatch]);

  const userTrips = useSelector(selectSpecificUserTrips);
  const isLoading = useSelector(selectTripsLoading);

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <h1>My Agenda</h1>
      {userTrips.map((trip, index) => {
        return (
          <MyTripCard
            key={index}
            id={trip.id}
            title={trip.title}
            date={trip.date}
            startingTime={trip.startingTime}
            locationCity={trip.locationCity}
            locationProvince={trip.locationProvince}
            lengthKM={trip.lengthKM}
            numPeopleAllowed={trip.numPeopleAllowed}
          />
        );
      })}
    </Container>
  );
}
