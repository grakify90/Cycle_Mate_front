import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCHED_TRIPS = "FETCHED_TRIPS";
export const FETCHED_PERSONAL_TRIPS = "FETCHED_PERSONAL_TRIPS";
export const START_LOADING = "START_LOADING";
export const ADD_TRIP = "ADD_TRIP";

const compare = (a, b) => {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
};

export const fetchAllTrips = (trips) => {
  return {
    type: FETCHED_TRIPS,
    payload: trips,
  };
};

export const fetchPersonalTrips = (trips) => {
  return {
    type: FETCHED_PERSONAL_TRIPS,
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
        streetName,
        streetNumber,
        postalCode,
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
          streetName,
          streetNumber,
          postalCode,
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
      dispatch(addNewTrip(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function fetchTrips() {
  return async function thunk(dispatch, getState) {
    try {
      dispatch(startLoading());
      const state = getState();
      const tripCount = state.trips.items.length;
      console.log(tripCount);
      const data = await axios.get(
        `${apiUrl}/trips?offset=${tripCount}&limit=5`
      );
      dispatch(fetchAllTrips(data.data.rows));
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function fetchTripsUser() {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const token = localStorage.getItem("token");
      const data = await axios.get(`${apiUrl}/trips/oneuser`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const dataSortedByNewestFirst = data.data.sort(compare);
      dispatch(fetchPersonalTrips(dataSortedByNewestFirst));
    } catch (error) {
      console.log(error.message);
    }
  };
}
