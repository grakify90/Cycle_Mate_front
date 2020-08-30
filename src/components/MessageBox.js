import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectMessage } from "../store/appState/selectors";
import { Alert } from "react-bootstrap";
import { clearMessage } from "../store/appState/actions";

export default function MessageBox() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const showMessage = message !== null;
  if (!showMessage) return null;

  const messageColor = (type) => {
    if (type === "danger") {
      return "#cf000f";
    } else {
      return "#009944";
    }
  };
  const variant = message.variant;

  return (
    <Alert
      style={{ backgroundColor: messageColor(variant) }}
      show={showMessage}
      dismissible={message.dismissable}
      onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
    >
      {message.text}
    </Alert>
  );
}
