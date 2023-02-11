import Gematria from "../helpers/Gematria/Gematria";

class ProminentAgesDate {

    constructor(date: Date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        this._prominentAge1 = this.sum(`${year}${month}${day}`.split('').map((num) => parseInt(num, 10)));
        this._prominentAge2 = this.sum(`${year}`.split('').map((num) => parseInt(num, 10))) + month + day;
    }

    private _prominentAge1: number;

    get prominentAge1(): number {
        return this._prominentAge1;
    }

    private _prominentAge2: number;

    get prominentAge2(): number {
        return this._prominentAge2;
    }

    public sum(arr: number[]): number {
        return arr.reduce((a, b) => a + b, 0);
    }

    public prominentAge1Meaning() {
        return new Gematria(this._prominentAge1 + '').small;
    }

    public prominentAge2Meaning() {
        return new Gematria(this._prominentAge2 + '').small;
    }
}

export default ProminentAgesDate;
