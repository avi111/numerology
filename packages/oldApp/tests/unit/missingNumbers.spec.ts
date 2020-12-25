import MissingNumbers from '@/models/calculations/missingNumbers';

describe('missing numbers', () => {
    it('calculating well', () => {
        const missingNumbers = new MissingNumbers('מאיה', 'לבקוביץ כהן');
        expect(missingNumbers.getOccurencce(2)).toBe(3);
        expect(missingNumbers.getOccurencce(7)).toBe(0);
        expect(missingNumbers.getOccurencce(8)).toBe(0);
        expect(missingNumbers.getOccurencce(9)).toBe(1);
        expect(missingNumbers.getOccurencce(0)).toBe(0);
        expect(missingNumbers.isMissing(7)).toBeTruthy();
        expect(missingNumbers.isMissing(5)).toBeFalsy();
    });
});
