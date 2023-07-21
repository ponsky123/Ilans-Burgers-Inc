import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: '10px' }}>
      <Navbar.Brand href="#main">
        <img
          src="https://media.discordapp.net/attachments/1076713291210031234/1131247076815159377/professorilan_simple_burger_icon_12ee1b0d-428d-4c8f-b88b-c38899b80ccf.png?width=1116&height=1116"
          width="30"
          height="30"
          className="d-inline-block align-top rounded-circle"
          alt="Ilan's Burgers Inc logo"
        />
        {' '}
        Ilan's Burgers Inc
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#main">Home</Nav.Link>
          <Nav.Link href="#services">Menu</Nav.Link>
          <Nav.Link href="#locations">Locations</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
