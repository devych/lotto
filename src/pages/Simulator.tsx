import React from "react";
import {
    Card,
    Row,
    Col,
    Container,
    Table,
    ProgressBar,
    Alert,
} from "react-bootstrap";
import SimulatorControlButtons from "../compoenets/simulatorControlButtons/SimulatorControlButtons";
import BallBox from "../compoenets/ballBox/BallBox";
import { ILotto, IWinList } from "../interfaces/interfaces";
import HelmetComponent from "../compoenets/helmet/HelmetComponent";

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
    resetSimulator: () => void;
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
    resetSimulator,
}: IProps) => {
    return (
        <>
            <HelmetComponent
                title={"또로또 - 로또 시뮬레이터"}
                description={
                    "로또 시뮬레이터를 통해 자동 번호를 생성하여 로또 당첨 확률을 직접적으로 경험해 볼 수 있습니다."
                }
                ogUrl={"http://ttolotto.me/simulator"}
            />
            <h1>로또 시뮬레이터</h1>
            <Alert variant="success">
                로또 회차와 시뮬레이션 횟수를 먼저 선택하고 시작을 눌러주세요.
            </Alert>
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
                        resetSimulator={resetSimulator}
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
                                                {(
                                                    (obj.list.length /
                                                        curRound) *
                                                    100
                                                ).toFixed(2)}
                                                %
                                            </td>
                                            <td>
                                                {obj.list.map(
                                                    (balls, ballIdx) => {
                                                        return (
                                                            <span
                                                                key={ballIdx}
                                                                style={{
                                                                    display:
                                                                        "block",
                                                                }}
                                                            >
                                                                {`${balls[0]}번째 출현`}
                                                                <br />
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
                                    return (
                                        <tr key={idx}>
                                            <td>당첨 이후에</td>
                                            <td>결과를</td>
                                            <td>보여줍니다.</td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </Table>
                </Card.Body>

                <Card.Footer
                    className="text-muted"
                    style={{ background: "#f8f9fa" }}
                >
                    로또는 한 주간의 즐거운 희망을 심어주는 가벼운 오락 활동의
                    하나입니다.
                    <br />
                    <br />
                    소액으로 건전하게 구매할 때 나에겐 희망이 되고, 모두에게
                    행복이 됩니다.
                    <br />
                </Card.Footer>
            </Card>
        </>
    );
};

export default Simulator;
