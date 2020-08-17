import React, { useEffect, useState } from "react";
import { Container } from "../styles/Container";
import {
  FilterContainer,
  InnerFilterContainer,
  FilterBar,
  Slider,
} from "./Trips.Styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrips } from "../store/trips/actions";
import { selectTrips, selectTripsLoading } from "../store/trips/selectors";
import TripCard from "../components/TripCard";

export default function Trips() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ typeBike: "All", lengthKM: 130 });

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const allTrips = useSelector(selectTrips);
  const isLoading = useSelector(selectTripsLoading);

  if (isLoading) {
    return null;
  }

  const filterTrips =
    filter.typeBike === "All"
      ? allTrips.filter((trip) => {
          return trip.lengthKM <= filter.lengthKM;
        })
      : allTrips
          .filter((trip) => {
            return trip.typeBike === filter.typeBike;
          })
          .filter((trip) => {
            return trip.lengthKM <= filter.lengthKM;
          });

  return (
    <Container>
      <FilterContainer>
        <InnerFilterContainer>
          <FilterBar>Max. length {filter.lengthKM}km</FilterBar>
          <Slider
            onChange={(event) => {
              setFilter({ ...filter, lengthKM: parseInt(event.target.value) });
            }}
            type="range"
            min="0"
            max="130"
          ></Slider>
        </InnerFilterContainer>
        <InnerFilterContainer>
          <FilterBar>Type of bike:</FilterBar>

          <select
            value={filter.typeBike}
            onChange={(event) =>
              setFilter({ ...filter, typeBike: event.target.value })
            }
          >
            <option value="All">All</option>
            <option value="Road bike">Road bike</option>
            <option value="Mountainbike">Mountainbike</option>
            <option value="Touring">Touring</option>
          </select>
        </InnerFilterContainer>
        {/* <div>
          <label className="filtertripBar">Province:</label>

          <select
            value={filter.locationProvince}
            onChange={(event) =>
              setFilter({ ...filter, locationProvince: event.target.value })
            }
          >
            <option value="All">All</option>
            <option value="Zuid-Holland">Zuid-Holland</option>
            <option value="Noord-Holland">Noord-Holland</option>
            <option value="Noord-Brabant">Noord-Brabant</option>
            <option value="Gelderland">Gelderland</option>
            <option value="Utrecht">Utrecht</option>
            <option value="Overijssel">Overijssel</option>
            <option value="Limburg">Limburg</option>
            <option value="Friesland">Friesland</option>
            <option value="Groningen">Groningen</option>
            <option value="Drenthe">Drenthe</option>
            <option value="Flevoland">Flevoland</option>
            <option value="Zeeland">Zeeland</option>
          </select>
        </div> */}
      </FilterContainer>

      {filterTrips.map((trip, index) => {
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
    </Container>
  );
}
