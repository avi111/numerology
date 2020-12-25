import Gimatria from '@/models/helpers/gimatria';
import MagicSquare from '@/models/calculations/magicSquare';
import Hilltops from '@/models/calculations/hilltops';
import PersonalMagic from '@/models/calculations/triangle/personalMagic';
import FirstName from '@/models/calculations/triangle/firstName';
import Birthday from '@/models/calculations/triangle/Birthday';
import Destiny from '@/models/calculations/triangle/Destiny';
import BirthMonth from '@/models/calculations/triangle/BirthMonth';
import BirthYear from '@/models/calculations/triangle/BirthYear';
import SumTriangle from '@/models/calculations/triangle/SumTriangle';
import Power from '@/models/calculations/triangle/Power';
import HowFunctionsAsPartner from '@/models/calculations/triangle/HowFunctionsAsPartner';
import WhatWantsInPartner from '@/models/calculations/triangle/WhatWantsInPartner';
import ProminentAgesDate from '@/models/calculations/prominentAgesDate';
import Year from '@/models/calculations/year';
import HealthSensitivities from '@/models/calculations/triangle/healthSensitivities';

export interface Triangle {
    firstName: number;
    birthMonth: number;
    birthYear: number;
    birthDay: number;
    destiny: number;
    power: number;
    sumTriangle: number;
}

class MainTriangle implements Triangle {
    get firstName(): number {
        return this._firstName;
    }

    get birthDay(): number {
        return this._birthDay;
    }

    get destiny(): number {
        return this._destiny;
    }

    get birthMonth(): number {
        return this._birthMonth;
    }

    get birthYear(): number {
        return this._birthYear;
    }

    get sumTriangle(): number {
        return this._sumTriangle;
    }

    get nameNumberSmall(): number {
        return this._nameNumberSmall;
    }

    get nameNumberBig(): number {
        return this._nameNumberBig;
    }

    get howFunctionsAsPartner(): number {
        return this._howFunctionsAsPartner;
    }

    get whatWantsInPartner(): number {
        return this._whatWantsInPartner;
    }

    get threeTimesName(): number[] {
        return this._threeTimesName;
    }

    get threeTimesBirthDate(): number[] {
        return this._threeTimesBirthDate;
    }

    get power(): number {
        return this._power;
    }

    get personalMagic(): number {
        return this._personalMagic;
    }

    get birthDayOriginal(): number {
        return this._birthDayOriginal;
    }

    get healthSensitivities(): number {
        return this._healthSensitivities;
    }

    get year(): Year {
        return this._year;
    }

    get prominentAgesDate(): ProminentAgesDate {
        return this._prominentAgesDate;
    }

    private _objects: { [key: string]: object } = {};

    private readonly _birthDayOriginal: number;
    private readonly _healthSensitivities: number;

    private readonly _prominentAgesDate: ProminentAgesDate;

    private readonly _firstName: number;
    private _familyName: number;
    private readonly _birthDay: number;

    private readonly _destiny: number;

    private readonly _birthMonth: number;
    private readonly _birthYear: number;
    private readonly _sumTriangle: number;
    private readonly _nameNumberSmall: number;
    private readonly _nameNumberBig: number;
    private readonly _howFunctionsAsPartner: number;
    private readonly _whatWantsInPartner: number;
    private readonly _threeTimesName: number[];
    private readonly _threeTimesBirthDate: number[];
    private readonly _power: number;
    private readonly _personalMagic: number;
    private readonly _year: Year;

    get objects(): { [p: string]: object } {
        return this._objects;
    }

    constructor(date: Date, firstName: string, familyName: string = '') {
        const fullName = [firstName, familyName].join('');

        const objects = {
            firstName: new FirstName(firstName),
            familyName: new FirstName(familyName),
            birthDay: new Birthday(date),
            destiny: new Destiny(date),
            birthMonth: new BirthMonth(date),
            birthYear: new BirthYear(date),
            power: new Power(date, firstName, familyName),
            year: new Year(date.getFullYear()),
        };

        this._firstName = objects.firstName.result;
        this._familyName = objects.familyName.result;
        this._birthDay = objects.birthDay.result;
        this._birthDayOriginal = date.getDate();
        this._destiny = objects.destiny.result;
        this._birthMonth = objects.birthMonth.result;
        this._birthYear = objects.birthYear.result;
        this._power = objects.power.result;
        this._year = objects.year;

        this._nameNumberSmall = this.setNameNumberSmall(firstName);
        this._nameNumberBig = this.setNameNumberBig(firstName);
        this._threeTimesName = this.setThreeTimesName(firstName);
        this._threeTimesBirthDate = this.setThreeTimesBirthDate(date);

        const objects2 = {
            personalMagic: new PersonalMagic(fullName, this._destiny),
            healthSensitivity: new HealthSensitivities(this._firstName, this._destiny),
            sumTriangle: new SumTriangle(this._birthDay, this._firstName, this._destiny),
            howFunctionsAsPartner: new HowFunctionsAsPartner(this.birthMonth, this.birthDay),
            whatWantsInPartner: new WhatWantsInPartner(this.birthMonth, this.destiny),
        };

        this._healthSensitivities = objects2.healthSensitivity.result;
        this._howFunctionsAsPartner = objects2.howFunctionsAsPartner.result;
        this._whatWantsInPartner = objects2.whatWantsInPartner.result;
        this._sumTriangle = objects2.sumTriangle.result;
        this._personalMagic = objects2.personalMagic.result;

        this._prominentAgesDate = new ProminentAgesDate(date);
        this._objects = {...objects, ...objects2};
    }

    public static isKarmatic(num: number) {
        return [13, 14, 15, 16, 19].indexOf(num) !== -1;
    }

    public static isMaster(num: number) {
        return [11, 22, 33].indexOf(num) !== -1;
    }

// noinspection JSMethodCanBeStatic
    public setThreeTimesBirthDate(date: Date): number[] {
        const magicSquare = new MagicSquare(date);
        return magicSquare.getThreeTimes();
    }

    // noinspection JSMethodCanBeStatic
    public calculateBirthDate(date: Date): number {
        const num: string = [
            date.getDate(),
            date.getMonth() + 1,
            date.getFullYear(),
        ].join('');
        return new Gimatria(num).small;
    }

    public isNameNumberOnHilltop() {
        const hilltop = new Hilltops(this);
        return hilltop.hilltop.find((h) => h === this.firstName)
            || hilltop.challenge.find((h) => h === this.firstName);
    }

    public numbers() {
        return [
            this.firstName,
            this.birthDay,
            this.destiny,
        ];
    }

    private setNameNumberSmall(name: string): number {
        const numbers = this.convertNameToNumbers(name);
        return new Gimatria(numbers).big;
    }

    // noinspection JSMethodCanBeStatic
    private setNameNumberBig(name: string): number {
        return new Gimatria(name).getBig();
    }

    private convertNameToNumbers(name: string): string {
        return name.split('').filter((letter) => letter).map((letter) => (new Gimatria(letter).small) + '').join('');
    }

    private setThreeTimesName(name: string): number[] {
        const numbers = this.convertNameToNumbers(name);
        const magicSquare = new MagicSquare(numbers);
        return magicSquare.getThreeTimes();
    }
}

export default MainTriangle;
