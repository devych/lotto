class Lotto {
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
        // retBalls = Lotto.createBall(7, ...retBalls);
        return retBalls;
    }

    static checkLottoRanking(winCount, isBnus) {
        if (winCount === 3) {
            return 5;
        } else if (winCount === 4) {
            return 4;
        } else if (winCount === 5) {
            return 3;
        } else if (winCount === 6) {
            if (isBnus) {
                return 2;
            }
        }
        return 1;
    }
}

export default Lotto;
