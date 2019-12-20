const fs = require("fs");
const axios = require("axios");
const lottoData = require("../lottoData/data.json");
const lottoArrayData = require("../lottoData/dataArray.json");

const url = "http://www.nlotto.co.kr/common.do?method=getLottoNumber&drwNo=";

//필요한 데이터 형식
/*
{"lottos":[
  {
    "totSellamnt": 3681782000,
    "returnValue": "success",
    "drwNoDate": "2002-12-07",
    "firstWinamnt": 0,
    "drwtNo6": 40,
    "drwtNo4": 33,
    "firstPrzwnerCo": 0,
    "drwtNo5": 37,
    "bnusNo": 16,
    "firstAccumamnt": 863604600,
    "drwNo": 1,
    "drwtNo2": 23,
    "drwtNo3": 29,
    "drwtNo1": 10
  },{
    "totSellamnt": 4904274000,
    "returnValue": "success",
    "drwNoDate": "2002-12-14",
    "firstWinamnt": 2002006800,
    "drwtNo6": 42,
    "drwtNo4": 25,
    "firstPrzwnerCo": 1,
    "drwtNo5": 32,
    "bnusNo": 2,
    "firstAccumamnt": 0,
    "drwNo": 2,
    "drwtNo2": 13,
    "drwtNo3": 21,
    "drwtNo1": 9
  }...
]}
*/

const getAllLottoNumber = async (pastData, pastArrayData) => {
  let isNewInfo = true;
  let drwNo = 1;
  let newData = pastData || { lotto: [] };
  let newLottoData = {};
  let simpleData = pastArrayData || {};

  while (isNewInfo === true) {
    if (
      !newData.lotto[drwNo - 1] ||
      newData.lotto[drwNo - 1].returnValue === "fail"
    ) {
      const lottoInfo = await axios.get(`${url}${drwNo}`);
      newLottoData = JSON.parse(JSON.stringify(lottoInfo.data));
      newData.lotto.push(lottoInfo.data);
      console.log(`${drwNo}회차 로또 정보를 가져왔습니다.`);
      // arr = {'1':[[3,11,22,33,44,55],27], '2':[[3,11,22,33,44,55],27]'...};
    }
    if (newData.lotto[drwNo - 1]) {
      simpleData[drwNo] = [
        newData.lotto[drwNo - 1].drwtNo1,
        newData.lotto[drwNo - 1].drwtNo2,
        newData.lotto[drwNo - 1].drwtNo3,
        newData.lotto[drwNo - 1].drwtNo4,
        newData.lotto[drwNo - 1].drwtNo5,
        newData.lotto[drwNo - 1].drwtNo6,
        newData.lotto[drwNo - 1].bnusNo
      ];
    }

    drwNo++;

    if (newLottoData.returnValue === "fail") {
      console.log("모든 정보를 가져왔습니다.");
      isNewInfo = false;
    }
  }

  console.log(`${drwNo - 1}회차 정보를 삭제합니다.`);
  //newData = array
  if (newData.lotto[newData.lotto.length - 1].returnValue === "fail") {
    newData.lotto.pop();
  }
  //simpleData = object
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
};

getAllLottoNumber(lottoData, lottoArrayData);
