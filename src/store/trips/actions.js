import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCHED_TRIPS = "FETCHED_TRIPS";
export const START_LOADING = "START_LOADING";
export const ADD_TRIP = "ADD_TRIP";

export const fetchAllTrips = (trips) => {
  return {
    type: FETCHED_TRIPS,
    payload: trips,
  };
};

export const addNewTrip = (trip) => {
  return {
    type: ADD_TRIP,
    payload: trip,
  };
};

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function addTrip(newTrip) {
  return async function thunk(dispatch) {
    console.log(newTrip);
    try {
      const {
        title,
        locationCity,
        locationProvince,
        date,
        startingTime,
        lengthKM,
        numPeopleAllowed,
        typeBike,
        tempo,
        description,
      } = newTrip;
      dispatch(startLoading());
      const token = localStorage.getItem("token");
      const data = await axios.post(
        `${apiUrl}/trips`,
        {
          title,
          locationCity,
          locationProvince,
          date,
          startingTime,
          lengthKM,
          numPeopleAllowed,
          typeBike,
          tempo,
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      console.log(data.data);
      dispatch(addNewTrip(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function fetchTrips() {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const data = await axios.get(`${apiUrl}/trips`);
      dispatch(fetchAllTrips(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
