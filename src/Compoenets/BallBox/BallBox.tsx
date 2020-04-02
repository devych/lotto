import React from "react";
import Ball from "./Ball/Ball";

interface IProps {
    balls?: number[];
}

const BallBox: React.FC<IProps> = ({ balls }) => {
    return (
        <>
            {balls &&
                balls?.map((ball: number, index: number) => (
                    <Ball ball={ball} key={index} id={index} />
                ))}
        </>
    );
};

export default BallBox;
