import MainTriangle from "./mainTriangle";
import MatchNameBirth from "./matchNameBirth";

const date = new Date('1979-9-25');
const triangle = new MainTriangle(date, 'מאיה');

describe('match name/birth', () => {
    it('calculates well', () => {
        const match = new MatchNameBirth(triangle);
        expect(match.rows).toBe(3);
        expect(match.hard).toBe(0);
        expect(match.light).toBe(3);
    });

    it('calculates square', () => {
        const square = MatchNameBirth.fillSquare(MatchNameBirth.getTriangle(triangle), [1, 5, 7, 2, 4, 8, 3, 6, 9]);
        expect(square).toStrictEqual([['0', '0', '7'], ['2', '0', '0'], ['0', '6', '0']]);
    });

    it('chunk', () => {
        const square = MatchNameBirth.chunk([0, 0, 7, 2, 0, 0, 3, 6, 0].map((num) => '' + num));
        expect(square).toStrictEqual([['0', '0', '7'], ['2', '0', '0'], ['3', '6', '0']]);
    });

    it('count rows', () => {
        expect(MatchNameBirth.countRows(MatchNameBirth
            .chunk([0, 0, 7, 2, 0, 0, 0, 6, 0].map((num) => '' + num))))
            .toBe(3);
        expect(MatchNameBirth.countRows(MatchNameBirth
            .chunk([0, 0, 0, 2, 0, 0, 0, 6, 0].map((num) => '' + num))))
            .toBe(2);
        expect(MatchNameBirth.countRows(MatchNameBirth
            .chunk([0, 0, 0, 0, 0, 0, 0, 6, 0].map((num) => '' + num))))
            .toBe(1);
        expect(MatchNameBirth.countRows(MatchNameBirth
            .chunk([0, 0, 0, 0, 0, 0, 0, 0, 0].map((num) => '' + num))))
            .toBe(0);
    });
});
