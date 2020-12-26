import NumberCalculation from "./NumberCalculation";

class BirthYear extends NumberCalculation {
    constructor(date: Date) {
        const num = date.getFullYear();
        super(num);
    }
}

export default BirthYear;
