import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

function MyNavbar() {
  const offset = -70; // adjust this value based on the height of your navbar

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" style={{ padding: '10px' }}>
      <Link to="main" className="navbar-brand" smooth={true} duration={500} offset={offset}>
        <img
          src="https://media.discordapp.net/attachments/1076713291210031234/1131247076815159377/professorilan_simple_burger_icon_12ee1b0d-428d-4c8f-b88b-c38899b80ccf.png?width=1116&height=1116"
          width="30"
          height="30"
          className="d-inline-block align-top rounded-circle"
          alt="Ilan's Burgers Inc logo"
        />
        {' '}
        Ilan's Burgers Inc
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to="main" className="nav-link" smooth={true} duration={500} offset={offset}>Home</Link>
          <Link to="menu" className="nav-link" smooth={true} duration={500} offset={offset}>Menu</Link>
          <Link to="locations" className="nav-link" smooth={true} duration={500} offset={offset}>Locations</Link>
          <Link to="contact" className="nav-link" smooth={true} duration={500} offset={offset}>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
