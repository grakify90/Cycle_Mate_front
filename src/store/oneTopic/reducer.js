import { FETCHED_ONE_TOPIC, START_LOADING, ADD_REPLY } from "./actions";

const initialState = {
  loading: false,
  item: {},
  topicstarter: {},
  replies: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_ONE_TOPIC: {
      const { topic, replies, topicstarter } = action.payload;
      return {
        ...state,
        item: topic,
        replies: replies,
        topicstarter: topicstarter,
        loading: false,
      };
    }

    case ADD_REPLY: {
      return {
        ...state,
        replies: [...state.replies, action.payload],
      };
    }
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
