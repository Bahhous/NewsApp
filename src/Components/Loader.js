import React from "react";
import { Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        position: "relative",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
