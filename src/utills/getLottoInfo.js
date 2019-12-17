const fs = require("fs");
const path = require("path");
const axios = require("axios");
const lottoData = require("../lottoData/data.json");
const lottoArrayData = require("../lottoData/dataArray.json");

const url = "http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=";

async function getAllLottoNumber(pastData, pastArrayData) {
  let isNewInfo = true;
  let drwNo = 1;
  let newData = pastData || {};
  let newLottoData = {};
  let simpleData = pastArrayData || {};
  while (isNewInfo === true) {
    if (!newData[drwNo] || newData[drwNo].returnValue === "fail") {
      const lottoInfo = await axios.get(`${url}${drwNo}`);
      newLottoData = JSON.parse(JSON.stringify(lottoInfo.data));
      newData[drwNo] = lottoInfo.data;
      console.log(`${drwNo}회차 로또 정보를 가져왔습니다.`);
      // arr = {'1':[[3,11,22,33,44,55],27], '2':[[3,11,22,33,44,55],27]'...};
    }
    simpleData[drwNo] = [
      newData[drwNo].drwtNo1,
      newData[drwNo].drwtNo2,
      newData[drwNo].drwtNo3,
      newData[drwNo].drwtNo4,
      newData[drwNo].drwtNo5,
      newData[drwNo].drwtNo6,
      newData[drwNo].bnusNo
    ];
    drwNo++;

    if (newLottoData.returnValue === "fail") {
      console.log("모든 정보를 가져왔습니다.");
      isNewInfo = false;
    }
  }
  console.log(`${drwNo - 1}회차 정보를 삭제합니다.`);
  delete newData[drwNo - 1];
  delete simpleData[drwNo - 1];

  newData = JSON.stringify(newData);
  simpleData = JSON.stringify(simpleData);
  fs.writeFile(
    "/Users/devych/Code/forHappyCoding/lifeLotto/client-lotto/src/lottoData/data.json",
    newData,
    err => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("파일이 json 형식으로 저장되었습니다.");
    }
  );
  fs.writeFile(
    "/Users/devych/Code/forHappyCoding/lifeLotto/client-lotto/src/lottoData/dataArray.json",
    simpleData,
    err => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log("파일이 array 형식으로 저장되었습니다.");
    }
  );
}

getAllLottoNumber(lottoData, lottoArrayData);
