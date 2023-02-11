import {gregorianMonths} from "../../consts/letters";

class Months {

    private readonly _name: string;

    constructor(num: number) {
        this._name = this.getName(num);
    }

    get name(): string {
        return this._name;
    }

    public getName(num: number): string {
        return gregorianMonths.get(num);
    }
}

export default Months;
