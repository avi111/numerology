import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class SumTriangle extends StringCalculation {
    constructor(birthDay: number, firstName: number, destiny: number) {
        const str = `${firstName}${birthDay}${destiny}`;
        super(str);
    }
}

export default SumTriangle;
