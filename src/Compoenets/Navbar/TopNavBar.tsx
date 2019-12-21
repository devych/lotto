import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
const TopNavBar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = (expanded: boolean) => {
    setToggle(expanded);
  };
  const closeToggle = () => {
    setToggle(false);
  };

  return (
    <Navbar bg="light" expand="md" expanded={toggle} onToggle={handleToggle}>
      <Navbar.Brand>
        <Link className="navbar-brand mb-0 h1" to="/">
          TToloTTo
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto" onClick={closeToggle}>
          <Nav.Link>
            <Link className="nav-link" to="/">
              로또 당첨 정보
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/drawlotto">
              로또 번호 생성
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/ballChance">
              번호별 확률
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link className="nav-link" to="/simulator">
              로또 시뮬레이션
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavBar;
