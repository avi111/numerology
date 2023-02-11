import ContraGematria from "./ContraGematria";

describe('ContraGematria', () => {
    it('getThousands', () => {
        expect(ContraGematria.getThousands(1)).toBe(`א'`);
        expect(ContraGematria.getThousands(2)).toBe(`ב'`);
        expect(ContraGematria.getThousands(0)).toBe('');
        expect(ContraGematria.getThousands(9)).toBe(`ט'`);
        expect(ContraGematria.getThousands(10)).toBe(`י'`);
        expect(ContraGematria.getThousands(11)).toBe(`י"א`);
        expect(ContraGematria.getThousands(14)).toBe(`י"ד`);
    });

    it('getHundreds', () => {
        expect(ContraGematria.getHundreds(1)).toBe(`ק'`);
        expect(ContraGematria.getHundreds(2)).toBe(`ר'`);
        expect(ContraGematria.getHundreds(3)).toBe(`ש'`);
        expect(ContraGematria.getHundreds(4)).toBe(`ת'`);
        expect(ContraGematria.getHundreds(5)).toBe(`ת"ק`);
        expect(ContraGematria.getHundreds(0)).toBe('');
        expect(ContraGematria.getHundreds(9)).toBe(`תת"ק`);
        expect(ContraGematria.getHundreds(10)).toBe(undefined);
        expect(ContraGematria.getHundreds(11)).toBe(undefined);
        expect(ContraGematria.getHundreds(14)).toBe(undefined);
    });

    it('getTens', () => {
        expect(ContraGematria.getTens(1)).toBe(`י'`);
        expect(ContraGematria.getTens(2)).toBe(`כ'`);
        expect(ContraGematria.getTens(3)).toBe(`ל'`);
        expect(ContraGematria.getTens(4)).toBe(`מ'`);
        expect(ContraGematria.getTens(5)).toBe(`נ'`);
        expect(ContraGematria.getTens(0)).toBe('');
        expect(ContraGematria.getTens(9)).toBe(`צ'`);
        expect(ContraGematria.getTens(10)).toBe(undefined);
        expect(ContraGematria.getTens(11)).toBe(undefined);
        expect(ContraGematria.getTens(14)).toBe(undefined);
    });

    it('calculates well numbers', () => {
        expect(new ContraGematria(55).gematria).toBe(`נ"ה`);
        expect(new ContraGematria(1).gematria).toBe(`א'`);
        expect(new ContraGematria(2).gematria).toBe(`ב'`);
        expect(new ContraGematria(9).gematria).toBe(`ט'`);
        expect(new ContraGematria(10).gematria).toBe(`י'`);
        expect(new ContraGematria(12).gematria).toBe(`י"ב`);
        expect(new ContraGematria(15).gematria).toBe(`ט"ו`);
        expect(new ContraGematria(16).gematria).toBe(`ט"ז`);
        expect(new ContraGematria(20).gematria).toBe(`כ'`);
        expect(new ContraGematria(21).gematria).toBe(`כ"א`);
        expect(new ContraGematria(100).gematria).toBe(`ק'`);
        expect(new ContraGematria(101).gematria).toBe(`ק"א`);
        expect(new ContraGematria(221).gematria).toBe(`רכ"א`);
        expect(new ContraGematria(400).gematria).toBe(`ת'`);
        expect(new ContraGematria(401).gematria).toBe(`ת"א`);
        expect(new ContraGematria(411).gematria).toBe(`תי"א`);
        expect(new ContraGematria(415).gematria).toBe(`תט"ו`);
        expect(new ContraGematria(511).gematria).toBe(`תקי"א`);
        expect(new ContraGematria(711).gematria).toBe(`תשי"א`);
        expect(new ContraGematria(911).gematria).toBe(`תתקי"א`);
        expect(new ContraGematria(1221).gematria).toBe(`א'רכ"א`);

    });

    it('converts number to word', () => {
        expect(ContraGematria.convertNumbersToWord(111)).toBe('אאא');
        expect(ContraGematria.convertNumbersToWord(13)).toBe('אג');
        expect(ContraGematria.convertNumbersToWord(1067)).toBe('אוז');
    });
});
