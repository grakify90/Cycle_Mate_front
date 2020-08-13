import React, { useState, useEffect } from "react";
import { signUp } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./SignUp.scss";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token !== null) {
      history.push("/");
    }
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(
      signUp(firstName, lastName, email, password, aboutMe, gender, dateOfBirth)
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
    <div>
      <form>
        <h1>Sign Up</h1>
        <div className="formContainer">
          <div className="formItemContainer">
            <label className="logtripBar">First name</label>
            <input
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              type="text"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Last name</label>
            <input
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              type="text"
              placeholder="Your first name"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Email address</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">About Me</label>
            <textarea
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              placeholder="Tell something about yourself"
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
          <button onClick={submitForm}>Join Cycle Mate!</button>
        </div>
      </form>
    </div>
  );
}
