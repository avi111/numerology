import Chakra from "./Chakra";

describe('Chakra', () => {
    describe('maya', () => {
        const chakra = new Chakra(new Date('1979-09-25'), 'מאיה', 'לבקוביץ');
        const chakras = chakra.getChakras();

        it('chakra', () => {
            expect(chakras.base.value).toStrictEqual([13, 4]);
            expect(chakras.sex.value).toStrictEqual([8]);
            expect(chakras.solarPlexus.value).toStrictEqual([14, 5]);
            expect(chakras.heart.value).toStrictEqual([9]);
            expect(chakras.throat.value).toStrictEqual([11, 2]);
            expect(chakras.thirdEye.value).toStrictEqual([1]);
            expect(chakras.crown.value).toStrictEqual([11, 2]);
            expect(chakras.ID.value).toStrictEqual([1]);
            expect(chakras.universe.value).toStrictEqual([8]);
            expect(chakras.super.value).toStrictEqual([3]);
        });

        it('fire numbers', () => {
            const fireNumbers = chakra.getFireNumbers();
            expect(fireNumbers.sex).toStrictEqual([8]);
            expect(fireNumbers.throat).toStrictEqual([5]);
        });

        it('good numbers', () => {
            const good = chakra.getGoodNumbers();
            expect(good).toStrictEqual([11]);
        });

        it('bad numbers', () => {
            const bad = chakra.getBadNumbers();
            expect(bad).toStrictEqual([14, 16]);
        });

        it('help numbers', () => {
            const help = chakra.getHelpNumbers();
            expect(help.sex).toStrictEqual([8]);
        });

        it('six numbers', () => {
            const six = chakra.getSixNumbers();
            expect(six).toStrictEqual([
                51,
                6,
                43,
                7,
                13,
                4,
            ]);
        });
    });

    describe('avi', () => {
        const chakra = new Chakra(new Date('1980-09-16'), 'אבי', 'לבקוביץ');
        const chakras = chakra.getChakras();

        it('chakra', () => {
            expect(chakras.base.value).toStrictEqual([11, 2]);
            expect(chakras.sex.value).toStrictEqual([1]);
            expect(chakras.solarPlexus.value).toStrictEqual([15, 6]);
            expect(chakras.heart.value).toStrictEqual([13, 4]);
            expect(chakras.throat.value).toStrictEqual([15, 6]);
            expect(chakras.thirdEye.value).toStrictEqual([13, 4]);
            expect(chakras.crown.value).toStrictEqual([11, 2]);
            expect(chakras.ID.value).toStrictEqual([9]);
            expect(chakras.universe.value).toStrictEqual([6]);
            expect(chakras.super.value).toStrictEqual([5]);
        });

        it('fire numbers', () => {
            const fireNumbers = chakra.getFireNumbers();
            expect(fireNumbers.sex).toStrictEqual([1]);
            expect(fireNumbers.throat).toStrictEqual([9]);
        });

        it('good numbers', () => {
            const good = chakra.getGoodNumbers();
            expect(good).toStrictEqual([1, 9]);
        });

        it('bad numbers', () => {
            const bad = chakra.getBadNumbers();
            expect(bad).toStrictEqual([13, 15, 16]);
        });

        it('help numbers', () => {
            const help = chakra.getHelpNumbers();
            expect(help.sex).toStrictEqual([1]);
        });

        it('six numbers', () => {
            const six = chakra.getSixNumbers();
            expect(six).toStrictEqual([
                53,
                8,
                45,
                9,
                17,
                8,
            ]);
        });
    });
});
