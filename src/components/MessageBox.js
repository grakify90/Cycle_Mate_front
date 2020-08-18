import React from "react";

export default function MessageBox(props) {
  return (
    <>
      <div style={{ color: "green" }}>
        <h3>{props.message}</h3>
      </div>
    </>
  );
}
