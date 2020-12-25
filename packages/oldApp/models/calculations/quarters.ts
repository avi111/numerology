import {Triangle} from '@/models/calculations/mainTriangle';
import PersonalYear from '@/models/calculations/personalYear';
import Gimatria from '@/models/helpers/gimatria';


class Quarters {
    public quarters: number[] = [];
    public age: number;
    public year: number;
    public months: number[][];
    private personalYear: PersonalYear;
    private triangle: Triangle;

    constructor(triangle: Triangle, birthDate: Date, year: number = 0) {
        this.triangle = triangle;
        this.personalYear = new PersonalYear(birthDate, triangle, year);
        this.months = [1, 2, 3, 4].map((index) => this.getQurater(index));
        this.age = this.personalYear.age;
        this.year = this.personalYear.year;
        Object.keys(Array(4).fill(0)).map((num) => this.calculateQuarter(parseInt(num, 10)));
    }

    public calculateQuarter(num: number): void {
        let value = 0;
        const index = num + 1;
        switch (index) {
            case 1:
                value = this.triangle.destiny + this.personalYear.current;
                break;
            case 2:
                value = this.triangle.destiny + this.personalYear.western;
                break;
            case 3:
                value = this.quarters[num - 2] + this.quarters[num - 1];
                break;
            case 4:
                value = this.personalYear.western + this.personalYear.current;
                break;
        }

        this.quarters[num] = new Gimatria('' + value).small;
    }

    public getQurater(num: number): number[] {
        const month = this.getMonth(this.personalYear.birthDate.getMonth() + 1 + (num - 1) * 3);
        return [
            this.getMonth(month),
            this.getMonth(month + 2),
        ];
    }

    public getMonth(month: number): number {
        return (month % 12) || 12;
    }
}

export default Quarters;
