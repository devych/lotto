import React from "react";
import BallBox from "../ballBox/BallBox";
import { Card, Button, DropdownButton, Dropdown } from "react-bootstrap";
import HelmetComponent from "../helmet/HelmetComponent";

interface IProps {
    lottoBalls: Array<number>[] | null;
    handleCount: (evtKey: any) => void;
    handleLotto: () => void;
    count: number;
}

type Balls = number[];
const DrawLotto = ({ lottoBalls, handleCount, handleLotto, count }: IProps) => {
    return (
        <>
            <HelmetComponent
                title={"또로또 - 로또 번호 생성"}
                description={
                    "로또 번호 생성 기능을 통하여 원하는 개수의 번호를 생성 할 수 있습니다."
                }
                ogUrl={"http://ttolotto.me/drawlotto"}
            />
            <Card className="text-center" border={"secondary"}>
                <Card.Header>
                    <DropdownButton
                        key={"secondary"}
                        id={`dropdown-variants-$Secondary`}
                        variant="outline-secondary"
                        title={count ? count + "개" : "개수"}
                        style={{ display: "inline-block", marginRight: "30px" }}
                        onSelect={handleCount}
                    >
                        {[1, 2, 3, 4, 5, 10, 15, 20, 25].map((num, index) => {
                            return (
                                <Dropdown.Item
                                    eventKey={String(num)}
                                    key={index}
                                >
                                    {num}개
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <Button variant="outline-secondary" onClick={handleLotto}>
                        번호 생성
                    </Button>
                </Card.Header>

                <Card.Body>
                    {lottoBalls && lottoBalls.length === 0 ? (
                        <Card.Title>
                            생성 개수를 설정하고
                            <br /> 번호 생성 버튼을 클릭해주세요
                        </Card.Title>
                    ) : (
                        ``
                    )}
                    {lottoBalls && lottoBalls.length === 0
                        ? ``
                        : lottoBalls!.map((item, idx) => {
                              return (
                                  <Card
                                      bg={"light"}
                                      key={idx}
                                      text={"dark"}
                                      style={{
                                          width: "18rem",
                                          display: "inline-block",
                                          margin: "5px 5px",
                                      }}
                                  >
                                      <Card.Header>
                                          {idx + 1}번 번호
                                      </Card.Header>
                                      <Card.Body>
                                          <BallBox balls={item} />
                                      </Card.Body>
                                  </Card>
                              );
                          })}
                </Card.Body>
            </Card>
        </>
    );
};

export default DrawLotto;
