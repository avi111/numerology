import {contraGematriaValues} from '../../consts/letters'

class ContraGematria {
    get gematria(): string {
        return this._gematria;
    }

    private readonly num: number;
    private readonly thousands: number;
    private readonly hundreds: number;
    private readonly tens: number;
    private readonly ones: number;
    private readonly _gematria: string;

    constructor(num: number) {
        this.num = parseInt(num + '', 10);
        this.thousands = Math.floor(this.num / 1000);
        this.hundreds = Math.floor((this.num % 1000) / 100);
        this.tens = Math.floor((this.num % 100) / 10);
        this.ones = Math.floor(this.num % 10);
        this._gematria = this.calculate();
    }

    public static convertNumbersToWord(num: number): string {
        return (num + '').split('').map((n) => contraGematriaValues.get(parseInt(n, 10))).join('');
    }

    public static getThousands(thousand: number): string {
        if (!thousand) {
            return '';
        }

        return ContraGematria.complete(contraGematriaValues.get(thousand))
            || new ContraGematria(thousand || 0).gematria;
    }

    public static getHundreds(hundred: number): string | undefined {
        if (hundred >= 10) {
            return undefined;
        }

        if (!hundred) {
            return '';
        }

        return ContraGematria.complete(contraGematriaValues.get(hundred * 100));
    }

    public static getTens(ten: number): string | undefined {
        if (ten >= 10) {
            return undefined;
        }

        if (!ten) {
            return '';
        }

        return ContraGematria.complete(contraGematriaValues.get(ten * 10));
    }

    public static getOnes(one: number): string | undefined {
        if (one >= 10) {
            return undefined;
        }

        if (!one) {
            return '';
        }

        return ContraGematria.complete(contraGematriaValues.get(one));
    }

    public static complete(input: string): string {
        const result = (input || '').replace(/['"]+/g, '');
        switch (result.length) {
            case 0:
                return '';
            case 1:
                return `${result}'`;
            default:
                return `${result.slice(0, -1)}"${result.slice(-1)}`;
        }
    }

    public calculate(): string {
        const thousands = ContraGematria.getThousands(this.thousands);
        const hundreds = ContraGematria.getHundreds(this.hundreds);

        const value = contraGematriaValues.get(parseInt('' + this.tens + this.ones, 10));

        const tens = ContraGematria.getTens(this.tens);
        const ones = ContraGematria.getOnes(this.ones);

        const result = `${hundreds}${value || `${tens}${ones}`}`;
        return ContraGematria.complete(`${thousands ? (`${thousands}'`) : ''}`)
            + ContraGematria.complete(result);
    }
}

export default ContraGematria;
