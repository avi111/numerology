import {gregorianMonths} from "../../consts/letters";

class Months {

    get name(): string {
        return this._name;
    }

    private readonly _name: string;
    constructor(num: number) {
        this._name = this.getName(num);
    }

    public getName(num: number): string {
        return gregorianMonths.get(num);
    }
}

export default Months;
