import NumberCalculation from '@/models/calculations/triangle/NumberCalculation';

class BirthYear extends NumberCalculation {
    constructor(date: Date) {
        const num = date.getFullYear();
        super(num);
    }
}

export default BirthYear;
