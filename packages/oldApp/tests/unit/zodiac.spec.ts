import getZodiacSign from '@/models/calculations/zodiac';

describe('zodiac', () => {
    it('16-9-1980', () => {
        expect(getZodiacSign(new Date('1980-9-16'))).toBe('Virgo');
    });
});
