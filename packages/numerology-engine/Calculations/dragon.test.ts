import Dragon from "./dragon";
import {Gender} from "../interfaces/props";

describe('dragon', () => {
    it('calculates well MAYA', () => {
        const dragon = new Dragon('מאיה', 'מאיר', 'כרמלה', Gender.FEMALE);
        expect(dragon.head).toBe(9);
        expect(dragon.tail).toBe(1);
    });

    it('calculates well AVI', () => {
        const dragon = new Dragon('אבי', 'יעקב', 'טובה', Gender.MALE);
        expect(dragon.head).toBe(6);
        expect(dragon.tail).toBe(8);
    });
});
