import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import SimulatorControlButtons from "./SimulatorControlButtons/SimulatorControlButtons";
import SimulatorInputBox from "./SimulatorInputBox/SimulatorInputBox";

type Balls = number[] | [];

const Simulator = () => {
    const [balls, setBalls] = useState<Balls>([]);

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
                </Card.Body>
                <Card.Footer className="text-muted">즐기세요</Card.Footer>
            </Card>
        </>
    );
};

export default Simulator;
