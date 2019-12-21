import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const SimulatorControlButtons = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="auto">
          <Button variant="success">시뮬레이션 시작</Button>
        </Col>
        <Col xs lg="auto">
          <Button variant="danger">시뮬레이션 정지</Button>
        </Col>
        <Col xs lg="auto">
          <Button variant="secondary">초기화</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SimulatorControlButtons;
