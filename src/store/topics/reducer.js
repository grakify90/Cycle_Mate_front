import { FETCHED_TOPICS, START_LOADING, ADD_TOPIC } from "./actions";

const initialState = {
  loading: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TOPICS: {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case ADD_TOPIC: {
      return {
        ...state,
        items: [...state.items, action.payload],
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
