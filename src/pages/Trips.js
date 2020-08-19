import React, { useEffect, useState } from "react";
import { Container } from "../styles/Container";
import { Button } from "../styles/Button";
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
// import Pagination from "../components/Pagination";

export default function Trips() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({ typeBike: "All", lengthKM: 130 });

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const fetchMore = () => {
    dispatch(fetchTrips());
  };

  const allTrips = useSelector(selectTrips);
  const isLoading = useSelector(selectTripsLoading);

  // //pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(3);

  // //get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = allTrips.slice(indexOfFirstPost, indexOfLastPost);

  // //change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
      {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allTrips.length}
        paginate={paginate}
      /> */}
      <Button onClick={fetchMore}>More trips</Button>
    </Container>
  );
}
