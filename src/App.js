import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Trips from "./pages/Trips";
import TripsDetail from "./pages/TripsDetail";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar />
      {isLoading ? "<div>Loading...</div>" : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agenda" component={Trips} />
        <Route path="/detail/:tripId" component={TripsDetail} />
        <Route path="/community" component={Community} />
        <Route path="/topic/:topicId" component={CommunityDetail} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
