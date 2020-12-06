import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Base({ children }) {
  return (
    <Container>
      <NavBar />
      <div>{children}</div>
    </Container>
  );
}
