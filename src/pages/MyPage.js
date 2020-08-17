import React from "react";
import Home from "./Home";
import { Button } from "../styles/Button";
import { Container } from "../styles/Container";
import { DetailContainer } from "../styles/DetailContainer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectToken } from "../store/user/selectors";

export default function MyPage() {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  if (token) {
    return (
      <Container>
        <DetailContainer
          primary
          style={{
            display: "grid",
            color: "#ffffff",
            borderRadius: "5px",
            padding: "2vw",
          }}
        >
          <h1>{user.firstName}'s Cycle Mate</h1>
          <Link to="/manageaccount">
            <Button style={{ margin: "20px auto" }}>Manage my account</Button>
          </Link>
          <Link to="/addtrip">
            <Button style={{ margin: "20px auto" }}>Organize a new trip</Button>
          </Link>
          <Link to="/myagenda">
            <Button style={{ margin: "20px auto" }}>My cycle agenda</Button>
          </Link>
        </DetailContainer>
      </Container>
    );
  }
  return <Home />;
}
