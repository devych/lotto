// import lottoData from "../lottoData/data.json";
// import lottoArrayData from "../lottoData/dataArray.json";
// const lottoData = require("../lottoData/data.json");
const lottoArrayData = require("../lottoData/dataArray.json");

class Lotto {
  constructor(lastNum) {
    this.lastNum = lastNum;
  }

  static createLottoBalls(...balls) {
    let retBalls = [...balls];

    let len = 7;
    while (retBalls.length < len) {
      let ball = Math.floor(Math.random() * 46);
      if (retBalls.indexOf(ball) < 0 && ball > 0) {
        retBalls.push(ball);
      }
    }
    retBalls.sort((a, b) => a - b);
    return retBalls;
  }
  static getLastDrawNum() {
    let keys = Object.keys(lottoArrayData);
    let len = keys.length;
    let lastDrawNum = "";
    if (lottoArrayData[len][1]) {
      lastDrawNum = len;
    } else if (lottoArrayData[len - 1][1]) {
      lastDrawNum = len - 1;
    }
    this.lastNum = lastDrawNum;
    return lastDrawNum;
  }

  static getSpecificDrawLotto(...num) {
    let ret = {};

    if (num.length > 1) {
      let [, end] = num;
      for (let i = this.lastNum; i > this.lastNum - end; i--) {
        ret[i] = lottoArrayData[i];
      }
      return ret;
    } else if (num.length === 1) {
      ret = { [num]: lottoArrayData[num] };
      return ret;
    } else {
      return lottoArrayData;
    }
  }

  //TODO:이 함수는 1개 이상 6개 이하의 인자를 받아 가장 높은 등수별로 솔팅하여 등수 및 번호정보를 arr에 담아 리턴하는 함수
  static getWinnerFromAllDraw(...balls) {
    let drwt = balls.slice().sort((a, b) => a - b);
    console.log(drwt);
  }
}

export default Lotto;
