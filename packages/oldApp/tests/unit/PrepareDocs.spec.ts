import Chakra from '@/models/calculations/Chakra';
import PrepareDoc from '@/models/mainTools/PrepareDoc';

describe('prepare docs', () => {
    it('prepares hbs well', () => {
        const chakra = new Chakra(new Date('1980-9-16'), 'אבי', 'לבקוביץ');
        const prepare = new PrepareDoc(chakra);
        prepare.route();
        const p = prepare.prepare();
        expect(p).toBe('Name: ' + chakra.lastName);
    });
});
