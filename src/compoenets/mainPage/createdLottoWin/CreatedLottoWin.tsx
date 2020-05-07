import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import BallBox from "../../ballBox/BallBox";

interface IProps {
    createdLottoWin:
        | Array<[number, number, string, string, number[], number[], string]>
        | [];
}

const CreatedLottoWinner = ({ createdLottoWin }: IProps) => (
    <>
        <Card className="text-center" border={"secondary"}>
            <Card.Header style={{ fontSize: "1.25rem" }}>
                로또번호 생성기 당첨 소식
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            {createdLottoWin.length > 0 &&
                                (createdLottoWin as any)
                                    .slice(0, 10)
                                    .map(
                                        (
                                            list: [
                                                number,
                                                number,
                                                string,
                                                string,
                                                number[],
                                                number[],
                                                string
                                            ],
                                            idx: number
                                        ) => (
                                            <Container key={idx}>
                                                <Row>
                                                    <Col>
                                                        {list[0]}번째 생성된{" "}
                                                        {list[1]}회차 {list[6]}
                                                        등
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <BallBox
                                                            balls={list[4]}
                                                            key={idx}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        ({list[3].slice(0, -4)})
                                                    </Col>
                                                </Row>
                                                <br />
                                            </Container>
                                        )
                                    )}
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    </>
);

export default CreatedLottoWinner;
