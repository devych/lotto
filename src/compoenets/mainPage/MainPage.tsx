import React from "react";
import { Card, Dropdown, Container, Row, Col } from "react-bootstrap";
import BallBox from "../ballBox/BallBox";
import Loading from "../utiliies/Loading";
import { ILotto } from "../../interfaces/interfaces";
import CreatedLottoWinner from "./createdLottoWin/CreatedLottoWin";
import { TiPlus } from "react-icons/ti";

interface IProps {
    lotto: ILotto[];
    selectedLotto: ILotto | null;
    createdLottoWin:
        | Array<[number, number, string, string, number[], number[], string]>
        | [];
    onSelect: (e: any) => void;
}

const MainPage = ({
    lotto,
    selectedLotto,
    createdLottoWin,
    onSelect,
}: IProps) => {
    return (
        <>
            <Card className="text-center" border={"secondary"}>
                <Card.Header>
                    <Dropdown onSelect={onSelect}>
                        <Dropdown.Toggle
                            id="dropdown-basic"
                            variant="outline-secondary"
                        >
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
                                <Col>
                                    {lotto[0].drwNo}회 로또 당첨 결과 <br />(
                                    {lotto[0].drwNoDate.slice(0, 4)}년{" "}
                                    {lotto[0].drwNoDate.slice(5, 7)}월{" "}
                                    {lotto[0].drwNoDate.slice(8, 10)}일 추첨)
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={7} md={{ span: 5, offset: 2 }}>
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
                                    <Row>
                                        <Col>당첨 번호</Col>
                                    </Row>
                                </Col>
                                <Col sm={1}>
                                    <br />
                                    <TiPlus />
                                </Col>
                                <Col sm={3} md={{ span: 2 }}>
                                    <Row>
                                        <Col>
                                            <BallBox
                                                balls={[lotto[0]!.bnusNo]}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>보너스 번호</Col>
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
                                <Col>
                                    {selectedLotto!.drwNo}회 로또 당첨 결과{" "}
                                    <br />(
                                    {selectedLotto!.drwNoDate.slice(0, 4)}년{" "}
                                    {selectedLotto!.drwNoDate.slice(5, 7)}월{" "}
                                    {selectedLotto!.drwNoDate.slice(8, 10)}일
                                    추첨)
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={7} md={{ span: 5, offset: 2 }}>
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
                                    <Row>
                                        <Col>당첨 번호</Col>
                                    </Row>
                                </Col>
                                <Col sm={1}>
                                    <br />
                                    <TiPlus />
                                </Col>
                                <Col sm={3} md={{ span: 2 }}>
                                    <Row>
                                        <Col>
                                            <BallBox
                                                balls={[selectedLotto!.bnusNo]}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>보너스 번호</Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                )}
            </Card>
            <br />
            <CreatedLottoWinner createdLottoWin={createdLottoWin} />
        </>
    );
};

export default MainPage;
