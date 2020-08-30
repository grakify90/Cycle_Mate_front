import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePersonalData } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { selectAppLoading } from "../store/appState/selectors";
import moment from "moment";

import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { FormContainer } from "../styles/FormContainer";
import { InnerFormContainer } from "../styles/InnerFormContainer";

export default function ManageAccount() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  const user = useSelector(selectUser);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  // const [password, setPassword] = useState(user.password);
  const [aboutMe, setAboutMe] = useState(user.aboutMe);
  const [gender, setGender] = useState(user.gender);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);

  function submitForm(event) {
    event.preventDefault();

    const date = moment(dateOfBirth).format("DD-MM-YYYY");

    dispatch(changePersonalData(firstName, lastName, aboutMe, gender, date));
  }

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <form>
        <h1>Manage my account</h1>
        <FormContainer>
          <InnerFormContainer>
            <TitleBlock>First name</TitleBlock>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder={firstName}
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Last name</TitleBlock>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder={lastName}
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>About Me</TitleBlock>
            <textarea
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              placeholder={aboutMe}
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
          <Button onClick={submitForm}>Change my data</Button>
        </div>
      </form>
    </div>
  );
}
