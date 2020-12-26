import LifeRoute from "./lifeRoute";
import Letters from "../helpers/Letters/letters";
import {REGULAR_LETTERS, SUFFIX_LETTERS} from "../consts/letters";


describe('Life Routes', () => {
    describe('slices name to 9 character or less', () => {
        it('מאיה לבקוביץ', () => {
            expect(LifeRoute.chop('מאיה לבקוביץ', 9)).toBe('מאיהלבקוב');
        });
        it('ברוך חן', () => {
            expect(LifeRoute.chop('ברוך חן', 9)).toBe('ברוכחנ');
        });
        it(`ג'ו דחב"ש`, () => {
            expect(LifeRoute.chop(`ג'ו דחב"ש`, 9)).toBe('גודחבש');
        });
    });

    describe('Replace multiple strings at once', () => {
        it('ברוך', () => {
            const result = Letters.str_replace(SUFFIX_LETTERS, REGULAR_LETTERS, 'ברוך');
            expect(result).toBe('ברוכ');
        });

        it('מאיה', () => {
            const result = Letters.str_replace(SUFFIX_LETTERS, REGULAR_LETTERS, 'מאיה');
            expect(result).toBe('מאיה');
        });

    });

    it('minimizes to the next row well', () => {
        expect(LifeRoute.minimizeRow([2, 6, 1, 2, 3, 5, 1, 1, 4]))
            .toStrictEqual([8, 7, 3, 5, 8, 6, 2, 5]);
        expect(LifeRoute.minimizeRow([8, 7, 3, 5, 8, 6, 2, 5]))
            .toStrictEqual([6, 1, 8, 4, 5, 8, 7]);
        expect(LifeRoute.minimizeRow([6, 1, 8, 4, 5, 8, 7]))
            .toStrictEqual([7, 9, 3, 9, 4, 6]);
    });

    describe('check class functionality', () => {
        let route: LifeRoute;

        beforeEach(() => {
            route = new LifeRoute('מאיה לבקוביץ');
        });

        it('checks that name has no more than 9 characterss', () => {
            expect(route._name.length).toBe(9);
        });

        it('calculates well route number', () => {
            expect(route._lifeRoute).toBe(9);
        });
    });
});
