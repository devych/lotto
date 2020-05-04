import React from "react";
import { Table, Card, Button, Alert } from "react-bootstrap";

interface IProps {
    rank: Array<number>[] | null;
    isBnus: boolean;
    handleBnus: () => void;
}

const BallChance = ({ rank, isBnus, handleBnus }: IProps) => {
    return (
        <>
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
