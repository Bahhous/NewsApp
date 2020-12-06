import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { PUBLIC_ROUTE } from "../route.constants";
import { Link } from "react-router-dom";

export default function NaBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link style={{ color: "#fff" }} to={PUBLIC_ROUTE.LANDING}>
            News APP
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="nav-link" to={PUBLIC_ROUTE.TOP_HEADLINES}>
            Top headlines
          </Link>
          <Link className="nav-link" to={PUBLIC_ROUTE.CUSTOM}>
            Custom
          </Link>
          <Link className="nav-link" to={PUBLIC_ROUTE.PROFILE}>
            Profile
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}
