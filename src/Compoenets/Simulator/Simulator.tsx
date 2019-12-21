import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import SimulatorControlButtons from "./SimulatorControlButtons/SimulatorControlButtons";
import SimulatorInputBox from "./SimulatorInputBox/SimulatorInputBox";

const Simulator = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>
          <SimulatorControlButtons />
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <SimulatorInputBox />
          </Card.Title>
          <Card.Text></Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </>
  );
};

export default Simulator;
