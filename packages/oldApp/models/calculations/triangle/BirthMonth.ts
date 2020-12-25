import NumberCalculation from '@/models/calculations/triangle/NumberCalculation';

class BirthMonth extends NumberCalculation {
    constructor(date: Date) {
        const num = date.getMonth() + 1;
        super(num);
    }
}

export default BirthMonth;
