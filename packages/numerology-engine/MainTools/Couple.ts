import Props from "../interfaces/props";
import MainTriangle, {Triangle} from "../Calculations/mainTriangle";
import Gematria from "../helpers/Gematria/Gematria";
import ContraGematria from "../helpers/Gematria/ContraGematria";
import GenderNumbers from "../Calculations/genderNumbers";

export interface CoupleProps extends Partial<Props> {
    firstName: string;
    familyName: string;
    birthDate: Date;
}

export interface Matrix {
    partner1: Partial<Triangle>;
    partner2: Partial<Triangle>;
    both: Partial<Triangle>;
}

class Couple {
    public Partner1: MainTriangle;
    public Partner2: MainTriangle;
    public _weakPointNames: number;
    public _weakPointBirthDate: number;
    public _weakPointBirthDay: number;
    public Partner1Props: CoupleProps;
    public Partner2Props: CoupleProps;
    public _comparisonNames: string;
    public genderNumbers: GenderNumbers;

    get comparisonNames(): string {
        return this._comparisonNames;
    }

    get weakPointNames(): number {
        return this._weakPointNames;
    }

    get weakPointBirthDate(): number {
        return this._weakPointBirthDate;
    }

    get weakPointBirthDay(): number {
        return this._weakPointBirthDay;
    }

    public _comparisonBirthDates: string;

    get comparisonBirthDates(): string {
        return this._comparisonBirthDates;
    }


    constructor(Partner1Props: CoupleProps, Partner2Props: CoupleProps) {
        this.Partner1Props = Partner1Props;
        this.Partner2Props = Partner2Props;

        this.Partner1 = new MainTriangle(
            this.Partner1Props.birthDate,
            this.Partner1Props.firstName,
            this.Partner1Props.familyName,
        );

        this.Partner2 = new MainTriangle(
            this.Partner2Props.birthDate,
            this.Partner2Props.firstName,
            this.Partner2Props.familyName,
        );

        this._weakPointNames = this.setWeakPointNames();
        this._weakPointBirthDate = this.setWeakPointBirthDate();
        this._weakPointBirthDay = this.setWeakPointBirthDay();
        this._comparisonNames = this.getComparison(this.getPairNames());
        this._comparisonBirthDates = this.getComparison(this.getPairBirthDates());
        this.genderNumbers = new GenderNumbers(this.Partner1, this.Partner2);
    }

    public static combine(numbers: number[]): number {
        return new Gematria(ContraGematria.convertNumbersToWord(parseInt([...numbers].join(''), 10))).small;
    }

    public getMatrix(): Matrix {
        return {
            partner1: this.Partner1,
            partner2: this.Partner2,
            both: {
                destiny: Couple.combine([this.Partner1.destiny, this.Partner2.destiny]),
                firstName: Couple.combine([this.Partner1.firstName, this.Partner2.firstName]),
                birthDay: Couple.combine([this.Partner1.birthDay, this.Partner2.birthDay]),
                sumTriangle: Couple.combine([this.Partner1.sumTriangle, this.Partner2.sumTriangle]),
            },
        };
    }

    private getPairNames(): number[] {
        return [
            new Gematria(this.Partner1Props.firstName + this.Partner1Props.familyName).small,
            new Gematria(this.Partner2Props.firstName + this.Partner2Props.familyName).small,
        ];
    }

    private getPairBirthDates(): number[] {
        return [
            new Gematria(Gematria.getDateAsInput(this.Partner1Props.birthDate)).small,
            new Gematria(Gematria.getDateAsInput(this.Partner2Props.birthDate)).small,
        ];
    }

    private getComparison(numbers: number[]): string {
        return numbers
            .map((num) => MainTriangle.isMaster(num) ? num : new Gematria(num + '').small)
            .map((num, index) => index ? num : new Gematria(num + '').small)
            .sort((a, b) => a - b)
            .join('-');
    }

    private setWeakPointNames(): number {
        return Math.abs(
            new Gematria(this.Partner1Props.firstName + this.Partner1Props.familyName).small -
            new Gematria(this.Partner2Props.firstName + this.Partner2Props.familyName).small,
        );
    }

    private setWeakPointBirthDate(): number {
        return Math.abs(
            new Gematria(Gematria.getDateAsInput(this.Partner1Props.birthDate)).small -
            new Gematria(Gematria.getDateAsInput(this.Partner2Props.birthDate)).small,
        );
    }

    private setWeakPointBirthDay(): number {
        const x = new Gematria('' + this.Partner1Props.birthDate.getDate()).big;
        const y = new Gematria('' + this.Partner2Props.birthDate.getDate()).big;
        return Math.abs(
            x - y,
        );
    }
}

export default Couple;
