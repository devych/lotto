import React from "react";
import Ball from "../ballBox/ball/Ball";

interface IProps {
    onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const BallCheckBox = ({ onClick }: IProps) => (
    <span>
        {[...Array(45)].map((x, i) => {
            if ((i + 1) % 10 === 0) {
                return (
                    <>
                        <span key={i} style={{ display: "inline-block" }}>
                            <Ball ball={i + 1} onClick={onClick} size="sm" />
                        </span>
                        <br />
                    </>
                );
            }
            return (
                <span key={i} style={{ display: "inline-block" }}>
                    <Ball ball={i + 1} onClick={onClick} size="sm" />
                </span>
            );
        })}
    </span>
);

export default BallCheckBox;
