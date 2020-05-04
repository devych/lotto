import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { ILotto } from "../../../interfaces/interfaces";

interface IProps {
    lotto: ILotto[];
    handleLotto?: (e: string) => void;
    handleSimulationRound: (e: string) => void;
    startSimulator: () => void;
    stopSimulator: () => void;
    resetSimulator: () => void;
}

const SimulatorControlButtons = ({
    lotto,
    handleLotto,
    handleSimulationRound,
    startSimulator,
    stopSimulator,
    resetSimulator,
}: IProps) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs lg="auto">
                    <Dropdown style={{ margin: "2px" }}>
                        <Dropdown.Toggle
                            variant="info"
                            id="dropdown-basic"
                            size="sm"
                        >
                            로또 회차 선택
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                            style={{
                                overflowY: "scroll",
                                maxHeight: "300px",
                            }}
                        >
                            {lotto.map((item, key) => (
                                <Dropdown.Item
                                    onSelect={handleLotto}
                                    eventKey={`${item.drwNo}`}
                                    key={key}
                                >
                                    {item.drwNo}회
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col xs lg="auto">
                    <Dropdown style={{ margin: "2px" }}>
                        <Dropdown.Toggle
                            variant="info"
                            id="dropdown-basic"
                            size="sm"
                        >
                            시뮬레이션 횟수
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ textAlign: "right" }}>
                            {[10, 50, 100, 500, 1000].map((item, idx) => (
                                <Dropdown.Item
                                    onSelect={handleSimulationRound}
                                    eventKey={`${item}`}
                                    key={idx}
                                >
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
                <Col xs lg="auto">
                    <Button variant="success" onClick={startSimulator}>
                        시작
                    </Button>
                </Col>
                <Col xs lg="auto">
                    <Button variant="danger" onClick={stopSimulator}>
                        정지
                    </Button>
                </Col>
                <Col xs lg="auto">
                    <Button variant="secondary" onClick={resetSimulator}>
                        초기화
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default SimulatorControlButtons;
