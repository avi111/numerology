import ContraGematria from "../../helpers/Gematria/ContraGematria";
import StringCalculation from "./StringCalculation";

class HealthSensitivities extends StringCalculation {
    constructor(firstname: number, destiny: number) {
        const str = [
            destiny,
            firstname,
        ].map(
            (num) => new ContraGematria(num).gematria,
        ).join('');
        super(str);
    }
}

export default HealthSensitivities;
