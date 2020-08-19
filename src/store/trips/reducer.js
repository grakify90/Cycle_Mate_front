import {
  FETCHED_TRIPS,
  FETCHED_PERSONAL_TRIPS,
  START_LOADING,
  ADD_TRIP,
} from "./actions";

const initialState = {
  loading: false,
  items: [],
  personalitems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TRIPS: {
      return {
        ...state,
        items: [...state.items, ...action.payload],
        loading: false,
      };
    }
    case FETCHED_PERSONAL_TRIPS: {
      return {
        ...state,
        personalitems: action.payload,
        loading: false,
      };
    }
    case ADD_TRIP: {
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
