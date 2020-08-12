import React, { useEffect } from "react";
import "./Trips.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../store/trips/actions";
import { selectTrips, selectTripsLoading } from "../store/trips/selectors";

export default function Trips() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);
  const isLoading = useSelector(selectTripsLoading);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="tripsContainer">
      {allTrips.map((trip) => {
        return (
          <div className="container" key={Math.random()}>
            <div className="tripsdate">
              <p>{trip.date}</p>
              <p>{trip.startingTime}</p>
            </div>
            <div className="innerContainer1">
              {" "}
              <p>
                {trip.locationCity} ({trip.locationProvince}) {trip.lengthKM}km
              </p>
              <p>
                Capacity: {trip.participant.length}/{trip.numPeopleAllowed}
              </p>
            </div>
            <Link className="tripButton" to={`/detail/${trip.id}`}>
              <button>See details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
