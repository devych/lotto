import React from "react";
import { Card, Row, Col, Container, Table, ProgressBar } from "react-bootstrap";
import SimulatorControlButtons from "./simulatorControlButtons/SimulatorControlButtons";
import BallBox from "../ballBox/BallBox";
import { ILotto, IWinList } from "../../interfaces/interfaces";

interface IProps {
    lotto: ILotto[] | [];
    selectedLotto?: ILotto | null;
    winList: IWinList[];
    simulationRound: number;
    curRound: number;
    progress: number;
    handleLotto?: (e: string) => void;
    handleSimulationRound: (e: string) => void;
    startSimulator: () => void;
    stopSimulator: () => void;
}

const Simulator = ({
    lotto,
    selectedLotto,
    winList,
    simulationRound,
    curRound,
    progress,
    handleLotto,
    handleSimulationRound,
    startSimulator,
    stopSimulator,
}: IProps) => {
    return (
        <>
            <Card
                className="text-center"
                bg={"light"}
                text={"dark"}
                border={"secondary"}
            >
                <Card.Header>
                    <SimulatorControlButtons
                        lotto={lotto}
                        handleLotto={handleLotto}
                        handleSimulationRound={handleSimulationRound}
                        startSimulator={startSimulator}
                        stopSimulator={stopSimulator}
                    />
                </Card.Header>
                {selectedLotto ? (
                    <Card.Body
                        style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}
                    >
                        <Container>
                            <Row>
                                <Col sm={6}>
                                    <Row>
                                        <Col>
                                            {selectedLotto!.drwNo}회차 당첨 번호
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <BallBox
                                                balls={[
                                                    selectedLotto!.drwtNo1,
                                                    selectedLotto!.drwtNo2,
                                                    selectedLotto!.drwtNo3,
                                                    selectedLotto!.drwtNo4,
                                                    selectedLotto!.drwtNo5,
                                                    selectedLotto!.drwtNo6,
                                                ]}
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
                                            <BallBox
                                                balls={[selectedLotto!.bnusNo]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3}>
                                    <Row>
                                        <Col>시뮬레이션 횟수</Col>
                                    </Row>
                                    <Row>
                                        <Col>{simulationRound}</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                ) : (
                    ""
                )}
                <Card.Body>
                    {progress ? (
                        progress !== 100 ? (
                            <ProgressBar
                                animated
                                now={progress}
                                label={`${progress}%`}
                            />
                        ) : (
                            <ProgressBar now={progress} label={`완료`} />
                        )
                    ) : (
                        <></>
                    )}
                    <br />
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
                                    당첨
                                    <br />
                                    번호
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {winList.map((obj, idx) => {
                                if (obj.list.length > 0) {
                                    return (
                                        <tr key={idx}>
                                            <td>
                                                {`${obj.rank}`}
                                                <br />
                                                {`(${obj.list.length})`}
                                            </td>
                                            <td>
                                                {obj.list.length / curRound}%
                                            </td>
                                            <td>
                                                {obj.list.map(
                                                    (balls, ballIdx) => {
                                                        return (
                                                            <span key={ballIdx}>
                                                                {`${
                                                                    balls[1]![0]
                                                                }, 
                                                            ${balls[1]![1]},
                                                            ${balls[1]![2]},
                                                            ${balls[1]![3]},
                                                            ${balls[1]![4]},
                                                            ${balls[1]![5]}`}
                                                                <br />
                                                            </span>
                                                        );
                                                    }
                                                )}
                                            </td>
                                        </tr>
                                    );
                                } else {
                                    return <tr key={idx}></tr>;
                                }
                            })}
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
