import React, { useState, useEffect } from "react";
import Lotto from "../../utills/Lotto";
import MainPage from "../../Compoenets/MainPage/MainPage";

const MainPageContainer = () => {
  const [lastDrawNum, setLastDrawNum]: [
    string,
    (value: React.SetStateAction<string>) => void
  ] = useState("0");

  const [allDrawNum, setAllDrawNum]: [
    any,
    (value: React.SetStateAction<object>) => void
  ] = useState({});

  let countAllInning;
  const getInning = () => {
    countAllInning = Object.keys(allDrawNum);
    console.log(allDrawNum);
    console.log(countAllInning);
  };
  // eslint-disable-next-line
  useEffect(() => {
    getLastDraw();
    getLastTenDraws(getInning);
  }, []);

  function getLastDraw() {
    let last = Lotto.getLastDrawNum();
    setLastDrawNum(last);
  }

  function getLastTenDraws(callback: () => void) {
    let drawInfo = Lotto.getSpecificDrawLotto();
    setAllDrawNum(() => ({ ...drawInfo }));
    callback();
  }
  return (
    <>
      <MainPage
        allDrawNum={allDrawNum}
        lastDrawNum={lastDrawNum}
        countAllInning={countAllInning}
      />
    </>
  );
};

export default MainPageContainer;
