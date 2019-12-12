import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const TopNavBar: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link className="navbar-brand mb-0 h1" to="/">
          TToloTTo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="/">
              Mainpage
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">
              LottoCollection
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">
              LottoShooter
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/">
              Shop
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
