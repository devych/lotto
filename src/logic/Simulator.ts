import { IWinList } from "./../interfaces/interfaces";
import Lotto from "./Lotto";

interface ISimul {
    setInterv: () => void;
    clearInterv: () => void;
}

export class SimulatorGame extends Lotto {
    lastRound: number;
    curRound: number;
    interval: number;
    winLotto: number[];
    constructor(
        lastRound: number,
        curRound: number,
        interval: number,
        winLotto: number[]
    ) {
        super();
        this.lastRound = lastRound;
        this.curRound = curRound;
        this.interval = interval;
        this.winLotto = winLotto;
    }

    private checkLotto = (round: number): [number, number, number[]] | [] => {
        let count = 0;
        let isBnus = false;
        let lotto = SimulatorGame.createLottoBalls();
        for (let i = 0; i < this.winLotto.length; i++) {
            if (lotto.includes(this.winLotto[i])) {
                if (i === 6) {
                    isBnus = true;
                }
                count++;
            }
        }
        if (count > 2) {
            let lottoRank = SimulatorGame.checkLottoRanking(count, isBnus);
            let result: [number, number, number[]] = JSON.parse(
                JSON.stringify([lottoRank, round, [...lotto]])
            );

            return result;
        } else {
            return [];
        }
    };

    private fnc = (
        setCurRound: React.Dispatch<React.SetStateAction<number>>,
        setWinList: React.Dispatch<React.SetStateAction<IWinList[]>>,
        winList: IWinList[]
    ): ISimul => {
        let intervId: number | undefined;
        let lotto1: [number, number, number[]] | [] | undefined;
        let cache: IWinList[] = [];

        const simul = () => {
            try {
                this.curRound++;
                lotto1 = this.checkLotto(this.curRound);
                if (lotto1.length === 3) {
                    cache = [...winList];
                    let tempList: [number, number[]] = [lotto1[1], lotto1[2]];
                    cache[lotto1![0] - 1].list.push(tempList);
                    setWinList(cache);
                }

                if (this.curRound === this.lastRound) {
                    this.stop();
                }
                setCurRound(this.curRound);
            } catch (err) {
                console.error(err);
            }
        };
        return {
            setInterv: () => {
                intervId = setInterval(simul, this.interval);
            },
            clearInterv: () => {
                clearInterval(intervId);
            },
        };
    };

    protected itv: ISimul | undefined = undefined;

    public start = (
        setCurRound: React.Dispatch<React.SetStateAction<number>>,
        setWinList: React.Dispatch<React.SetStateAction<IWinList[]>>,
        winList: IWinList[]
    ) => {
        this.itv = this.fnc(setCurRound, setWinList, winList);
        this.itv.setInterv();
    };

    public stop = () => {
        if (this.itv) {
            this.itv.clearInterv();
        }
    };

    public reset = () => {};
}
