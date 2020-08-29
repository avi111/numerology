import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class WhatWantsInPartner extends StringCalculation {
    constructor(birthMonth: number, destiny: number) {
        const str = `${birthMonth}${destiny}`;
        super(str);
    }
}

export default WhatWantsInPartner;
