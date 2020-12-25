import ContraGimatria from '@/models/helpers/contraGimatria';

describe('ContraGimatria', () => {
    it('getThousands', () => {
        expect(ContraGimatria.getThousands(1)).toBe(`א'`);
        expect(ContraGimatria.getThousands(2)).toBe(`ב'`);
        expect(ContraGimatria.getThousands(0)).toBe('');
        expect(ContraGimatria.getThousands(9)).toBe(`ט'`);
        expect(ContraGimatria.getThousands(10)).toBe(`י'`);
        expect(ContraGimatria.getThousands(11)).toBe(`י"א`);
        expect(ContraGimatria.getThousands(14)).toBe(`י"ד`);
    });

    it('getHundreds', () => {
        expect(ContraGimatria.getHundreds(1)).toBe(`ק'`);
        expect(ContraGimatria.getHundreds(2)).toBe(`ר'`);
        expect(ContraGimatria.getHundreds(3)).toBe(`ש'`);
        expect(ContraGimatria.getHundreds(4)).toBe(`ת'`);
        expect(ContraGimatria.getHundreds(5)).toBe(`ת"ק`);
        expect(ContraGimatria.getHundreds(0)).toBe('');
        expect(ContraGimatria.getHundreds(9)).toBe(`תת"ק`);
        expect(ContraGimatria.getHundreds(10)).toBe(undefined);
        expect(ContraGimatria.getHundreds(11)).toBe(undefined);
        expect(ContraGimatria.getHundreds(14)).toBe(undefined);
    });

    it('getTens', () => {
        expect(ContraGimatria.getTens(1)).toBe(`י'`);
        expect(ContraGimatria.getTens(2)).toBe(`כ'`);
        expect(ContraGimatria.getTens(3)).toBe(`ל'`);
        expect(ContraGimatria.getTens(4)).toBe(`מ'`);
        expect(ContraGimatria.getTens(5)).toBe(`נ'`);
        expect(ContraGimatria.getTens(0)).toBe('');
        expect(ContraGimatria.getTens(9)).toBe(`צ'`);
        expect(ContraGimatria.getTens(10)).toBe(undefined);
        expect(ContraGimatria.getTens(11)).toBe(undefined);
        expect(ContraGimatria.getTens(14)).toBe(undefined);
    });

    it('calculates well numbers', () => {
        expect(new ContraGimatria(55).gimatria).toBe(`נ"ה`);
        expect(new ContraGimatria(1).gimatria).toBe(`א'`);
        expect(new ContraGimatria(2).gimatria).toBe(`ב'`);
        expect(new ContraGimatria(9).gimatria).toBe(`ט'`);
        expect(new ContraGimatria(10).gimatria).toBe(`י'`);
        expect(new ContraGimatria(12).gimatria).toBe(`י"ב`);
        expect(new ContraGimatria(15).gimatria).toBe(`ט"ו`);
        expect(new ContraGimatria(16).gimatria).toBe(`ט"ז`);
        expect(new ContraGimatria(20).gimatria).toBe(`כ'`);
        expect(new ContraGimatria(21).gimatria).toBe(`כ"א`);
        expect(new ContraGimatria(100).gimatria).toBe(`ק'`);
        expect(new ContraGimatria(101).gimatria).toBe(`ק"א`);
        expect(new ContraGimatria(221).gimatria).toBe(`רכ"א`);
        expect(new ContraGimatria(400).gimatria).toBe(`ת'`);
        expect(new ContraGimatria(401).gimatria).toBe(`ת"א`);
        expect(new ContraGimatria(411).gimatria).toBe(`תי"א`);
        expect(new ContraGimatria(415).gimatria).toBe(`תט"ו`);
        expect(new ContraGimatria(511).gimatria).toBe(`תקי"א`);
        expect(new ContraGimatria(711).gimatria).toBe(`תשי"א`);
        expect(new ContraGimatria(911).gimatria).toBe(`תתקי"א`);
        expect(new ContraGimatria(1221).gimatria).toBe(`א'רכ"א`);

    });

    it('converts number to word', () => {
        expect(ContraGimatria.convertNumbersToWord(111)).toBe('אאא');
        expect(ContraGimatria.convertNumbersToWord(13)).toBe('אג');
        expect(ContraGimatria.convertNumbersToWord(1067)).toBe('אוז');
    });
});
