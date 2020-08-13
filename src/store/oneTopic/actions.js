import { apiUrl } from "../../config/constants";
import axios from "axios";

export const FETCHED_ONE_TOPIC = "FETCHED_ONE_TOPIC";
export const START_LOADING = "START_LOADING";
export const ADD_REPLY = "ADD_REPLY";

export const fetchOne = (topic, topicstarter, replies) => {
  return {
    type: FETCHED_ONE_TOPIC,
    payload: {
      topic: topic,
      topicstarter: topicstarter,
      replies: replies,
    },
  };
};

export const addNewReply = (reply) => {
  return {
    type: ADD_REPLY,
    payload: reply,
  };
};

export function startLoading() {
  return {
    type: START_LOADING,
  };
}

export function fetchOneTopic(topicId) {
  return async function thunk(dispatch) {
    try {
      dispatch(startLoading());
      const data = await axios.get(`${apiUrl}/topics/${topicId}`);
      const topic = data.data;
      dispatch(fetchOne(topic, topic.user, topic.replies));
    } catch (error) {
      console.log(error.message);
    }
  };
}

//Make this work
export function addReply(tripId) {
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
      dispatch(addNewReply(data.data));
    } catch (error) {
      console.log(error.message);
    }
  };
}
