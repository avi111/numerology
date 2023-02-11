import MainTriangle from "./mainTriangle";
import Hilltops from "./hilltops";

describe('hilltops & challenges', () => {
    it('calculates well', () => {
        const date = new Date('1979-9-25');
        const triangle = new MainTriangle(date, 'מאיה');
        const hilltop = new Hilltops(triangle);
        expect(hilltop.hilltop[0]).toBe(7);
        expect(hilltop.hilltop[1]).toBe(6);
        expect(hilltop.hilltop[2]).toBe(4);
        expect(hilltop.hilltop[3]).toBe(8);
        expect(hilltop.challenge[0]).toBe(2);
        expect(hilltop.challenge[1]).toBe(1);
        expect(hilltop.challenge[2]).toBe(1);
        expect(hilltop.challenge[3]).toBe(1);
        expect(hilltop.extension[0]).toBe(9);
        expect(hilltop.extension[1]).toBe(7);
        expect(hilltop.extension[2]).toBe(5);
        expect(hilltop.extension[3]).toBe(9);
        expect(hilltop.extension[4]).toBe(4);
        expect(hilltop.extension[5]).toBe(3);
        expect(hilltop.extension[6]).toBe(1);
        expect(hilltop.extension[7]).toBe(5);
        expect(hilltop.hiddenHilltop[0]).toBe(5);
        expect(hilltop.hiddenHilltop[1]).toBe(6);
        expect(hilltop.hiddenHilltop[2]).toBe(3);
        expect(hilltop.hiddenHilltop[3]).toBe(5);

        const periods = hilltop.getLifePeriods();
        expect(periods.length).toBeGreaterThanOrEqual(8);

        const table = hilltop.getTable();
        expect(table.periods1.length).toBe(4);
        expect(table.periods2.length).toBe(4);
    });


});
