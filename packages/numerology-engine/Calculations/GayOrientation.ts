import MainTriangle from "./mainTriangle";
import Hilltops from "./hilltops";
import MagicSquare from "./magicSquare";

export interface Appearance {
    hilltop: number[];
    challenge: number[];
    day: number;
    month: number;
    year: number;
    destiny: number;
    firstName: number;
    magicSquare?: number[];
}

class GayOrientation {
    public appearance?: Appearance;
    private mainTriangle: MainTriangle;
    private hilltops: Hilltops;
    private magicSquare?: MagicSquare;

    constructor(mainTriangle: MainTriangle, hilltops: Hilltops, magicSquare?: MagicSquare) {
        this.mainTriangle = mainTriangle;
        this.hilltops = hilltops;
        this.magicSquare = magicSquare;
        this.filterGay = this.filterGay.bind(this);
    }

    public static getGayOrientation(
        mainTriangle: MainTriangle,
        hilltops: Hilltops,
        magicSquare?: MagicSquare,
    ): GayOrientation {
        const gay = new GayOrientation(mainTriangle, hilltops, magicSquare);
        gay.setAppearance();
        return gay;
    }

    public isGay(num: number): boolean {
        return [2, 6, 8].indexOf(num) !== -1;
    }

    public filterGayArr(arr: number[]): number[] {
        const {filterGay} = this;
        return arr.map((num) => filterGay(num));
    }

    public filterGay(num: number): number {
        return this.isGay(num) ? num : 0;
    }

    public getAppearance(): Appearance {
        return {
            destiny: this.filterGay(this.mainTriangle.destiny),
            firstName: this.filterGay(this.mainTriangle.firstName),
            day: this.filterGay(this.mainTriangle.birthDay),
            month: this.filterGay(this.mainTriangle.birthDay),
            year: this.filterGay(this.mainTriangle.birthDay),
            hilltop: this.filterGayArr(this.hilltops.hilltop),
            challenge: this.filterGayArr(this.hilltops.challenge),
            magicSquare: this.magicSquare &&
                this.filterGayArr(
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.magicSquare.actualSquare.flat()
                        .map((n: string[]) => parseInt(n[0] + '', 10))),
        };
    }

    public setAppearance() {
        this.appearance = this.getAppearance();
    }


}

export default GayOrientation;
