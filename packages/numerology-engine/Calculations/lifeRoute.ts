import Gematria from "../helpers/Gematria/Gematria";
import Letters from "../helpers/Letters/letters";
import {REGULAR_LETTERS, SUFFIX_LETTERS} from "../consts/letters";

const NUMBER_LETTERS = 9;

class LifeRoute {

    public _name: string;
    public _graph: number[][] = [];
    public _lifeRoute: number;

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = LifeRoute.chop(name, NUMBER_LETTERS);
        this._lifeRoute = this.calculate();
    }

    public static minimizeRow(row: number[]): number[] {
        return row.map((num: number, index: number) => {
            return index && new Gematria(row[index] + row[index - 1] + '').small;
        }).filter((num) => num);
    }

    public static chop(inputName: string, num: number) {
        let outputName;
        outputName = inputName.replace(/["'\s.]/gm, '');
        outputName = Letters.str_replace(SUFFIX_LETTERS, REGULAR_LETTERS, outputName);
        return outputName.slice(0, num);
    }

    private calculate(): number {
        let numbers: number[] = this.name.split('').map((letter) => new Gematria(letter).small);
        while (numbers.length > 1) {
            this._graph.push(numbers);
            numbers = LifeRoute.minimizeRow(numbers);
        }

        return numbers.shift() as number;
    }
}

export default LifeRoute;
