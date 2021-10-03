import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blogy</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts">
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/tags">
              Tags
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Vimesh Shah</a>
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
