import Profile from '@/models/mainTools/Profile';
import {Gender} from '@/interfaces/props';
import FakeTime from '@/models/helpers/fakeTime';

const testData = {
    props: {
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
    },
    _triangle: {
        _firstName: 4,
        _familyName: 6,
        _birthDay: 7,
        _destiny: 7,
        _birthMonth: 9,
        _birthYear: 9,
        _sumTriangle: 9,
        _nameNumberSmall: 4,
        _nameNumberBig: 13,
        _howFunctionsAsPartner: 7,
        _whatWantsInPartner: 7,
        _threeTimesName: [],
        _threeTimesBirthDate: [],
        _power: 8,
    },
    _dragon: {
        head: 6,
        tail: 8,
    },
    _name: {
        _firstNameValue: 4,
        _fullNameValue: 1,
        _ehevi: 9,
        _itzurim: 1,
        _periods: [
            ['0 - 1', '1 - 3', '3 - 4', '0 - 4'],
            ['4 - 5', '5 - 7', '7 - 8', '4 - 8'],
            ['8 - 9', '9 - 11', '11 - 12', '8 - 12'],
            ['12 - 13', '13 - 15', '15 - 16', '12 - 16'],
            ['16 - 17', '17 - 19', '19 - 20', '16 - 20'],
            ['20 - 21', '21 - 23', '23 - 24', '20 - 24'],
            ['24 - 25', '25 - 27', '27 - 28', '24 - 28'],
            ['28 - 29', '29 - 31', '31 - 32', '28 - 32'],
            ['32 - 33', '33 - 35', '35 - 36', '32 - 36'],
            ['36 - 37', '37 - 39', '39 - 40', '36 - 40'],
            ['40 - 41', '41 - 43', '43 - 44', '40 - 44'],
            ['44 - 45', '45 - 47', '47 - 48', '44 - 48'],
            ['48 - 49', '49 - 51', '51 - 52', '48 - 52'],
            ['52 - 53', '53 - 55', '55 - 56', '52 - 56'],
            ['56 - 57', '57 - 59', '59 - 60', '56 - 60'],
            ['60 - 61', '61 - 63', '63 - 64', '60 - 64'],
            ['64 - 65', '65 - 67', '67 - 68', '64 - 68'],
            ['68 - 69', '69 - 71', '71 - 72', '68 - 72'],
            ['72 - 73', '73 - 75', '75 - 76', '72 - 76'],
            ['76 - 77', '77 - 79', '79 - 80', '76 - 80'],
            ['80 - 81', '81 - 83', '83 - 84', '80 - 84'],
            ['84 - 85', '85 - 87', '87 - 88', '84 - 88'],
            ['88 - 89', '89 - 91', '91 - 92', '88 - 92'],
            ['92 - 93', '93 - 95', '95 - 96', '92 - 96'],
            ['96 - 97', '97 - 99', '99 - 100', '96 - 100'],
            ['100 - 101', '101 - 103', '103 - 104', '100 - 104'],
            ['104 - 105', '105 - 107', '107 - 108', '104 - 108'],
            ['108 - 109', '109 - 111', '111 - 112', '108 - 112'],
            ['112 - 113', '113 - 115', '115 - 116', '112 - 116'],
            ['116 - 117', '117 - 119', '119 - 120', '116 - 120'],
        ],
    },
    _matchNameBirth: {
        actualSquare: [['0', '0', '77'], ['0', '4', '0'], ['0', '0', '0']],
        triangle: {
            _firstName: 4,
            _familyName: 6,
            _birthDay: 7,
            _destiny: 7,
            _birthMonth: 9,
            _birthYear: 9,
            _sumTriangle: 9,
            _nameNumberSmall: 4,
            _nameNumberBig: 13,
            _howFunctionsAsPartner: 7,
            _whatWantsInPartner: 7,
            _threeTimesName: [],
            _threeTimesBirthDate: [],
            _power: 8,
        },
        rows: 2,
        hard: 1,
        light: 2,
    },
    _missingNumbers: {
        existing: [1, 2, 3, 6, 9],
        missing: [4, 5, 7, 8],
        occurence: [undefined, 4, 3, 1, 0, 0, 1, 0, 0, 1],
    },
    _personalYear: {
        kabbalic: 2,
        western: 1,
        hidden: 8,
        current: 3,
    },
    _hilltops: {
        hilltop: [7, 7, 5, 9],
        challenge: [2, 2, 0, 0],
        extension: [9, 9, 5, 9, 5, 5, 3, 7],
        hiddenHilltop: [5, 7, 5, 7],
        triangle: {
            _firstName: 4,
            _familyName: 6,
            _birthDay: 7,
            _destiny: 7,
            _birthMonth: 9,
            _birthYear: 9,
            _sumTriangle: 9,
            _nameNumberSmall: 4,
            _nameNumberBig: 13,
            _howFunctionsAsPartner: 7,
            _whatWantsInPartner: 7,
            _threeTimesName: [],
            _threeTimesBirthDate: [],
            _power: 8,
        },
        birthDay: 7,
        birthMonth: 9,
        birthYear: 9,
        destiny: 7,
    },
    _quarters: [
        {},
        {
            quarters: [
                1,
                8,
                9,
                4,
            ],
            months: [
                [9, 11],
                [12, 2],
                [3, 5],
                [6, 8],
            ],
        },
    ],
    _magicSquareName: {
        actualSquare: [['3', '6', '9'], ['222', '0', '0'], ['1111', '0', '0']],
        square: [3, 6, 9, 2, 5, 8, 1, 4, 7],
        exists: [],
        missing: ['369', '258', '147', '321', '654', '987', '357', '951'],
    },
    _magicSquareBirthDate: {
        actualSquare: [['0', '6', '99'], ['0', '0', '8'], ['11', '0', '0']],
        square: [3, 6, 9, 2, 5, 8, 1, 4, 7],
        exists: [],
        missing: ['357'],
    },
    _kabbalah: {
        _worlds: 5,
        _star: 7,
        _health: 8,
        _soul: 11,
    },
};

describe('profile', () => {
    describe('check async', () => {
        Profile.getProfile(testData.props).then((profile) => {
            expect(profile.triangleHeb).not.toBeUndefined();
            expect(profile.hilltopsHeb).not.toBeUndefined();
            expect(profile.magicSquareBirthDateHeb).not.toBeUndefined();
            expect(profile.matchNameBirthHeb).not.toBeUndefined();
            expect(profile.personalYearHeb).not.toBeUndefined();
        });
    });

    describe('check equality', () => {
        // @ts-ignore
        const profile = new FakeTime(Profile, [testData.props]).result;
        Object.keys(testData).forEach((p) => {
            // @ts-ignore
            if (testData[p] && p !== 'props') {
                describe(`profile[${p}]`, () => {
                    // @ts-ignore
                    Object.keys(testData[p]).forEach((prop) => {
                        describe(`profile[${p}][${prop}]`, () => {
                            // @ts-ignore
                            if (Array.isArray(profile[p][prop])) {
                                // @ts-ignore
                                profile[p][prop].forEach((pp) => {
                                    it('checking now', () => {
                                        // @ts-ignore
                                        expect(testData[p][prop][pp]).toBe(profile[p][prop][pp]);
                                    });
                                });
                            } else if (typeof profile[p][prop] === 'object') {
                                // @ts-ignore
                                Object.keys(testData[p][prop]).forEach((pp) => {
                                    it(`profile[${p}][${prop}][${pp}]`, () => {
                                        // @ts-ignore
                                        expect(testData[p][prop][pp]).toStrictEqual(profile[p][prop][pp]);
                                    });
                                });

                            } else {
                                // @ts-ignore
                                expect(testData[p][prop]).toBe(profile[p][prop]);
                            }
                        });
                    });
                });
            }
        });
    });
});
