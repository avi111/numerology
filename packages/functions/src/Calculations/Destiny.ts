import StringCalculation from "./StringCalculation";

class Destiny extends StringCalculation {
    constructor(date: Date) {
        const num: string = [
            date.getDate(),
            date.getMonth() + 1,
            date.getFullYear(),
        ].join('');
        super(num);
    }
}

export default Destiny;
