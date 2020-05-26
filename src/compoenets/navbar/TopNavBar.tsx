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
        <>
            <Navbar
                bg="dark"
                variant="dark"
                expand="md"
                sticky="top"
                expanded={toggle}
                onToggle={handleToggle}
            >
                <Navbar.Brand>
                    <Link className="navbar-brand mb-0 h1" to="/">
                        또로또
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="mr-auto" onClick={closeToggle}></Nav>
                    <Nav onClick={closeToggle}>
                        <Link className="nav-link" to="/">
                            로또 당첨 정보
                        </Link>
                        <Link className="nav-link" to="/generate">
                            번호 생성
                        </Link>
                        <Link className="nav-link" to="/ballchance">
                            번호별 확률
                        </Link>
                        <Link className="nav-link" to="/simulator">
                            로또 시뮬레이터
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br />
        </>
    );
};

export default TopNavBar;
