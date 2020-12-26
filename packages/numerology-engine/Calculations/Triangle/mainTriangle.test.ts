import MainTriangle from "./mainTriangle";
import HebDates from "../../helpers/Dates/hebDates";

describe('calculates well main triangle', () => {
    describe('maya', () => {
        let mainTriangle: MainTriangle;
        beforeEach(() => {
            mainTriangle = new MainTriangle(new Date('1979-9-25'), 'מאיה', 'לבקוביץ');
        });

        it('birthDay', () => {
            expect(mainTriangle.birthDay).toBe(7);
        });

        it('destiny', () => {
            expect(mainTriangle.destiny).toBe(6);
        });

        it('firstName', () => {
            expect(mainTriangle.firstName).toBe(2);
        });

        it('threeTimesBirthDate', () => {
            expect(mainTriangle.threeTimesBirthDate).toStrictEqual([9]);
        });

        it('threeTimesName', () => {
            expect(mainTriangle.threeTimesName).toStrictEqual([]);
        });

        it('sumTriangle', () => {
            expect(mainTriangle.sumTriangle).toBe(6);
        });

        it('howFunctionsAsPartner', () => {
            expect(mainTriangle.howFunctionsAsPartner).toBe(7);
        });

        it('whatWantsInPartner', () => {
            expect(mainTriangle.whatWantsInPartner).toBe(6);
        });

        it('nameNumberSmall', () => {
            expect(mainTriangle.nameNumberSmall).toBe(11);
        });

        it('nameNumberBig', () => {
            expect(mainTriangle.nameNumberBig).toBe(11);
        });

        it('power', () => {
            expect(mainTriangle.power).toBe(5);
        });

        it('isMaster', () => {
            expect(MainTriangle.isMaster(mainTriangle.nameNumberSmall)).toBeTruthy();
        });

        it('isKarmatic', () => {
            expect(MainTriangle.isKarmatic(mainTriangle.nameNumberSmall)).toBeFalsy();
        });
    });

    describe('avi', () => {
        let mainTriangle: MainTriangle;
        beforeEach(() => {
            mainTriangle = new MainTriangle(new Date('1980-9-16'), 'אבי');
        });

        it('birthDay', () => {
            expect(mainTriangle.birthDay).toBe(7);
        });

        it('destiny', () => {
            expect(mainTriangle.destiny).toBe(7);
        });

        it('firstName', () => {
            expect(mainTriangle.firstName).toBe(4);
        });

        it('threeTimesBirthDate', () => {
            expect(mainTriangle.threeTimesBirthDate).toStrictEqual([]);
        });

        it('threeTimesName', () => {
            expect(mainTriangle.threeTimesName).toStrictEqual([]);
        });

        it('sumTriangle', () => {
            expect(mainTriangle.sumTriangle).toBe(9);
        });

        it('howFunctionsAsPartner', () => {
            expect(mainTriangle.howFunctionsAsPartner).toBe(7);
        });

        it('whatWantsInPartner', () => {
            expect(mainTriangle.whatWantsInPartner).toBe(7);
        });

        it('nameNumberSmall', () => {
            expect(mainTriangle.nameNumberSmall).toBe(4);
        });

        it('nameNumberBig', () => {
            expect(mainTriangle.nameNumberBig).toBe(13);
        });

        it('isMaster', () => {
            expect(MainTriangle.isMaster(mainTriangle.nameNumberBig)).toBeFalsy();
        });

        it('isKarmatic', () => {
            expect(MainTriangle.isKarmatic(mainTriangle.nameNumberBig)).toBeTruthy();
        });
    });

    it('calculates hebDate triangle', () => {
        let mainTriangle: MainTriangle;
        const date = new Date('1980-9-16');
        const hebDate = new HebDates(date);

        hebDate.getDate().then((hdate) => {
            const {hebDay, hebMonth, hebYear} = hdate;
            const hebBirthDate = new Date([hebDay, hebMonth, hebYear].reverse().join('-'));
            mainTriangle = new MainTriangle(hebBirthDate, 'אבי');
            expect(mainTriangle.firstName).toBe(4);
            expect(mainTriangle.destiny).toBe(3);
            expect(mainTriangle.birthDay).toBe(6);
        });
    });
});
