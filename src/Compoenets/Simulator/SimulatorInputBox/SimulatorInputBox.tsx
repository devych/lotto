import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimulatorDropdown from "./SimulatorDropdown";

let fakeData = [
    {
        drwNo: 907,
        answer: [21, 27, 29, 38, 40, 44],
        bnus: 37,
        totSellamnt: 89331282000,
    },
];

const SimulatorInputBox = () => {
    return (
        <Container className="justify-content-md-center">
            <Row className="justify-content-md-center">
                <Col xs md="auto">
                    당첨 번호 설정
                </Col>
                <Col xs="auto" md="auto">
                    <SimulatorDropdown buttonNum={"과거회차"} />
                </Col>
            </Row>
            <Row className="justify-content-md-center"></Row>
        </Container>
    );
};

export default SimulatorInputBox;
