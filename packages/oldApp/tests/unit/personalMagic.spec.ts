import PersonalMagic from '@/models/calculations/triangle/personalMagic';
import MainTriangle from '@/models/calculations/mainTriangle';

describe('personal magic', () => {
    describe('calculates well', () => {
        it('מיכל', () => {
            const name = 'מיכל';
            const triangle = new MainTriangle(new Date('1948/01/23'), name, '');
            expect(new PersonalMagic(name, triangle.destiny).result).toBe(1);
        });

        it('עדנה', () => {
            const name = 'עדנה';
            const triangle = new MainTriangle(new Date('1982/10/30'), name, '');
            expect(new PersonalMagic(name, triangle.destiny).result).toBe(4);
        });
    });
});
