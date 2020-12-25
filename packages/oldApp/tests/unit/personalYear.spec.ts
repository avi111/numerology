import PersonalYear from '@/models/calculations/personalYear';
import MainTriangle from '@/models/calculations/mainTriangle';
import FakeTime from '@/models/helpers/fakeTime';

describe('personal year', () => {
    describe('calculates well', () => {
        const date = new Date('1979-9-25');
        const personal = new PersonalYear(
            date,
            new MainTriangle(date, 'מאיה'),
        );

        it('kabbalic', () => {
            expect(personal.kabbalic).toBe(2);
        });
        it('hidden', () => {
            expect(personal.hidden).toBe(7);
        });
        it('western', () => {
            expect(personal.western).toBe(1);
        });
    });

    it('calculates personal month', () => {
        expect(PersonalYear.calculatePersonalMonth(new Date('2020-2-12'), 1)).toBe(3);
    });

    it('gets personal months table values', () => {
        const map = new Map<number, number>();
        [
            {key: -2, value: 1},
            {key: -1, value: 8},
            {key: 0, value: 9},
            {key: 1, value: 1},
            {key: 2, value: 1},
            {key: 3, value: 1},
            {key: 4, value: 1},
            {key: 5, value: 1},
            {key: 6, value: 1},
            {key: 7, value: 1},
            {key: 8, value: 1},
            {key: 9, value: 1},
            {key: 10, value: 1},
        ]
            .forEach((obj) => {
                map.set(obj.key, obj.value);
            });
        const expected = [
            {
                month: '12/2019',
                value: 1,
                meaning: '',
            },
            {
                month: '1/2020',
                value: 8,
                meaning: '',
            },
            {
                month: '2/2020',
                value: 9,
                meaning: '',
                _rowVariant: 'success',
            },
            {
                month: '3/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '4/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '5/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '6/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '7/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '8/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '9/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '10/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '11/2020',
                value: 1,
                meaning: '',
            },
            {
                month: '12/2020',
                value: 1,
                meaning: '',
            },
        ];
        // @ts-ignore
        const result = new FakeTime(
            PersonalYear.PersonalMonthValues,
            // @ts-ignore
            [map, (num) => ''],
            '2020-02-22T10:20:30Z').result;
        expect(result).toStrictEqual(expected);

    });
});
