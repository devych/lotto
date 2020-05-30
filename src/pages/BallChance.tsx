import React from "react";
import { Table, Card, Button, Alert } from "react-bootstrap";
import HelmetComponent from "../compoenets/helmet/HelmetComponent";

interface IProps {
    rank: Array<number>[] | null;
    isBnus: boolean;
    handleBnus: () => void;
}

const BallChance = ({ rank, isBnus, handleBnus }: IProps) => {
    return (
        <>
            <HelmetComponent
                title={"또로또 - 로또 번호별 확률"}
                description={
                    "로또 1회부터 현재까지 번호변 출현 확률을 계산해 어떤 번호가 가장 많이 출현했는지 확인 할 수 있습니다."
                }
                ogUrl={"http://ttolotto.me/ballchance"}
            />
            <h1>로또 번호별 확률</h1>
            <Card className="text-center" border={"secondary"}>
                <Card.Header style={{ fontSize: "1.2rem" }}>
                    {isBnus ? (
                        <>보너스 번호 포함 전체기간 확률</>
                    ) : (
                        <>보너스 번호 제외 전체기간 확률</>
                    )}
                </Card.Header>
                <Card.Body>
                    <Alert variant={"info"} style={{ padding: "3px 0" }}>
                        {isBnus ? (
                            <>보너스 번호 제외 확률을 보시겠어요?</>
                        ) : (
                            <>보너스 번호 포함 확률을 보시겠어요?</>
                        )}
                        <Button
                            variant="outline-dark"
                            onClick={handleBnus}
                            style={{ margin: "3px 30px" }}
                        >
                            보기
                        </Button>
                    </Alert>
                    <Table striped bordered hover responsive="xl">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>번호</th>
                                <th>출현 횟수</th>
                                <th>출현 확률</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rank &&
                                rank.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td
                                                style={{
                                                    color: "grey",
                                                }}
                                            >
                                                {index + 1}
                                            </td>
                                            <td
                                                style={{
                                                    fontWeight: "bolder",
                                                }}
                                            >
                                                {item[0]}
                                            </td>
                                            <td>{item[1]}</td>
                                            <td>{item[2]} %</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </>
    );
};

export default BallChance;
