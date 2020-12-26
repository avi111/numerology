import Gematria from "../../helpers/Gematria/Gematria";
import {Triangle} from "./mainTriangle";
import {TriangleProps} from "../../interfaces/triangle";

export const hilltopNames = [
    'search',
    'exit',
    'pegging',
    'harvesting',
];

class Hilltops implements Partial<Triangle>, TriangleProps {
    public birthDay: number;
    public birthMonth: number;
    public birthYear: number;
    public destiny: number;

    public triangle: Triangle;
    public hilltop: number[] = [];
    public challenge: number[] = [];
    public extension: number[] = [];
    public hiddenHilltop: number[] = [];
    public hilltopNames: string[] = hilltopNames;

    /*
        getWord('search')
        getWord('exit')
        getWord('pegging')
        getWord('harvesting')
     */

    constructor(triangle: Triangle) {
        this.triangle = triangle;
        this.birthDay = triangle.birthDay;
        this.birthMonth = triangle.birthMonth;
        this.birthYear = triangle.birthYear;
        this.destiny = triangle.destiny;
        this.generateArray(4).forEach((num) => this.calculateHilltop(num));
        this.generateArray(4).forEach((num) => this.calculateChallenge(num));
        this.generateArray(8).forEach((num) => this.calculateExtension(num));
        this.generateArray(4).forEach((num) => this.calculateHiddenChallenge(num));
    }

    public generateArray(num: number): number[] {
        const arr = Object.keys(Array(num).fill(0));
        return arr.map((el) => parseInt(el, 10));
    }

    public calculateHilltop(num: number): void {
        let value;
        switch (num + 1) {
            case 1:
                value = this.birthDay + this.birthMonth;
                break;
            case 2:
                value = this.birthDay + this.birthYear;
                break;
            case 3:
                value = this.hilltop[num - 2] + this.hilltop[num - 1];
                break;
            case 4:
                value = this.birthMonth + this.birthYear;
                break;
            default:
                return;
        }

        this.hilltop[num] = new Gematria('' + Math.abs(value)).small;
    }

    public calculateChallenge(num: number): void {
        let value;
        switch (num + 1) {
            case 1:
                value = this.birthDay - this.birthMonth;
                break;
            case 2:
                value = this.birthDay - this.birthYear;
                break;
            case 3:
                value = this.hilltop[num - 2] - this.hilltop[num - 1];
                break;
            case 4:
                value = this.birthMonth - this.birthYear;
                break;
            default:
                return;
        }

        this.challenge[num] = new Gematria('' + Math.abs(value)).small;
    }

    public calculateExtension(num: number): void {
        const {destiny} = this.triangle;
        let value;

        switch (num + 1) {
            case 1:
            case 2:
            case 3:
            case 4:
                value = this.hilltop[num] + this.challenge[num];
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                value = this.hilltop[num - 4] + destiny;
                break;
            default:
                return;
        }

        this.extension[num] = new Gematria('' + Math.abs(value)).small;
    }

    public calculateHiddenChallenge(num: number): void {
        const {birthDay: day, birthMonth: month, birthYear: year} = this;
        const {destiny} = this.triangle;

        let value;

        switch (num + 1) {
            case 1:
                value = this.hilltop[num] + day;
                break;
            case 2:
                value = this.hilltop[num] + month;
                break;
            case 3:
                value = this.hilltop[num] + year;
                break;
            case 4:
                value = this.hilltop[num] + destiny;
                break;
            default:
                return;
        }

        this.hiddenHilltop[num] = new Gematria('' + Math.abs(value)).small;
    }

    public getLifePeriods() {
        const start = 27 - this.destiny;
        const period = 9;
        let year = start;
        const periods = [];
        while (year < 120 || periods.length < 8) {
            periods.push(`${year} - ${year + period - 1}`);
            year += period;
        }

        return periods;
    }

    public getTable() {
        const periods = this.getLifePeriods();
        return {
            hilltopNames: this.hilltopNames,
            hiddenHilltops: this.hiddenHilltop,
            extension1: this.extension.slice(0, 4),
            extension2: this.extension.slice(4, 8),
            challenges: this.challenge,
            hilltops: this.hilltop,
            periods1: periods.slice(0, 4),
            periods2: periods.slice(4, 8),
        };
    }
}

export default Hilltops;
