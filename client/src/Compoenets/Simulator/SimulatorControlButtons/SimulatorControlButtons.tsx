import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";

const SimulatorControlButtons = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="auto">
          <Dropdown style={{ margin: "2px" }}>
            <Dropdown.Toggle variant="info" id="dropdown-basic" size="sm">
              시뮬레이션 횟수: 기본 100
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">100</Dropdown.Item>
              <Dropdown.Item href="#/action-2">1000</Dropdown.Item>
              <Dropdown.Item href="#/action-3">10000</Dropdown.Item>
              <Dropdown.Item href="#/action-3">100000</Dropdown.Item>
              <Dropdown.Item href="#/action-3">1000000</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs lg="auto">
          <Button variant="success"> 시작</Button>
        </Col>
        <Col xs lg="auto">
          <Button variant="danger"> 정지</Button>
        </Col>
        <Col xs lg="auto">
          <Button variant="secondary">초기화</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SimulatorControlButtons;
