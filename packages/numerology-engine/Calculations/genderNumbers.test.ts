import GenderNumbers from "./genderNumbers";
import {Gender} from "../interfaces/props";
import {CoupleProps} from "../MainTools/Couple";


describe('genderNumbers', () => {
    it('calculates gender number well', () => {
        expect(GenderNumbers.getGender(1)).toBe(Gender.MALE);
        expect(GenderNumbers.getGender(2)).toBe(Gender.FEMALE);
        expect(GenderNumbers.getGender(3)).toBe(Gender.FEMALE);
        expect(GenderNumbers.getGender(4)).toBe(Gender.MALE);
        expect(GenderNumbers.getGender(5)).toBe(Gender.MALE);
        expect(GenderNumbers.getGender(6)).toBe(Gender.FEMALE);
        expect(GenderNumbers.getGender(7)).toBe(Gender.FEMALE);
        expect(GenderNumbers.getGender(8)).toBe(Gender.MALE);
        expect(GenderNumbers.getGender(9)).toBe(Gender.FEMALE);
    });

    it('couple', () => {
        const avi: CoupleProps = {
            firstName: 'אבי',
            familyName: 'לבקוביץ',
            birthDate: new Date('1980-9-16'),
        };

        const maya: CoupleProps = {
            firstName: 'מאיה',
            familyName: 'לבקוביץ',
            birthDate: new Date('1979-9-25'),
        };

        const couple = new Couple(avi, maya);
        const genderNumbers = new GenderNumbers(couple.Partner1, couple.Partner2);

        expect(genderNumbers.numbers1).toStrictEqual({
            birthDay: 7,
            birthMonth: 9,
            birthYear: 9,
            destiny: 7,
            firstName: 4,
            hilltops: [7, 7, 5, 9],
        });

        expect(genderNumbers.numbers2).toStrictEqual({
            birthDay: 7,
            birthMonth: 9,
            birthYear: 8,
            destiny: 6,
            firstName: 2,
            hilltops: [7, 6, 4, 8],
        });

        expect(Array.from(genderNumbers.male.entries()).map((r) => r[1])).toStrictEqual([
            [],
            [4, 4],
            [5],
            [8, 8],
        ]);

        expect(Array.from(genderNumbers.female.entries()).map((r) => r[1])).toStrictEqual([
            [2],
            [],
            [6, 6],
            [7, 7, 7, 7, 7, 7],
            [9, 9, 9, 9],
        ]);
    });
});
