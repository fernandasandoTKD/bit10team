import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../img/logo1.png";
import './css/navbar.css';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav">
            <Nav.Link href="/Home" className="nav-link">HOME</Nav.Link>
            <Navbar.Brand href="/">
              <img src={logo} alt="Logo" height="70" className="d-inline-block align-top"/>
            </Navbar.Brand>
            <Nav.Link href="/Nosotros" className="nav-link">NOSOTROS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
