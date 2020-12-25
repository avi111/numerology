import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Dictionary from '@/models/services/dictionary';
import dictionary from '@/store/dictionary';

export const baseURL = process.env.VUE_APP_ROOT_API;
axios.defaults.baseURL = `${baseURL}wp/v2/`;

describe('dictionary', () => {
    it('gets words properly', async (doneCallback) => {
        const mock = new MockAdapter(axios);
        mock.onGet('/new-dictionary').reply(200, {
            'gender': 'מין',
            'submit': 'שלח',
            'father name': 'שם האב',
            'mother name': 'שם האם',
            'parents details': 'פרטי ההורים',
            'personal details': 'פרטים אישיים',
            'first name': 'שם פרטי',
            'family name': 'שם משפחה',
        });

        const dictionaryInstance = await Dictionary.getInstance();
        await dictionaryInstance.getDictionary();
        const word = 'gender';
        const translation = 'מין';
        expect(dictionaryInstance.getWord(word)).toBe(translation);
        doneCallback();
    });

});
