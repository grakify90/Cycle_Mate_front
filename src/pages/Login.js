import React, { useState, useEffect } from "react";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import "./Login.scss";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <form>
        <h1>Login</h1>
        <div className="formContainer">
          <div className="formItemContainer">
            <label className="tripBar">Email address</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter email"
              required
            />
          </div>

          <div className="formItemContainer">
            <label className="tripBar">Password</label>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div>
          <button onClick={submitForm}>Log in</button>
        </div>
        <Link to="/signup" style={{ textDecoration: "none", color: "#c3aed6" }}>
          Click here to sign up
        </Link>
      </form>
    </div>
  );
}
