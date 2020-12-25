import Kabbalah from '@/models/calculations/kabbalah';

describe('kabbalic numerology', () => {
    describe('should calculate well', () => {
        let kabbalah: Kabbalah;
        beforeEach(() => {
            const name = 'מאיה';
            const mother = 'כרמלה';
            kabbalah = new Kabbalah(name, mother);
        });

        it('world', () => {
            expect(kabbalah.worlds).toBe(1);
        });

        it('star', () => {
            expect(kabbalah.star).toBe(1);
        });

        it('health', () => {
            expect(kabbalah.health).toBe(9);
        });

        it('soul', () => {
            expect(kabbalah.soul).toBe(3);
        });
    });

});
