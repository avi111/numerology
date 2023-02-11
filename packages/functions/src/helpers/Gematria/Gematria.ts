import {bigGematria, contraGematriaValues, letters, smallGematria} from "../../consts/letters";
import MainTriangle from "../../Calculations/mainTriangle";

class Gematria {
    private readonly input: string;
    private readonly _small: number;
    private readonly _big: number;
    private readonly _recursiveBig: number[];

    constructor(input: string | string[]) {
        this.input = typeof input === 'string' ?
            Gematria.convertToWord(input.split('')) :
            Gematria.convertToWord(input);
        this.input = Gematria.filterNotHebrewOrNumbers(this.input);

        let splitted;
        let value;

        /**
         * isolate letters like יכלמנסעפצ  =>  Number.parseInt(input,10)%10===0
         */
        if (typeof input === 'string' && Number.parseInt(input, 10) % 10 === 0) {
            value = contraGematriaValues.get(Number.parseInt(input, 10));
            splitted = value && [value];
        }
        splitted = splitted || this.input.split('')
            .filter((l) => l !== ' ' && letters.split('')
                .findIndex((letter) => letter === l) !== -1);

        this._small = this.calculateSmall(splitted);
        this._big = this.calculateBig(splitted);
        this._recursiveBig = this.calculateRecursiveBig();
        this.specialNumbers();
    }

    get small(): number {
        return this._small;
    }

    get big(): number {
        return this._big;
    }

    get recursiveBig(): number[] {
        return this._recursiveBig;
    }

    private _isKarmatic = 0;

    get isKarmatic(): number {
        return this._isKarmatic;
    }

    private _isMaster = 0;

    get isMaster(): number {
        return this._isMaster;
    }

    public static filterNotHebrewOrNumbers(input: string): string {
        return input.split('')
            .filter((letter) => (letters + '0123456789').split('').findIndex((l) => l === letter) !== -1)
            .join('');
    }

    public static convertDateToWord(date: Date): string {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

    public static getDateAsInput(date: Date): string {
        const stringDate = Gematria.convertDateToWord(date);
        return Gematria.filterNotHebrewOrNumbers(stringDate);
    }

    public static convertToWord(arr: string[]): string {
        return arr.map((element) => {
            const index = letters.split('').findIndex((letter) => letter === element);
            if (index === -1) {
                if (Number.isInteger(Number.parseInt(element, 10))) {
                    return letters[smallGematria.split('').findIndex((digit) => digit === element)];
                } else {
                    return '';
                }
            }
            return element;
        }).filter((element) => element).join('');
    }

    public static splitToDigits(num: number): number[] {
        const arr: number[] = [];
        while (num / 10 >= 0.1) {
            arr.unshift(num % 10);
            num = Math.floor(num / 10);
        }
        return arr;

    }

    public specialNumbers() {
        const self = this;
        this._recursiveBig.forEach((num) => {
            if (MainTriangle.isKarmatic(num)) {
                self._isKarmatic = num;
            }

            if (MainTriangle.isMaster(num)) {
                self._isMaster = num;
            }
        });
    }

    public getBig(beforeLast = true) {
        const length = this.recursiveBig.length - 1;
        const index = beforeLast ? (length - 1) : length;
        return this.recursiveBig[index];
    }

    public calculateSmall(splitted: string[]): number {
        const nums = splitted.map((l) => {
            const index = letters.split('').findIndex((letter) => letter === l);
            return index !== -1 && smallGematria[index];
        });
        let summary: number = nums.reduce((total, num) => total + Number.parseInt(num + '', 10), 0);
        while (summary > 9) {
            summary = Gematria.splitToDigits(summary)
                .reduce((total, num) => total + Number.parseInt(num + '', 10), 0);
        }

        return summary;
    }

    public calculateRecursiveBig(): number[] {
        const nums = (this._big + '').split((''));
        let summary: number = nums.reduce((total, num) => total + Number.parseInt(num + '', 10), 0);
        const summaries = [this._big, summary];
        while (summary > 9) {
            summary = Gematria.splitToDigits(summary)
                .reduce((total, num) => total + Number.parseInt(num + '', 10), 0);
            summaries.push(summary);
        }

        return summaries;
    }

    public calculateBig(splitted: string[]): number {
        return splitted.map((l) => {
            const index = letters.split('').findIndex((letter) => letter === l);
            return index !== -1 && bigGematria.get(letters[index]);
        }).reduce((total, num) => total + Number.parseInt(num + '', 10), 0);
    }
}

export default Gematria;
