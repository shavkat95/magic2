import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBarScroll() {
  /* console.log(searchQuery); */

  function mySubmitFunction(e) {
    // e.preventDefault();
    // setSearchQuery(e.target.value);

    // navigate to /:search
    window.location.href='/search/'+e.target.value;
    return true;
  }

  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand className="brand_name" href="/">
          <h2>
            MAGICAL
            <br />
            PLACES
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Contact" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item href="/contact">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contact">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about" disabled>
              Preview
            </Nav.Link>
          </Nav>
          {/* todo: on submit navigate to '/:search' */}
          <Form className="d-flex"
              onSubmit={mySubmitFunction}>
            <input
              type="text"
              placeholder="Search Country"
              className="me-2"
              aria-label="Search"
              // onSubmit={mySubmitFunction}
              onChange={(e) => {
                e.preventDefault();
                // setSearchQuery(e.target.value);
              }}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarScroll;
