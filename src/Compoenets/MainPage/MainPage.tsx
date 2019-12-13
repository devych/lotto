import React, { useState, useEffect } from "react";
import Lotto from "../../utills/Lotto";

interface Iprops {
  allDrawNum: any;
  lastDrawNum: string;
}

const MainPage: React.FC<Iprops> = ({ allDrawNum, lastDrawNum }) => {
  return (
    <>
      <div>
        <h3>{lastDrawNum}회차 당첨 번호</h3>
        <div>
          {Object.keys(allDrawNum).length !== 0 &&
            allDrawNum[lastDrawNum].map((num: any, index: number) => {
              return index === 6 ? (
                <span> Bonus + {num} </span>
              ) : (
                <span> {num} </span>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MainPage;
