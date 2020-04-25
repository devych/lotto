import React, { useState, useEffect } from "react";
import { Table, Card } from "react-bootstrap";
import fakeData from "../../lottoData/data.json";
import Lotto from "../../utils/Lotto.js";

type BallChance = [string, number, number][];

const BallChance = () => {
    const [ballChance, setBallChance] = useState<BallChance>([]);

    useEffect(() => {
        getBallChance();
    }, []);

    const getBallChance = () => {
        const data = Lotto.getAverageBallChance(fakeData);
        setBallChance([...data]);
    };

    return (
        <>
            <Card className="text-center" border={"secondary"}>
                <Card.Header>보너스 번호를 제외한 번호별 출현 확률</Card.Header>
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
                            {ballChance.map((item, index) => {
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
