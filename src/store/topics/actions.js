import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCHED_TOPICS = "FETCHED_TOPICS";
export const START_LOADING = "START_LOADING";
export const ADD_TOPIC = "ADD_TOPIC";

export const fetchAllTopics = (topics) => {
  return {
    type: FETCHED_TOPICS,
    payload: topics,
  };
};

export const addNewTopic = (trip) => {
  return {
    type: ADD_TOPIC,
    payload: trip,
  };
};

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

// export function addTopic(newTopic) {
//   return async function thunk(dispatch) {
//     try {
//       dispatch(startLoading());
//       const { title, minBid, imageUrl } = newTopic;
//       const token = localStorage.getItem("token");
//       const tripFromAPI = await axios.post(
//         `${apiUrl}/trips`,
//         { title, minBid, imageUrl },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       dispatch(addNewTopic(tripFromAPI.data));
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// }

export function fetchTopics() {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const data = await axios.get(`${apiUrl}/topics`);
      dispatch(fetchAllTopics(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
