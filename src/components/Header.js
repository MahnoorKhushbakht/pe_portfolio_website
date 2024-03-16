import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import avatar from '../images/avatar.png';
import './css/Header.css';

function Header() {
  // const transparentNavbarStyles = {
  //   position: 'fixed',
  //   width: '100%',
  //   zIndex: 999,
  // };

  const linkStyles = {
    color: '#735DA5',
    fontSize: '15px',
    textTransform: 'uppercase',
    fontFamily: "'Rubik', sans-serif", 
  };
  


  return (
    <Navbar
    fixed="top"
      expand="md"
      // style={transparentNavbarStyles}
      data-bs-theme="dark"
      variant="dark"
      className='header'
    >
      <Container>
        <Navbar.Brand href="#home">
        <img
    src={avatar}
    width="30"
    height="25"
    className="d-inline-block align-top"
    alt="avatar"
    style={{ borderRadius: '50%' }}
/>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{ color: '#735DA5'}}  />


        <Navbar.Collapse id="basic-navbar-nav" className="custom-navbar-collapse"  >
          <Nav className="me-auto">
            <Nav.Link href="#home" style={linkStyles}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" style={linkStyles}>
              Skills
            </Nav.Link>
            <Nav.Link href="#work" style={linkStyles}>
              Career
            </Nav.Link>
            <Nav.Link href="#services" style={linkStyles}>
              Services
            </Nav.Link>
            <Nav.Link href="#contact" style={linkStyles}>
              Contact
            </Nav.Link>
            <Nav.Link href="#about" style={linkStyles}>
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
  );
}

export default Header;
