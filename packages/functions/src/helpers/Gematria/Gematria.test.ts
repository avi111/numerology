import Gematria from "./Gematria";

describe('Gematria', () => {
    describe('calculates well words', () => {
        describe('avi', () => {
            let avi: Gematria;
            beforeEach(() => {
                avi = new Gematria('אבי');
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
            let maya: Gematria;
            beforeEach(() => {
                maya = new Gematria('מאיה');
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
        const birthday = Gematria.filterNotHebrewOrNumbers('25/9/1979');
        expect(birthday).toBe('2591979');
    });

    it('calculates well numbers', () => {
        const birthday = new Gematria('2591979');
        expect(birthday.small).toBe(6);
    });

    it('splits number to digits', () => {
        const divided = Gematria.splitToDigits(130);
        expect(divided).toStrictEqual([1, 3, 0]);
    });

    it('converts to word', () => {
        expect(Gematria.convertToWord(['1', '4', '5'])).toBe('אדה');
        expect(Gematria.convertToWord(['2', '4'])).toBe('בד');
        expect(Gematria.convertToWord(['2', 'ד'])).toBe('בד');
        expect(Gematria.convertToWord(['2', 'ד', 'r'])).toBe('בד');
    });
});
