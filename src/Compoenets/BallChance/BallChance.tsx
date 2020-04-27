import React from "react";
import { Table, Card, Button } from "react-bootstrap";

interface IProps {
    rank: Array<number>[] | null;
    isBnus: boolean;
    handleBnus: () => void;
}

const BallChance = ({ rank, isBnus, handleBnus }: IProps) => {
    return (
        <>
            <Card className="text-center" border={"secondary"}>
                <Card.Header>
                    {isBnus ? (
                        <>보너스 번호 제외한 통계를 보시겠어요?</>
                    ) : (
                        <>보너스 번호 포함한 통계를 보시겠어요?</>
                    )}

                    <Button variant="outline-dark" onClick={handleBnus}>
                        버튼을 눌러주세요
                    </Button>
                </Card.Header>
                <Card.Body>
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
