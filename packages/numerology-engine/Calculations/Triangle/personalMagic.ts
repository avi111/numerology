import StringCalculation from "./StringCalculation";
import Gematria from "../../helpers/Gematria/Gematria";
import Letters from "../../helpers/Letters/letters";
import ContraGematria from "../../helpers/Gematria/ContraGematria";


class PersonalMagic extends StringCalculation {
    constructor(name: string, destiny: number) {
        const str = [
            destiny,
            new Gematria(
                name.split('')
                    .filter((letter) => {
                        return new Letters(letter).isItzur();
                    })
                    .join('')).small,
        ].map(
            (num) => new ContraGematria(num).gematria,
        ).join('');
        super(str);
    }
}

export default PersonalMagic;
