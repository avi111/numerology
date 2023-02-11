import Name from "./name";
import Periods from "./periods";

describe('periods', () => {
    it('calculates well', () => {
        const name = 'אבי';
        const periodsDisplay: Array<string[] | undefined> = Name.displayPeriods(Name.calculatePeriods(name));
        const periods = new Periods(name, periodsDisplay).calculate();
        expect(name.split('').length + 1).toBe(periods.length);
        expect(periodsDisplay.length).toBe(Object.keys(periods[0] as object).length - 1);
    });
});
