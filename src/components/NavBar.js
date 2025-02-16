import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import "../styles/Navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
        <Container className="d-flex justify-content-start">
          <Navbar.Brand href="#">Tahlia Houston</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="intro" smooth={true} duration={500}>Home</Nav.Link>
              <Nav.Link as={Link} to="about" smooth={true} duration={500}>About</Nav.Link>
              <Nav.Link as={Link} to="experience" smooth={true} duration={500}>Experience</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;