import Year from '@/models/calculations/year';

describe('year', () => {
    describe('calculates well', () => {
        it(1978 + '', () => {
            const year = new Year(1978);
            expect(year.prominentAge).toBe(25);
            expect(year.oneDigit).toBe(7);
            expect(year.rightDigit).toBe(8);
        });

        it(1982 + '', () => {
            const year = new Year(1982);
            expect(year.prominentAge).toBe(20);
            expect(year.oneDigit).toBe(2);
            expect(year.rightDigit).toBe(2);
        });
    });
});
