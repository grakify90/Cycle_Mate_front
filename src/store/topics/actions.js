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

export const addNewTopic = (topic) => {
  return {
    type: ADD_TOPIC,
    payload: topic,
  };
};

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function addTopic(newTopic) {
  return async function thunk(dispatch) {
    try {
      const { title, content, imageUrl } = newTopic;
      dispatch(startLoading());
      const token = localStorage.getItem("token");
      const data = await axios.post(
        `${apiUrl}/topics`,
        { title: title, content: content, imageUrl: imageUrl },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(data.data);
      dispatch(addNewTopic(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}

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
