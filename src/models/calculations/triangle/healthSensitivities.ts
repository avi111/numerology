import ContraGimatria from '@/models/helpers/contraGimatria';
import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class HealthSensitivities extends StringCalculation {
    constructor(firstname: number, destiny: number) {
        const str = [
            destiny,
            firstname,
        ].map(
            (num) => new ContraGimatria(num).gimatria,
        ).join('');
        super(str);
    }
}

export default HealthSensitivities;
