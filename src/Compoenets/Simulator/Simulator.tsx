import React from "react";
import { Card, Row, Col, Container, Table } from "react-bootstrap";
import SimulatorControlButtons from "./SimulatorControlButtons/SimulatorControlButtons";
import BallBox from "../BallBox/BallBox";

type Balls = number[] | [];

const Simulator = () => {
    return (
        <>
            <Card
                className="text-center"
                bg={"light"}
                text={"dark"}
                border={"secondary"}
            >
                <Card.Header>
                    <SimulatorControlButtons />
                </Card.Header>
                <Card.Body
                    style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}
                >
                    <Container>
                        <Row>
                            <Col sm={9}>
                                <Row>
                                    <Col>907회차 당첨 번호</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BallBox
                                            balls={[1, 9, 15, 28, 30, 44]}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3}>
                                <Row>
                                    <Col>보너스 번호</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BallBox balls={[32]} />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
                <Card.Body>
                    <Table
                        striped
                        bordered
                        hover
                        responsive="xl"
                        style={{ fontSize: "13px" }}
                    >
                        <thead>
                            <tr>
                                <th>
                                    등수
                                    <br />
                                    (당첨수)
                                </th>
                                <th>
                                    당첨
                                    <br />
                                    확률
                                </th>
                                <th>
                                    최근 당첨번호
                                    <br />
                                    5개
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>

                <Card.Footer
                    className="text-muted"
                    style={{ background: "#f8f9fa" }}
                >
                    모든것은 재미로 하세요
                </Card.Footer>
            </Card>
        </>
    );
};

export default Simulator;
