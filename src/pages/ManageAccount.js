import React, { useState } from "react";
import { changePersonalData } from "../store/user/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

export default function ManageAccount() {
  const user = useSelector(selectUser);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  // const [password, setPassword] = useState(user.password);
  const [aboutMe, setAboutMe] = useState(user.aboutMe);
  const [gender, setGender] = useState(user.gender);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      changePersonalData(
        firstName,
        lastName,
        email,
        aboutMe,
        gender,
        dateOfBirth
      )
    );
  }

  return (
    <div>
      <form>
        <h1>Manage my account</h1>
        <div className="formContainer">
          <div className="formItemContainer">
            <label className="logtripBar">First name</label>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder={firstName}
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Last name</label>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder={lastName}
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Email address</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder={email}
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">About Me</label>
            <textarea
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              placeholder={aboutMe}
              required
            />
          </div>{" "}
          <div className="formItemContainer">
            <label className="logtripBar">Gender</label>
            <div className="radioButton">
              {" "}
              <input type="radio" onChange={() => setGender("male")} />
              <label>Male</label>
              <input type="radio" onChange={() => setGender("female")} />
              <label>Female</label>
              <input type="radio" onChange={() => setGender("other")} />
              <label>Other</label>
            </div>
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Date of Birth</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
            />
          </div>
        </div>

        <div>
          <button onClick={submitForm}>Change my data</button>
        </div>
      </form>
    </div>
  );
}
