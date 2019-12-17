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
              로또 당첨 정보
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/drawlotto">
              로또 번호 생성 > 드롭다운 구성 후 무작위 추출 또는 확률상
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/ballChance">
              번호별 확률
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
