export interface ILotto {
    bnusNo: number;
    drwNo: number;
    drwNoDate: string;
    drwtNo1: number;
    drwtNo2: number;
    drwtNo3: number;
    drwtNo4: number;
    drwtNo5: number;
    drwtNo6: number;
    firstAccumamnt: string;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    id: number;
    totSellamnt: number;
}

export interface IWinList {
    rank: number;
    list: Array<[number?, number[]?]>;
}
