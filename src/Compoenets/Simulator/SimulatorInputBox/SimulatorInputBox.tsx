import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SimulatorDropdown from "./SimulatorDropdown";

const SimulatorInputBox = () => {
  return (
    <Container className="justify-content-md-center">
      <Row className="justify-content-md-center">
        <Col xs md="auto">
          당첨 번호 설정
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={1} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={2} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={3} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={4} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={5} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={6} />
        </Col>
        <Col xs="auto" md="auto">
          <SimulatorDropdown buttonNum={7} />
        </Col>
      </Row>
    </Container>
  );
};

export default SimulatorInputBox;
