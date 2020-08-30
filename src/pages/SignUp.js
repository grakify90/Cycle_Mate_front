import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import moment from "moment";

import { Container } from "../styles/Container";
import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { FormContainer } from "../styles/FormContainer";
import { InnerFormContainer } from "../styles/InnerFormContainer";

export default function SignUp() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  function submitForm(event) {
    event.preventDefault();

    const date = moment(dateOfBirth).format("DD-MM-YYYY");
    dispatch(
      signUp(firstName, lastName, email, password, aboutMe, gender, date)
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setAboutMe("");
    setGender("");
    setDateOfBirth("");
  }

  return (
    <Container>
      <form>
        <h1>Sign Up</h1>
        <FormContainer>
          <InnerFormContainer>
            <TitleBlock>First name</TitleBlock>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder="Your first name"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Last name</TitleBlock>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder="Your last name"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Email address</TitleBlock>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Password</TitleBlock>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>About Me</TitleBlock>
            <textarea
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              placeholder="Tell something about yourself"
              required
            />
          </InnerFormContainer>{" "}
          <InnerFormContainer>
            <TitleBlock>Gender</TitleBlock>
            <div className="radioButton">
              {" "}
              <input type="radio" onChange={() => setGender("m")} />
              <label>Male</label>
              <input type="radio" onChange={() => setGender("f")} />
              <label>Female</label>
              <input type="radio" onChange={() => setGender("o")} />
              <label>Other</label>
            </div>
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Date of Birth</TitleBlock>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </InnerFormContainer>
        </FormContainer>

        <div>
          <Button primary onClick={submitForm}>
            Join Cycle Mate!
          </Button>
        </div>
      </form>
    </Container>
  );
}
