import Square from "../helpers/square";
import Gematria from "../helpers/Gematria/Gematria";

const square = [3, 6, 9, 2, 5, 8, 1, 4, 7];

export const rows = ['369', '258', '147', '321', '654', '987', '357', '951'];

class MagicSquare extends Square {
    public input: Date | string;
    public exists: string[] = [];
    public missing: string[] = [];
    public threeTimes: number[];

    constructor(input: Date | string) {
        super(square);

        this.input = input;

        const dateNumbers = this.splitNumbers(input);

        this.actualSquare = Square.fillSquare(dateNumbers, this.square);

        this.findRows();

        this.threeTimes = this.getThreeTimes();
    }

    public splitNumbers(input: Date | string): number[] {
        if (typeof input === 'string') {
            return input.split('').map((str) => {
                let num;

                if (isNaN(parseInt(str, 10))) {
                    num = new Gematria(str).small + '';
                } else {
                    num = str;
                }

                return parseInt(num, 10);
            });
        } else {
            const date = input;
            return `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}`
                .split('').map((num) => parseInt(num, 10));
        }
    }

    public findOccurence(num: number, existing = true): boolean {
        if (existing) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.actualSquare.flat()[this.square.indexOf(num)] !== '0';
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this.actualSquare.flat()[this.square.indexOf(num)] === '0';
        }
    }

    public getRow(arr: number[]): boolean {
        return arr.map((num) => this.findOccurence(num)).every((value) => value);
    }

    public getThreeTimes(): number[] {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const flat = this.actualSquare.flat();

        return flat.map((num: string) => {
            return parseInt((Math.floor((parseInt(num, 10) / 100)) + '').split('').shift() || '', 10);
        }).filter((num: any) => num).sort((a: number, b: number) => a - b);
    }

    private findRows(): void {
        rows.forEach((row) => {
            const nums = row.split('').map((num) => parseInt(num, 10));
            if (nums.map((num) => this.findOccurence(num, true)).every((num) => num)) {
                this.exists.push(row);
            }

            if (nums.map((num) => this.findOccurence(num, false)).every((num) => num)) {
                this.missing.push(row);
            }
        });
    }
}

export default MagicSquare;
