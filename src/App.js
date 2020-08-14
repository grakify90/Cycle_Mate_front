import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Trips from "./pages/Trips";
import TripsDetail from "./pages/TripsDetail";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import AddTopic from "./pages/AddTopic";
import ManageAccount from "./pages/ManageAccount";

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
      {isLoading ? <h1>Loading...</h1> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agenda" component={Trips} />
        <Route path="/detail/:tripId" component={TripsDetail} />
        <Route path="/community" component={Community} />
        <Route path="/topic/:topicId" component={CommunityDetail} />
        <Route path="/addtopic" component={AddTopic} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/manageaccount" component={ManageAccount} />
      </Switch>
    </div>
  );
}

export default App;
