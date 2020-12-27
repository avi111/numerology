import PrepareDoc from "./PrepareDoc";
import {Chakra} from "../numerologyEngine";

describe('prepare docs', () => {
    it('prepares hbs well', () => {
        const chakra = new Chakra(new Date('1980-9-16'), 'אבי', 'לבקוביץ');
        const prepare = new PrepareDoc(chakra);
        prepare.route();
        const p = prepare.prepare();
        expect(p).toBe('Name: ' + chakra.lastName);
    });
});
