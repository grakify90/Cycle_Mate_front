import React, { useEffect } from "react";
import "./Trips.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../store/trips/actions";
import { selectTrips, selectTripsLoading } from "../store/trips/selectors";
import TripCard from "../components/TripCard";

export default function Trips() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);
  const isLoading = useSelector(selectTripsLoading);

  if (isLoading) {
    return null;
  }

  return (
    <div className="tripsContainer">
      {allTrips.map((trip, index) => {
        return (
          <TripCard
            key={index}
            id={trip.id}
            title={trip.title}
            date={trip.date}
            startingTime={trip.startingTime}
            locationCity={trip.locationCity}
            locationProvince={trip.locationProvince}
            lengthKM={trip.lengthKM}
            participantLength={trip.participant.length}
            numPeopleAllowed={trip.numPeopleAllowed}
          />
        );
      })}
    </div>
  );
}
