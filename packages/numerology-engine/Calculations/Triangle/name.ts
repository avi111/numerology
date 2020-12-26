import {EHEVI_LETTERS} from "../../consts/letters";
import Gematria from "../../helpers/Gematria/Gematria";
import Props from "../../interfaces/props";
import ProminentAgesName from "./prominentAgesName";

type NameProps = Partial<Props>;

class Name implements NameProps {
    get fullNameValue(): number {
        return this._fullNameValue;
    }

    get firstNameValue(): number {
        return this._firstNameValue;
    }

    get ehevi(): number {
        return this._ehevi;
    }

    get itzurim(): number {
        return this._itzurim;
    }

    get periods(): Array<string[] | undefined> {
        return this._periods;
    }

    get prominentAges(): ProminentAgesName {
        return this._prominentAges;
    }

    public familyName: string;
    public firstName: string;

    private readonly _periods: Array<string[] | undefined>;
    private readonly fullName: string;
    private readonly _fullNameValue: number;
    private readonly _firstNameValue: number;
    private readonly _ehevi: number;
    private readonly _itzurim: number;

    private _prominentAges: ProminentAgesName;

    constructor(familyName: string, firstName: string) {
        this.familyName = familyName;
        this.firstName = firstName;
        this.fullName = this.firstName + this.familyName;
        this._firstNameValue = Name.calculateFirstNameValue(this.firstName);
        this._fullNameValue = Name.calculateFullNameValue(this.fullName);
        this._ehevi = Name.calculateEhevi(this.fullName);
        this._itzurim = Name.calculateItzurim(this.fullName);
        const periodsRaw = Name.calculatePeriods(this.firstName);
        this._prominentAges = new ProminentAgesName(periodsRaw);
        this._periods = Name.displayPeriods(periodsRaw);
    }

    public static calculateFullNameValue(fullName: string): number {
        return new Gematria(fullName).small;
    }

    public static calculateFirstNameValue(firstName: string): number {
        return new Gematria(firstName).small;
    }

    public static calculateEhevi(fullName: string): number {
        const letters = fullName.split('').filter((letter) => EHEVI_LETTERS.indexOf(letter) !== -1).join();
        return new Gematria(letters).small;
    }

    public static calculateItzurim(fullName: string): number {
        const letters = fullName.split('').filter((letter) => EHEVI_LETTERS.indexOf(letter) === -1).join();
        return new Gematria(letters).small;
    }

    public static calculatePeriods(name: string): Array<number[] | undefined> {
        const letters = name.split('').map((letter) => new Gematria(letter).small);
        const summary = letters.reduce((total, num) => total + parseInt(num + '', 10), 0);
        const period = letters.map((letter, index) => {
            return letters.slice(0, index + 1).reduce((total, num) => total + parseInt(num + '', 10), 0);
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return [...Array(100).keys()].map((num) => {
            if ((num + 1) * summary <= 120) {
                return period.map((p) => p + num * summary);
            }
        }).filter((num) => num);
    }

    public static displayPeriods(periods: Array<number[] | undefined>): Array<string[] | undefined> {
        const summary = (periods[0] as number[]).slice(-1)[0];
        return periods.map((period, index) => {
            const first = summary * index;
            if (period) {
                return period.map((p, i) => `${i ? period[i - 1] : first} - ${p}`)
                    .concat(`${first} - ${summary + first}`);
            }
        }).filter((period) => period);
    }
}

export default Name;
