import Couple, {CoupleProps} from "./Couple";

describe('couple', () => {
    let couple: Couple;
    describe('calculates well', () => {
        beforeEach(() => {
            const dina: CoupleProps = {
                firstName: 'דינה',
                familyName: 'אורן',
                birthDate: new Date('1935-10-5'),
            };

            const elazar: CoupleProps = {
                firstName: 'אלעזר',
                familyName: 'דרורי',
                birthDate: new Date('1932-5-10'),
            };

            couple = new Couple(dina, elazar);
        });

        it('weakPointNames', () => {
            expect(couple.weakPointNames).toBe(6);
        });

        it('weakPointBirthDate', () => {
            expect(couple.weakPointBirthDate).toBe(3);
        });

        it('weakPointBirthDay', () => {
            expect(couple.weakPointBirthDay).toBe(5);
        });

        it('comparisonNames', () => {
            expect(couple.comparisonNames).toBe('2-8');
        });

        it('comparisonBirthDates', () => {
            expect(couple.comparisonBirthDates).toBe('3-6');
        });
    });
});

describe.skip('Sarit Atias', () => {
    describe('test 2', () => {
        it('nothing', () => {
            const sarit: CoupleProps = {
                firstName: 'שרית',
                familyName: 'אטיאס',
                birthDate: new Date('1993-1-28'),
            };

            const tal: CoupleProps = {
                firstName: 'טל',
                familyName: 'ישי',
                birthDate: new Date('1988-10-19'),
            };

            const couple = new Couple(sarit, tal);

            expect(true).toBeTruthy();
        });
    });

    describe('test 3', () => {
        it('nothing', () => {
            const sarit: CoupleProps = {
                firstName: 'שרית',
                familyName: 'אטיאס',
                birthDate: new Date('1993-1-28'),
            };

            const tal: CoupleProps = {
                firstName: 'טל',
                familyName: 'פרג',
                birthDate: new Date('1988-10-24'),
            };

            const couple = new Couple(sarit, tal);

            expect(true).toBeTruthy();
        });
    });
});
