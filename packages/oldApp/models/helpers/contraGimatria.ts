import {contraGimatriaValues} from '@/consts/letters';

class ContraGimatria {

    get gimatria(): string {
        return this._gimatria;
    }

    private readonly num: number;
    private readonly thousands: number;
    private readonly hundreds: number;
    private readonly tens: number;
    private readonly ones: number;
    private readonly _gimatria: string;

    constructor(num: number) {
        this.num = parseInt(num + '', 10);
        this.thousands = Math.floor(this.num / 1000);
        this.hundreds = Math.floor((this.num % 1000) / 100);
        this.tens = Math.floor((this.num % 100) / 10);
        this.ones = Math.floor(this.num % 10);
        this._gimatria = this.calculate();
    }

    public static convertNumbersToWord(num: number): string {
        return (num + '').split('').map((n) => contraGimatriaValues.get(parseInt(n, 10))).join('');
    }

    public static getThousands(thousand: number): string {
        if (!thousand) {
            return '';
        }

        return ContraGimatria.complete(contraGimatriaValues.get(thousand))
            || new ContraGimatria(thousand || 0).gimatria;
    }

    public static getHundreds(hundred: number): string | undefined {
        if (hundred >= 10) {
            return undefined;
        }

        if (!hundred) {
            return '';
        }

        return ContraGimatria.complete(contraGimatriaValues.get(hundred * 100));
    }

    public static getTens(ten: number): string | undefined {
        if (ten >= 10) {
            return undefined;
        }

        if (!ten) {
            return '';
        }

        return ContraGimatria.complete(contraGimatriaValues.get(ten * 10));
    }

    public static getOnes(one: number): string | undefined {
        if (one >= 10) {
            return undefined;
        }

        if (!one) {
            return '';
        }

        return ContraGimatria.complete(contraGimatriaValues.get(one));
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
        const thousands = ContraGimatria.getThousands(this.thousands);
        const hundreds = ContraGimatria.getHundreds(this.hundreds);

        const value = contraGimatriaValues.get(parseInt('' + this.tens + this.ones, 10));

        const tens = ContraGimatria.getTens(this.tens);
        const ones = ContraGimatria.getOnes(this.ones);

        const result = `${hundreds}${value || `${tens}${ones}`}`;
        return ContraGimatria.complete(`${thousands ? (`${thousands}'`) : ''}`)
            + ContraGimatria.complete(result);
    }
}

export default ContraGimatria;
