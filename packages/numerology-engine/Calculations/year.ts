import Gematria from "../helpers/Gematria/Gematria";

class Year {
    public year: number;
    public oneDigit: number;
    public rightDigit: number;
    public prominentAge: number;

    constructor(year: number) {
        this.year = year;

        const digits: number[] = (year + '').split('').map((digit) => parseInt(digit, 10));
        this.rightDigit = digits[digits.length - 1];
        this.oneDigit = new Gematria(digits.join('')).small;
        this.prominentAge = digits.reduce((a, b) => a + b, 0);
    }
}

export default Year;
