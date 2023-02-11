import StringCalculation from "./StringCalculation";

class NumberCalculation extends StringCalculation {
    constructor(num: number) {
        const str: string = [
            num,
        ].join('');
        super(str);
    }
}

export default NumberCalculation;
