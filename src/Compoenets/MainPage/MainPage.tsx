import React from "react";
import { Card, Button, Dropdown } from "react-bootstrap";
import BallBox from "../BallBox/BallBox";

const fakeData = ["889회", "888회", "887회", "886회", "885회"];

const MainPage: React.FC = () => {
    return (
        <>
            <Card className="text-center">
                <Card.Header>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            지난 당첨 번호
                        </Dropdown.Toggle>

                        <Dropdown.Menu
                            style={{
                                overflowY: "scroll",
                                maxHeight: "300px"
                            }}
                        >
                            {fakeData.map((item, key) => (
                                <Dropdown.Item href="#/action-1" key={key}>
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Header>
                <Card.Body>
                    <Card.Title>889회차 로또 당첨 번호</Card.Title>

                    <Card.Text>
                        <BallBox balls={[1, 12, 20, 34, 40, 44, 45]} />
                    </Card.Text>
                    <Button variant="primary">Get Details</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default MainPage;
