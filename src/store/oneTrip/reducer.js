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
  latitude: 0,
  longitude: 0,
  precise: false,
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
        latitude: trip.latitude,
        longitude: trip.longitude,
        precise: trip.precise,
        locationDetails: trip.locationDetails,
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
      console.log(action.payload);
      const newArray = state.participants.filter((participant) => {
        return participant.id !== action.payload.id;
      });
      console.log(newArray);

      return {
        ...state,
        participants: [...newArray],
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
