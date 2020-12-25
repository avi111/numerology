import NameMapClass from '@/models/mainTools/NameMapClass';

describe('name map', () => {
    const firstName = 'אבי';
    const familyName = 'לבקוביץ';
    const nameMap = new NameMapClass({firstName, familyName});

    it('split letters correctly', () => {
        const letters = NameMapClass.getLetters(firstName, familyName);
        expect(letters).toStrictEqual([
            'א',
            'ב',
            'י',
            'ל',
            'ק',
            'ו',
            'צ',
        ]);
    });
});
