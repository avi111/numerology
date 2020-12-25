import ProminentAgesName from '@/models/calculations/prominentAgesName';

describe('prominent ages according to the name', () => {
    it('calculates well', () => {
        const periods = [
            [
                4,
                5,
                6,
                11,
            ],
            [
                15,
                16,
                17,
                22,
            ],
            [
                26,
                27,
                28,
                33,
            ],
            [
                37,
                38,
                39,
                44,
            ],
        ];

        const ages = new ProminentAgesName(periods);
        expect(ages.prominent1).toStrictEqual([
            0,
            4,
            5,
            6,
            11,
            15,
            16,
            17,
            22,
            26,
            27,
            28,
            33,
            37,
            38,
            39,
        ]);
        expect(ages.prominent2).toStrictEqual([
            2,
            4.5,
            5.5,
            8.5,
            13,
            15.5,
            16.5,
            19.5,
            24,
            26.5,
            27.5,
            30.5,
            35,
            37.5,
            38.5,
        ]);
    });
});
