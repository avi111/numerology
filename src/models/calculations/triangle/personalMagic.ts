import Letters from '@/models/helpers/letters';
import Gimatria from '@/models/helpers/gimatria';
import ContraGimatria from '@/models/helpers/contraGimatria';
import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class PersonalMagic extends StringCalculation {
    constructor(name: string, destiny: number) {
        const str = [
            destiny,
            new Gimatria(
                name.split('')
                    .filter((letter) => {
                        return new Letters(letter).isItzur();
                    })
                    .join('')).small,
        ].map(
            (num) => new ContraGimatria(num).gimatria,
        ).join('');
        super(str);
    }
}

export default PersonalMagic;
