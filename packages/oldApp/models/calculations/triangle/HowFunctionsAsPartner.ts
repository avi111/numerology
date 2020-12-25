import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class HowFunctionsAsPartner extends StringCalculation {
    constructor(birthMonth: number, birthDay: number) {
        const str = `${birthMonth}${birthDay}`;
        super(str);
    }
}

export default HowFunctionsAsPartner;
