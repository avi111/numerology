import StringCalculation from "./StringCalculation";

class HowFunctionsAsPartner extends StringCalculation {
    constructor(birthMonth: number, birthDay: number) {
        const str = `${birthMonth}${birthDay}`;
        super(str);
    }
}

export default HowFunctionsAsPartner;
