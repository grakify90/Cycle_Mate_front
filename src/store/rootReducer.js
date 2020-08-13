import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import trips from "./trips/reducer";
import oneTrip from "./oneTrip/reducer";
import topics from "./topics/reducer";
import oneTopic from "./oneTopic/reducer";

export default combineReducers({
  appState,
  user,
  trips,
  oneTrip,
  topics,
  oneTopic,
});
