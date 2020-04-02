import React from "react";
import { Dropdown } from "react-bootstrap";

interface IProps {
    buttonNum: number;
}

const SimulatorDropdown: React.FC<IProps> = ({ buttonNum }) => {
    return (
        <Dropdown style={{ margin: "2px" }}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" size="sm">
                {buttonNum}번 번호
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default SimulatorDropdown;
