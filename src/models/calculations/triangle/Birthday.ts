import ContraGimatria from '@/models/helpers/contraGimatria';
import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class Birthday extends StringCalculation {
    constructor(date: Date) {
        const num = date.getDate();
        const str = new ContraGimatria(num).gimatria.replace('\"', '');
        super(str);
    }
}

export default Birthday;
