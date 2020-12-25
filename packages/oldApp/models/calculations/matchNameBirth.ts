import {Triangle} from '@/models/calculations/mainTriangle';
import Square from '@/models/helpers/square';

const square = [
    1, 5, 7, 2, 4, 8, 3, 6, 9,
];

const hard = [1, 4, 8, 9];
const light = [2, 3, 5, 6, 7];

class MatchNameBirth extends Square {

    public triangle: Triangle;
    public hard: number;
    public light: number;
    public rows: number;

    constructor(triangle: Triangle) {
        super(square);
        this.triangle = triangle;
        this.actualSquare = Square.fillSquare(MatchNameBirth.getTriangle(triangle), this.square);
        this.rows = MatchNameBirth.countRows(this.actualSquare);
        this.hard = this.countHard(triangle);
        this.light = this.countLight(triangle);
    }

    public static countRows(arr: string[][]): number {
        return arr.map((row) => !row.every((el) => el === '0'))
            .filter((row) => row)
            .length;
    }

    public static getTriangle(triangle: Triangle): number[] {
        return [triangle.destiny, triangle.birthDay, triangle.firstName];
    }

    public countHard(triangle: Triangle): number {
        return MatchNameBirth.getTriangle(triangle).map((num) => hard.indexOf(num) !== -1).filter((num) => num).length;
    }

    public countLight(triangle: Triangle): number {
        return MatchNameBirth.getTriangle(triangle).map((num) => light.indexOf(num) !== -1).filter((num) => num).length;
    }
}

export default MatchNameBirth;
