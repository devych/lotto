import React from "react";
import styles from "styled-components";

interface IProps {
    ball?: number;
    id?: number;
    size?: "lg" | "sm";
    onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
}

const Ball: React.FC<IProps> = ({ ball, id, onClick, size }) => {
    return (
        <>
            {id !== 6 ? (
                <BallStyle onClick={onClick} size={size}>
                    {ball}
                </BallStyle>
            ) : (
                <>
                    <BonusStyle> + </BonusStyle>
                    <BallStyle>{ball}</BallStyle>
                </>
            )}
        </>
    );
};

const BallStyle = styles.span<IProps>`
${(props) => {
    if (props.children) {
        if (props.children <= 10) {
            return `background:#fbc400;`;
        } else if (props.children > 10 && props.children < 21) {
            return `background:#69c8f2;`;
        } else if (props.children > 20 && props.children < 31) {
            return `background:#ff7272;`;
        } else if (props.children > 30 && props.children < 41) {
            return `background:#aaa;`;
        } else if (props.children > 40 && props.children <= 45) {
            return `background:#b0d840;`;
        }
    }
}}
display: inline-block;
border-radius: 100%;
text-align: center;
vertical-align: middle;
color: #fff;
font-weight: 1rm;
${(props) => {
    if (props.size) {
        if (props.size === "sm") {
            return `width: 25px; height: 25px; line-height: 25px; font-size: 13px; margin: 5px 2px ;`;
        }
    } else {
        return `width: 30px; height: 30px; line-height: 30px; font-size: 14px; margin: 5px 5px ;`;
    }
}}
text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
cursor: pointer; 
transition:all ease 0.5s 0s;
`;

const BonusStyle = styles.span`
display: inline-block;
font-weight: 2rm;
font-size: 14px;
width: 30px;
height: 30px;
margin: 5px 5px ;
`;

export default Ball;
