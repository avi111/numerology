import Props from '@/interfaces/props';
import {Triangle} from '@/models/calculations/mainTriangle';
import Gimatria from '@/models/helpers/gimatria';
import {getWord} from '@/mixin';

export interface PersonalMonthResult {
    month: string;
    value?: number;
    meaning: string;
    _rowVariant?: string;
}

class PersonalYear implements Partial<Props> {
    public birthDate: Date;
    public kabbalic: number;
    public western: number;
    public hidden: number;
    public current: number;
    public now: Date;
    public age: number;
    public year: number;
    public personalMonth: Map<number, number> = new Map();

    constructor(birthDate: Date, triangle: Triangle, year: number = 0) {
        this.birthDate = birthDate;

        const dateNow = new Date(Date.now());
        this.year = this.lastBirthday().getFullYear() + year;
        const fullYearNow = dateNow.getFullYear() + year;
        this.now = new Date(dateNow.setFullYear(fullYearNow));

        const destiny = triangle.destiny;
        this.age = PersonalYear.calculateAge(birthDate, this.now);
        this.kabbalic = PersonalYear.calculatePersonalYear(destiny, this.age, this.birthDate.getMonth() + 1, undefined);
        this.western = PersonalYear.calculatePersonalYear(destiny, this.age, undefined, undefined);
        this.hidden = PersonalYear.calculatePersonalYear(destiny, this.age, undefined, true);
        this.current = new Gimatria('' + this.year).small;

        this.setPersonalMonth(dateNow);
    }

    public static calculateAge(birthday: Date, now: Date): number { // birthday is a date
        const ageDifMs = now.getTime() - birthday.getTime();
        const ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    public static calculatePersonalYear(
        destiny: number,
        age: number,
        month: number | undefined,
        hidden: boolean | undefined,
    ): number {
        let num = destiny + age;
        if (typeof month === 'number') {
            num += (month as number) < 6 ? 0 : 1;
        }

        if (hidden) {
            num += destiny;
        }

        return new Gimatria('' + num).small;
    }

    public static calculatePersonalMonth(date: Date, kabbalic: number): number {
        const month = date.getMonth() + 1;
        return new Gimatria((month + kabbalic) + '').small;
    }

    public static PersonalMonthFields() {
        return [
            {key: 'month', label: getWord('month')},
            {key: 'value', label: getWord('value')},
            {key: 'meaning', label: getWord('meaning')},
        ];
    }

    public static PersonalMonthValues(
        values: Map<number, number> | undefined,
        meaning: (value: number | undefined) => string): PersonalMonthResult[] {
        const date = new Date(Date.now());
        const result: PersonalMonthResult[] = [];
        if (!values) {
            return result;
        }
        for (let i = -2; i <= 10; i++) {
            const monthDate = new Date(Date.now());
            monthDate.setMonth(date.getMonth() + i);
            const value = values.get(i);

            const newResult: PersonalMonthResult = {
                month: `${monthDate.getMonth() + 1}/${monthDate.getFullYear()}`,
                value,
                meaning: meaning(value),
            };

            if (!i) {
                newResult._rowVariant = 'success';
            }
            result.push(newResult);
        }

        return result;
    }

    public setPersonalMonth(date: Date) {
        for (let i = -2; i <= 10; i++) {
            const monthDate = new Date(Date.now());
            monthDate.setMonth(date.getMonth() + i);
            this.personalMonth.set(i, PersonalYear.calculatePersonalMonth(monthDate, this.kabbalic));
        }
    }

    private lastBirthday(): Date {
        const birthday = new Date(this.birthDate.valueOf());
        const now = new Date(Date.now());
        const year = now.getMonth() >= birthday.getMonth() ? now.getFullYear() : (now.getFullYear() - 1);
        birthday.setFullYear(year);
        return birthday;
    }
}

export default PersonalYear;
