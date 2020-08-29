import StringCalculation from '@/models/calculations/triangle/StringCalculation';

class Power extends StringCalculation {
    constructor(date: Date, firstName: string, lastName: string) {
        const str = `${date.getDate()}${date.getMonth() + 1}${date.getFullYear()}${firstName}${lastName}`;
        super(str);
    }
}

export default Power;
