import ProminentAgesDate from '@/models/calculations/prominentAgesDate';

describe('prominent ages according to the date', () => {
    describe('calculates well', () => {
        describe('26/7/1967', () => {
            const date = new Date('1967-7-26');
            const ages = new ProminentAgesDate(date);
            it('prominentAge1', () => {
                expect(ages.prominentAge1).toBe(38);
            });
            it('prominentAge2', () => {
                expect(ages.prominentAge2).toBe(56);
            });

        });

        describe('15/11/1980', () => {
            const date = new Date('1980-11-15');
            const ages = new ProminentAgesDate(date);
            it('prominentAge1', () => {
                expect(ages.prominentAge1).toBe(26);
            });
            it('prominentAge2', () => {
                expect(ages.prominentAge2).toBe(44);
            });
        });
    });
});
