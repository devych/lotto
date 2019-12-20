import React from "react";
import Ball from "./Ball/Ball";

interface IProps {
  balls?: number[];
}

const BallBox: React.FC<IProps> = ({ balls }) => {
  return (
    <>
      {balls &&
        balls?.map((ball: number, key: number) => (
          <Ball ball={ball} key={key} />
        ))}
    </>
  );
};

export default BallBox;
