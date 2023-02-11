import ContraGematria from "../Gematria/ContraGematria";
import HebDates from "./hebDates";
import {months} from "../../consts/letters";

describe('HebDate', () => {
    it('years', () => {
        expect(HebDates.getHebYearName(5780)).toBe(`ה'תש"פ`);
    });

    it('months', () => {
        for (let month = 0; month < 20; month++) {
            if (month > 0 || month < 13) {
                expect(HebDates.getHebMonthName(month)).toBe(months[month - 1]);
            } else {
                expect(HebDates.getHebMonthName(month)).toBe(undefined);
            }
        }
    });

    it('days', () => {
        for (let day = 0; day < 40; day++) {
            if (day > 0 || day < 31) {
                expect(HebDates.getHebDayName(day)).toBe(new ContraGematria(day).gematria);
            } else {
                expect(HebDates.getHebDayName(day)).toBe('');
            }
        }
    });

    it('get translation', () => {
        expect(HebDates.getHebMonthByEn('Kislev')).toBe('כסלו');
        expect(HebDates.getHebMonthByEn('Nisan')).toBe('ניסן');
        expect(HebDates.getHebMonthByEn('Adar')).toBe('אדר');
    });

    // TODO: mock fetch
    describe.skip('HebDate calculate well', () => {
            it('maya', async () => {
                const hebDate = new HebDates(new Date('1979-9-25'));
                await hebDate.getDate();
                expect(hebDate.hebYear).toBe(5740);
                expect(hebDate.hebMonth).toBe(7);
                expect(hebDate.hebDay).toBe(4);
            }, 30000);

            it('avi', async () => {
                const hebDate = new HebDates(new Date('1980-9-16'));
                await hebDate.getDate();
                expect(hebDate.hebYear).toBe(5741);
                expect(hebDate.hebMonth).toBe(7);
                expect(hebDate.hebDay).toBe(6);
            }, 30000);
        },
    );

    // TODO: mock fetch
    describe.skip('gets Parashah', () => {
        it('maya', async (done: jest.DoneCallback) => {
            const hebDate = new HebDates(new Date('1979-9-25'));
            const result = await hebDate.getParashah();
            expect(result && result.parashah).toBeDefined();
            expect(result && result.ref).toBeDefined();

            if (result && result.ref) {
                expect(result.ref.end).toBeDefined();
                expect(result.ref.begin.pasuk).toBeDefined();
                expect(result.ref.begin.chapter).toBeDefined();
                expect(result.ref.begin.pasuk).toBeDefined();
                expect(result.ref.begin.chapter).toBeDefined();
            }

            done();
        }, 30000);

        it('itamar', async (done: jest.DoneCallback) => {
            const hebDate = new HebDates(new Date('2014-3-31'));
            const result = await hebDate.getParashah();
            expect(result && result.parashah).toBeDefined();
            expect(result && result.ref).toBeDefined();

            if (result && result.ref) {
                expect(result.ref.end).toBeDefined();
                expect(result.ref.begin.pasuk).toBeDefined();
                expect(result.ref.begin.chapter).toBeDefined();
                expect(result.ref.begin.pasuk).toBeDefined();
                expect(result.ref.begin.chapter).toBeDefined();
            }

            done();
        }, 30000);
    });
});
