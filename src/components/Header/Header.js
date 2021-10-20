import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
  const { user, logOut } = useFirebase();
  return (
    <div>
      <Navbar className="nav-bar" expand="lg">
        <Container fluid>
          <Navbar.Brand className="nav-brand" as={Link} to="/">
            <span className="title">Smile</span>
            <span className="title-sm"> Dental Care</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="navbar-link" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/dentists">
                Dentists
              </Nav.Link>
              <Nav.Link className="navbar-link" as={Link} to="/appointment">
                Appointment
              </Nav.Link>
              {user.displayName && (
                <Nav.Link className="navbar-link" as={Link} to="/">
                 {user.displayName}
                </Nav.Link>
              )}
              {user.email ? (
                <button className="btn btn-logout d-sm-inline" onClick={logOut}>Logout</button>
              ) : (
                <Nav.Link className="btn btn-logout text-light" as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
