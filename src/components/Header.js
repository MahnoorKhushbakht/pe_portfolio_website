import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';
import ProfileImage from '../images/ProfileImage.jpeg';
import './css/Header.css';

function Header() {

  const linkStyles = {
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Helvetica, Arial',
  };

  return (
    <Navbar
      expand="md"
      data-bs-theme="dark"
      fixed='top'
      variant="dark"
      className="header"
    >
      <Container>
      <Navbar.Brand href="#home">
          <img
            src={ProfileImage}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="avatar"
            style={{ borderRadius: '50%' }} 
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" >
          <Nav.Link href="#home" style={linkStyles}>
              Home
            </Nav.Link>
            <Nav.Link href="#services" style={linkStyles}>
              Services
            </Nav.Link>
            <Nav.Link href="#work" style={linkStyles}>
              Projects
            </Nav.Link>
            <Nav.Link href="#contact" style={linkStyles}>
              Contact
            </Nav.Link>
            <Nav.Link href="#about" style={linkStyles}>
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
