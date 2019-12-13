import React, { useState, useEffect } from "react";
import Lotto from '../../utills/Lotto'
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

  useEffect(() => {
    getLastDraw();
    getLastTenDraws();
  }, []);

  function getLastDraw() {
    let last = Lotto.getLastDrawNum();
    setLastDrawNum(last);
  }

  function getLastTenDraws() {
    let drawInfo = Lotto.getSpecificDrawLotto();
    setAllDrawNum({ ...drawInfo });
  }
  return (
    <>
      <MainPage allDrawNum={allDrawNum} lastDrawNum={lastDrawNum}/>
    </>
  );
};

export default MainPageContainer;
