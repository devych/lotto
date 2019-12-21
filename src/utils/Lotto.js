// import lottoData from "../lottoData/data.json";
// import lottoArrayData from "../lottoData/dataArray.json";
// const lottoData = require("../lottoData/data.json");
// const lottoArrayData = require("../lottoData/dataArray.json");

class Lotto {
  constructor(lastNum) {
    this.lastNum = lastNum;
  }

  static createBall(length, ...balls) {
    let retBalls = [...balls];
    let ball;
    let len = length;
    while (retBalls.length < len) {
      ball = Math.floor(Math.random() * 46);
      if (retBalls.indexOf(ball) < 0 && ball > 0) {
        retBalls.push(ball);
      }
    }
    return retBalls;
  }

  static createLottoBalls(...balls) {
    //create regular balls
    let retBalls = Lotto.createBall(6, ...balls);
    retBalls.sort((a, b) => a - b);
    //create bonus balls
    retBalls = Lotto.createBall(7, ...retBalls);
    return retBalls;
  }

  static getAverageBallChance(lottoData) {
    const data = lottoData.lotto;
    let result = {};
    const countBall = (obj, ...num) => {
      for (let i = 0; i < num.length; i++) {
        if (obj[num[i]]) {
          obj[num[i]] += 1;
        } else {
          obj[num[i]] = 1;
        }
      }
    };

    for (let i = 0; i < data.length; i++) {
      let {
        drwtNo1,
        drwtNo2,
        drwtNo3,
        drwtNo4,
        drwtNo5,
        drwtNo6
        // bnusNo
      } = data[i];
      countBall(result, drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6);

      // countBall(bnusNo, result);
    }
    let resultKeys = Object.keys(result);
    const indescenndingItems = (keys, obj, totalLottoNum) => {
      keys.sort((a, b) => {
        return obj[b] - obj[a];
      });
      return keys.map(item => [
        item,
        obj[item],
        Number(((obj[item] / totalLottoNum) * 100).toFixed(4))
      ]);
    };
    const ret = indescenndingItems(resultKeys, result, 889);
    return ret;
  }

  //TODO:이 함수는 1개 이상 6개 이하의 인자를 받아 가장 높은 등수별로 솔팅하여 등수 및 번호정보를 arr에 담아 리턴하는 함수
  static getWinnerFromAllDraw(...balls) {
    let drwt = balls.slice().sort((a, b) => a - b);
    console.log(drwt);
  }
}

export default Lotto;
