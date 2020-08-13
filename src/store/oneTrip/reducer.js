import {
  FETCHED_ONE_TRIP,
  START_LOADING,
  ADD_PARTICIPANT,
  DELETE_PARTICIPANT,
} from "./actions";

const initialState = {
  loading: false,
  item: {},
  organizer: {},
  participants: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_ONE_TRIP: {
      const { trip, participants, organizer } = action.payload;
      return {
        ...state,
        item: trip,
        participants: participants,
        organizer: organizer,
        loading: false,
      };
    }
    case ADD_PARTICIPANT: {
      return {
        ...state,
        participants: [...state.participants, action.payload],
        loading: false,
      };
    }
    case DELETE_PARTICIPANT: {
      const newArray = state.participants;
      newArray.splice(action.payload);
      return {
        ...state,
        participants: newArray,
        loading: false,
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
