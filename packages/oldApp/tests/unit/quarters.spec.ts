import Quarters from '@/models/calculations/quarters';
import MainTriangle from '@/models/calculations/mainTriangle';
import FakeTime from '@/models/helpers/fakeTime';

describe('quarters', () => {
    it('calculates well', () => {
        const date = new Date('1979-9-25');
        const time = new FakeTime(() => {
            const triangle = new MainTriangle(date, 'מאיה');
            const quarters = new Quarters(triangle, date);
            expect(quarters.quarters).toStrictEqual([9, 7, 7, 4]);
            expect(quarters.months).toStrictEqual([
                [9, 11],
                [12, 2],
                [3, 5],
                [6, 8],
            ]);

        }, []);
    });

    it('calculates well last year', () => {
        const date = new Date('1979-9-25');
        const time = new FakeTime(() => {
            const triangle = new MainTriangle(date, 'מאיה');
            const quarters = new Quarters(triangle, date, 1);
            expect(quarters.quarters).toStrictEqual([1, 8, 9, 6]);
        }, []);
    });
});
