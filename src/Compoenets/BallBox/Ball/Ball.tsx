import React from "react";
import styles from "styled-components";

interface IProps {
  ball?: number;
  key: number;
}

const Ball: React.FC<IProps> = ({ ball, key }) => {
  return (
    <>
      <BallStyle key={key}>{ball}</BallStyle>
    </>
  );
};

const BallStyle = styles.span<IProps>`
${props => {
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
width: 60px;
height: 60px;
line-height: 56px;
font-size: 28px;
text-shadow: 0px 0px 3px rgba(73, 57, 0, .8);
margin: 10px 10px ;
cursor: pointer; 
transition:all ease 0.5s 0s;
`;

export default Ball;
