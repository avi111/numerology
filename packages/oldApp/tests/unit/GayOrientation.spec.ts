import MainTriangle from '@/models/calculations/mainTriangle';
import MagicSquare from '@/models/calculations/magicSquare';
import {Gender} from '@/interfaces/props';
import GayOrientation from '@/models/calculations/GayOrientation';
import Hilltops from '@/models/calculations/hilltops';

describe('Gay Orientation', () => {
    describe('calculates well', () => {
        const props = {
            birthDate: new Date('1980-9-16'),
            familyName: 'לבקוביץ',
            fatherName: 'יעקב',
            fatherNameAtBirthOfPatient: '',
            firstName: 'אבי',
            firstNameAtBirth: '',
            gender: Gender.MALE,
            motherName: 'טובה',
            motherNameAtBirthOfPatient: '',
            birthHour: false,
        };

        const {
            birthDate,
            firstName,
            familyName,
        } = props;

        const triangle = new MainTriangle(
            birthDate,
            firstName,
            familyName,
        );

        const hilltops = new Hilltops(triangle);

        const magicSquareName = new MagicSquare(birthDate);

        const gay = new GayOrientation(triangle, hilltops, magicSquareName);

        it('filters gay properly', () => {
            expect(gay.filterGay(0)).toBe(0);
            expect(gay.filterGay(1)).toBe(0);
            expect(gay.filterGay(2)).toBe(2);
            expect(gay.filterGay(3)).toBe(0);
            expect(gay.filterGay(4)).toBe(0);
            expect(gay.filterGay(5)).toBe(0);
            expect(gay.filterGay(6)).toBe(6);
            expect(gay.filterGay(7)).toBe(0);
            expect(gay.filterGay(8)).toBe(8);
            expect(gay.filterGay(9)).toBe(0);
        });

        it('filters gay array properly', () => {
            expect(gay.filterGayArr([1, 2, 3, 4, 5, 6, 7, 8, 9])).toStrictEqual([0, 2, 0, 0, 0, 6, 0, 8, 0]);
        });
    });
});
