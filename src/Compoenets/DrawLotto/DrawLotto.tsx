import React, { useState } from "react";
import Lotto from "../../utils/Lotto";
import BallBox from "../BallBox/BallBox";
import { Card, Button } from "react-bootstrap";

type Balls = number[];
const DrawLotto = () => {
  const [balls, setBalls] = useState<Balls>([]);
  const [count, setCount] = useState<number>(0);

  const handleCreate = () => {
    const createBall = Lotto.createLottoBalls();
    setBalls([...createBall]);
    setCount(count + 1);
  };

  return (
    <>
      <Card className="text-center">
        <Card.Header>로또 번호 생성</Card.Header>
        <Card.Body>
          {balls && balls.length === 0 ? (
            <Card.Title>로또 번호 생성 버튼을 클릭해주세요</Card.Title>
          ) : (
            ``
          )}

          <Card.Text>
            {balls.length === 0 ? `` : <BallBox balls={balls} />}
          </Card.Text>
          <Button variant="success" onClick={handleCreate}>
            번호 생성
          </Button>
        </Card.Body>
        {balls.length === 0 ? (
          ``
        ) : (
          <Card.Footer className="text-muted">
            로또 번호가 {count}번 생성되었습니다.
          </Card.Footer>
        )}
      </Card>
    </>
  );
};

export default DrawLotto;
