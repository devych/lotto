export class TimeFormat {
    date: string;
    //date example : "Sat, 25 Jun 2005 00:00:00 GMT"
    constructor(date: string) {
        this.date = date;
    }

    monthKorName = {
        Jan: "1월",
        Feb: "2월",
        Mar: "3월",
        Apr: "4월",
        May: "5월",
        Jun: "6월",
        Jul: "7월",
        Aug: "8월",
        Sep: "9월",
        Oct: "10월",
        Nov: "11월",
        Dec: "12월",
    };

    weekDayKorName = {
        Mon: "월",
        Tue: "화",
        Wed: "수",
        Thu: "목",
        Fri: "금",
        Sat: "토",
        Sun: "일",
    };

    _year: string = this.date.slice(12, 16);
    _month: string = this.date.slice(8, 11);
    _weekDay: string = this.date.slice(0, 3);
    _date: string = this.date.slice(5, 7);
    _time: string = this.date.slice(17);

    getYear = () => this._year;
    getMonth = () =>
        (this.monthKorName as { [char: string]: string })[this._month];
    getDate = () =>
        (this.weekDayKorName as { [char: string]: string })[this._weekDay];
    getDay = () => this._date;
    getTime = () => this._time;
}
