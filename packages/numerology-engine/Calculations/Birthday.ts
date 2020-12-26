import StringCalculation from "./StringCalculation";
import ContraGematria from "../helpers/Gematria/ContraGematria";

class Birthday extends StringCalculation {
    constructor(date: Date) {
        const num = date.getDate();
        const str = new ContraGematria(num).gematria.replace('"', '');
        super(str);
    }
}

export default Birthday;
