import Name from '@/models/calculations/name';

describe('letters', () => {
    it('calculates well', () => {
        const mainTriangle = new Name('לבקוביץ', 'מאיה');
        expect(mainTriangle.fullNameValue).toBe(8);
        expect(mainTriangle.firstNameValue).toBe(2);
        expect(mainTriangle.ehevi).toBe(5);
        expect(mainTriangle.itzurim).toBe(3);
    });

    it('name value', () => {
        expect(Name.calculateFirstNameValue('מאיה')).toBe(2);
    });

    it('full name value', () => {
        expect(Name.calculateFullNameValue('מאיה לבקוביץ')).toBe(8);
    });

    it('ehevi value', () => {
        expect(Name.calculateEhevi('מאיה לבקוביץ')).toBe(5);
    });

    it('itzurim value', () => {
        expect(Name.calculateItzurim('מאיה לבקוביץ')).toBe(3);
    });

    it('calculate periods', () => {
        const name = 'מאיה';
        const value = 11;

        const periods: Array<number[] | undefined> = Name.calculatePeriods(name);
        const periodsDisplay: Array<string[] | undefined> = Name.displayPeriods(periods);

        let first;
        // last element in every period should be a multiplication of 11
        for (let i = 1; i <= 4; i++) {
            first = periods.shift();
            expect(first && first.pop()).toBe(value * i);
        }

        expect((periodsDisplay.slice(0, 1)[0] as string[])[0]).toBe('0 - 4');
        expect((periodsDisplay.slice(0, 1)[0] as string[])[name.length]).toBe('0 - 11');
        expect((periodsDisplay.slice(1, 2)[0] as string[])[0]).toBe('11 - 15');
        expect((periodsDisplay.slice(1, 2)[0] as string[])[name.length]).toBe('11 - 22');
        expect((periodsDisplay.slice(2, 3)[0] as string[])[0]).toBe('22 - 26');
        expect((periodsDisplay.slice(2, 3)[0] as string[])[name.length]).toBe('22 - 33');
    });
});
