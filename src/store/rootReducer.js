import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import trips from "./trips/reducer";

export default combineReducers({
  appState,
  user,
  trips,
});
