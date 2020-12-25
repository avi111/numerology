import MagicSquare from '@/models/calculations/magicSquare';


describe('magic square', () => {
    it('calculates well 1979-9-25', () => {
        const date = new Date('1979-9-25');
        const magicSquare = new MagicSquare(date);
        expect(magicSquare.exists).toStrictEqual(['951']);
        expect(magicSquare.missing).toStrictEqual([]);
    });


    it('calculates well 1979-9-23', () => {
        const date = new Date('1979-9-23');
        const magicSquare = new MagicSquare(date);
        expect(magicSquare.exists).toStrictEqual(['321']);
        expect(magicSquare.missing).toStrictEqual(['654']);
    });

    it('finds three times in date', () => {
        const date = new Date('1979-9-23');
        const magicSquare = new MagicSquare(date);
        const threeTimes = magicSquare.getThreeTimes();
        expect(threeTimes.length > 0).toBeTruthy();
        expect(threeTimes).toStrictEqual([9]);
    });

    it('finds three times in string', () => {
        const str = '111133334';
        const magicSquare = new MagicSquare(str);
        const threeTimes = magicSquare.getThreeTimes();
        expect(threeTimes.length > 0).toBeTruthy();
        expect(threeTimes).toStrictEqual([1, 3]);
    });
});
