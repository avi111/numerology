import Gimatria from '@/models/helpers/gimatria';

describe('gimatria', () => {
    describe('calculates well words', () => {
        describe('avi', () => {
            let avi: Gimatria;
            beforeEach(() => {
                avi = new Gimatria('אבי');
            });

            it('small', () => {
                expect(avi.small).toBe(4);
            });

            it('big', () => {
                expect(avi.big).toBe(13);
            });

            it('recursiveBig', () => {
                expect(avi.getBig()).toBe(13);
            });
        });

        describe('maya', () => {
            let maya: Gimatria;
            beforeEach(() => {
                maya = new Gimatria('מאיה');
            });

            it('small', () => {
                expect(maya.small).toBe(2);
            });

            it('big', () => {
                expect(maya.big).toBe(56);
            });

            it('recursiveBig', () => {
                expect(maya.getBig()).toBe(11);
            });
        });

    });

    it('filters non hebrew/numbers', () => {
        const birthday = Gimatria.filterNotHebrewOrNumbers('25/9/1979');
        expect(birthday).toBe('2591979');
    });

    it('calculates well numbers', () => {
        const birthday = new Gimatria('2591979');
        expect(birthday.small).toBe(6);
    });

    it('splits number to digits', () => {
        const divided = Gimatria.splitToDigits(130);
        expect(divided).toStrictEqual([1, 3, 0]);
    });

    it('converts to word', () => {
        expect(Gimatria.convertToWord(['1', '4', '5'])).toBe('אדה');
        expect(Gimatria.convertToWord(['2', '4'])).toBe('בד');
        expect(Gimatria.convertToWord(['2', 'ד'])).toBe('בד');
        expect(Gimatria.convertToWord(['2', 'ד', 'r'])).toBe('בד');
    });
});
