import {CSVParse} from '@/models/mainTools/readFile';
import Validate from '@/models/calculations/validate';
import {ReportType} from '@/interfaces/reportType';
import Dictionary from '@/models/services/dictionary';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

describe('validate', () => {
    beforeAll(async (doneCallback) => {
        const mock = new MockAdapter(axios);
        mock.onGet('/new-dictionary').reply(200, {
            'admin': 'ניהול',
            'app': 'אפליקציה',
            'batch calculation': 'חישוב מרובה',
            'between': 'בין',
            'family name': 'שם משפחה',
            'father name': 'שם האב',
            'father name at birth of patient': 'שם האב בזמן לידת הלקוח',
            'female': 'נקבה',
            'first name': 'שם פרטי',
            'first name at birth': 'שם פרטי בלידה',
            'business map': 'מפה עסקית',
            'business name': 'שם העסק',
            'business partner': 'שותף',
            'business start date': 'תאריך פתיחת העסק במע"מ',
            'gender': 'מין',
            'go back': 'חזור',
            'male': 'זכר',
            'meanings': 'משמעויות',
            'mother name': 'שם האם',
            'mother name at birth of patient': 'שם האם בזמן לידת הלקוח',
            'personal details': 'פרטים אישיים',
            'submit': 'שלח',
            'worlds': 'עולמות',
            'year': 'שנה',
            'yes': 'כן',
            'birth date': 'תאריך לידה',
            'birth hour': 'שעת לידה',
        });

        const dictionary = Dictionary.getInstance();
        await dictionary.getDictionary();
        doneCallback();
    });
    describe('profile', () => {
        it('valid one, full male', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'אבי,,לבקוביץ,1980-9-16,,זכר,יעקב,,טובה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeTruthy();
        });

        it('valid with special characters, short male', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'ג\'ו,,"דחב""ש",1980-9-16,,ז,"פלמ""ח",,יוספה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeTruthy();
        });

        it('invalid date month', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'קווין,,ליפשיץ,1980-13-16,,ז,צבי,,חרדית,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid date day', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'מאיה,,אופניק,1980-9-33,,נ,יעקב,,פליאה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid date (Nan)', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'מאיה,,אופניק,י,,נ,יעקב,,פליאה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid inaproppriate number of columns', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'מאיה,,אופניק,1980-9-16,,נקבה,יעקב,,טובה,פעמונה,,קשקבל\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('couple into profile', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,16/09/1980,מאיה,לבקוביץ,25/09/1979';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('business into profile', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/08/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.PROFILE, csv);
            expect(validate.valid).toBeFalsy();
        });
    });

    describe('couple', () => {
        it('valid one', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,16/09/1980,מאיה,לבקוביץ,25/09/1979';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeTruthy();
        });

        it('invalid one, wrong day', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,32/09/1980,מאיה,לבקוביץ,25/09/1979';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid one, wrong month', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,16/15/1980,מאיה,לבקוביץ,25/09/1979';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid one, Nan date', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,ככ0,מאיה,לבקוביץ,25/09/1979';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid inaproppriate number of columns', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,16/09/1980,מאיה,לבקוביץ,25/09/1979,אאא';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('profile into couple', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'אבי,,לבקוביץ,1980-9-16,,זכר,יעקב,,טובה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('business into couple', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/08/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.COUPLE, csv);
            expect(validate.valid).toBeFalsy();
        });
    });

    describe('business', () => {
        it('valid one 3 partners', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/08/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeTruthy();
        });

        it('valid one 2 partners', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/08/1999';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeTruthy();
        });

        it('invalid one 1 partners', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid one, wrong day', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",32/08/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid one, wrong month', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/13/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid one, Nan date', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",ע,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('invalid inaproppriate number of columns', () => {
            const str = 'שם העסק,"תאריך פתיחת העסק במע""מ",שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2,שם פרטי3,שם משפחה3,תאריך לידה3\n' +
                'גשש,15/12/2015,ג\'ו,דדד,"דחב""ש",08/05/1977,ג\'סיקה,"ראב""ד",04/08/1999,אלי,פיצוחים,05/12/1980';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('profile into business', () => {
            const str = 'שם פרטי,שם פרטי בלידה,שם משפחה,תאריך לידה,שעת לידה,מין,שם האב,שם האב בזמן לידת הלקוח,שם האם,שם האם בזמן לידת הלקוח,\n' +
                'אבי,,לבקוביץ,1980-9-16,,זכר,יעקב,,טובה,,\n';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });

        it('couple into business', () => {
            const str = 'שם פרטי1,שם משפחה1,תאריך לידה1,שם פרטי2,שם משפחה2,תאריך לידה2\n' +
                'אבי,לבקוביץ,16/09/1980,מאיה,לבקוביץ,25/09/1979,אאא';
            const csv = CSVParse(str);
            const validate = new Validate(ReportType.BUSINESS, csv);
            expect(validate.valid).toBeFalsy();
        });
    });
});
