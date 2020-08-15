import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: null,
  lastName: null,
  email: null,
  aboutMe: null,
  gender: null,
  dateOfBirth: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const {
        token,
        firstName,
        lastName,
        email,
        aboutMe,
        gender,
        dateOfBirth,
      } = action.payload;
      localStorage.setItem("token", token);
      return {
        ...state,
        firstName: firstName,
        lastName: lastName,
        email: email,
        aboutMe: aboutMe,
        gender: gender,
        dateOfBirth: dateOfBirth,
      };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
