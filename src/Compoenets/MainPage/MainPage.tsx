import React from "react";
import { Card, Dropdown, Container, Row, Col } from "react-bootstrap";
import BallBox from "../BallBox/BallBox";
import Loading from "../Utiliies/Loading";
// const fakeData = ["889회", "888회", "887회", "886회", "885회"];

interface IProps {
    lotto: ILotto[];
    selectedLotto: ILotto | null;
    onSelect: (e: any) => void;
}

interface ILotto {
    bnusNo: number;
    drwNo: number;
    drwNoDate: string;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    firstAccumamnt: string;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    id: number;
    totSellamnt: number;
}

const MainPage = ({ lotto, selectedLotto, onSelect }: IProps) => {
    return (
        <>
            <Card className="text-center" border={"secondary"}>
                <Card.Header>
                    <Dropdown onSelect={onSelect}>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            지난 회차
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            style={{
                                overflowY: "scroll",
                                maxHeight: "300px",
                            }}
                        >
                            {lotto.map((item, key) => (
                                <Dropdown.Item
                                    eventKey={`${item.drwNo}`}
                                    key={key}
                                >
                                    {item.drwNo}회
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                {selectedLotto === null && lotto.length > 0 ? (
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm={7}>
                                    <Row>
                                        <Col>
                                            {lotto[0].drwNo}회차 로또 당첨 번호
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <BallBox
                                                balls={[
                                                    lotto[0]!.drwtNo1,
                                                    lotto[0]!.drwtNo2,
                                                    lotto[0]!.drwtNo3,
                                                    lotto[0]!.drwtNo4,
                                                    lotto[0]!.drwtNo5,
                                                    lotto[0]!.drwtNo6,
                                                ]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={5}>
                                    <Row>
                                        <Col>보너스 번호</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <BallBox
                                                balls={[lotto[0]!.bnusNo]}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                ) : lotto.length === 0 ? (
                    <Loading />
                ) : (
                    <Card.Body>
                        <Container>
                            <Row>
                                <Col sm={7}>
                                    <Row>
                                        <Col>
                                            {selectedLotto!.drwNo}회차 로또 당첨
                                            번호
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
                                <Col sm={5}>
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
                            </Row>
                        </Container>
                    </Card.Body>
                )}
                <Card.Body>gd</Card.Body>
            </Card>
        </>
    );
};

export default MainPage;
