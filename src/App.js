import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./styles/_GlobalStyle";

import NavBar from "./components/NavBar";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Trips from "./pages/Trips";
import TripsDetail from "./pages/TripsDetail";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import AddTopic from "./pages/AddTopic";
import AddTrip from "./pages/AddTrip";
import ManageAccount from "./pages/ManageAccount";
import MyAgenda from "./pages/MyAgenda";

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
      <Normalize />
      <GlobalStyle />
      <NavBar />
      <MessageBox />
      {isLoading ? <h1>Loading...</h1> : null}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/agenda" component={Trips} />
        <Route path="/detail/:tripId" component={TripsDetail} />
        <Route path="/addtrip" component={AddTrip} />
        <Route path="/community" component={Community} />
        <Route path="/topic/:topicId" component={CommunityDetail} />
        <Route path="/addtopic" component={AddTopic} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/manageaccount" component={ManageAccount} />
        <Route path="/myagenda" component={MyAgenda} />
      </Switch>
    </div>
  );
}

export default App;
