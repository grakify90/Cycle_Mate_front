import React, { useState, useEffect } from "react";
import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { FormContainer } from "../styles/FormContainer";
import { InnerFormContainer } from "../styles/InnerFormContainer";
import { login } from "../store/user/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

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

    history.push("/");
  }

  return (
    <div>
      <form>
        <h1>Login</h1>
        <FormContainer>
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
        </FormContainer>

        <div>
          <Button onClick={submitForm}>Log in</Button>
        </div>
        <Link to="/signup" style={{ textDecoration: "none", color: "#c3aed6" }}>
          Click here to sign up
        </Link>
      </form>
    </div>
  );
}
