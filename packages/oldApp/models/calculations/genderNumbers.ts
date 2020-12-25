import {Gender} from '@/interfaces/props';
import MainTriangle from '@/models/calculations/mainTriangle';
import Hilltops from '@/models/calculations/hilltops';

const maleNumbers = [1, 4, 5, 8];

export interface GenderNumbersProps {
    birthDay: number;
    birthMonth: number;
    birthYear: number;
    destiny: number;
    firstName: number;
    hilltops: number[];
}

class GenderNumbers {
    public numbers1: GenderNumbersProps;
    public numbers2: GenderNumbersProps;
    public male: Map<number, number[]> = new Map();
    public female: Map<number, number[]> = new Map();

    constructor(triangle1: MainTriangle, triangle2: MainTriangle) {
        this.numbers1 = {
            birthDay: triangle1.birthDay,
            birthMonth: triangle1.birthMonth,
            birthYear: triangle1.birthYear,
            destiny: triangle1.destiny,
            firstName: triangle1.firstName,
            hilltops: new Hilltops(triangle1).hilltop,
        };
        this.numbers2 = {
            birthDay: triangle2.birthDay,
            birthMonth: triangle2.birthMonth,
            birthYear: triangle2.birthYear,
            destiny: triangle2.destiny,
            firstName: triangle2.firstName,
            hilltops: new Hilltops(triangle2).hilltop,
        };

        const {numbers1, numbers2} = this;
        const table = new Map<number, number[]>();
        for (let i = 1; i <= 9; i++) {
            table.set(i, []);
        }
        for (let i = 0; i < Object.keys(numbers1).length; i++) {
            this.calcTable(numbers1, i, table);
        }

        for (let i = 0; i < Object.keys(numbers2).length; i++) {
            this.calcTable(numbers2, i, table);
        }

        for (let i = 1; i <= 9; i++) {
            if (GenderNumbers.getGender(i) === Gender.MALE) {
                this.male.set(i, table.get(i) || []);
            } else {
                this.female.set(i, table.get(i) || []);
            }
        }
    }

    public static getGender(num: number): Gender {
        return (maleNumbers.indexOf(num) !== -1) ? Gender.MALE : Gender.FEMALE;
    }

    public calcTable(arr: GenderNumbersProps, i: number, table: Map<number, number[]>) {
        // @ts-ignore
        const current = arr[Object.keys(arr)[i]];
        if (Array.isArray(current)) {
            current.forEach((num) => {
                const val = table.get(num);
                if (val) {
                    val.push(num);
                }
            });
        } else {
            const val = table.get(current);
            if (val) {
                val.push(current);
            }
        }
    }


}

export default GenderNumbers;
