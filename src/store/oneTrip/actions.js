import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCHED_ONE_TRIP = "FETCHED_ONE_TRIP";
export const START_LOADING = "START_LOADING";
export const ADD_PARTICIPANT = "ADD_PARTICIPANT";

export const fetchOne = (trip, organizer, participants) => {
  return {
    type: FETCHED_ONE_TRIP,
    payload: { trip: trip, organizer: organizer, participants: participants },
  };
};

export const addNewParticipant = (participant) => {
  return {
    type: ADD_PARTICIPANT,
    payload: participant,
  };
};

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function fetchOneTrip(tripId) {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const data = await axios.get(`${apiUrl}/trips/${tripId}`);
      const trip = data.data;
      dispatch(fetchOne(trip, trip.owner, trip.participant));
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function addParticipant(tripId) {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const token = localStorage.getItem("token");
      const data = await axios.post(
        `${apiUrl}/participants/${tripId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data.data);
      dispatch(addNewParticipant(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
