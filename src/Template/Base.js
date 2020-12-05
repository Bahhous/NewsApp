import React from "react";
import { Container } from "react-bootstrap";

export default function Base({ children }) {
  return <Container>{children}</Container>;
}
