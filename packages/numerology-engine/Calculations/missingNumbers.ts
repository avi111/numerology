import Props from "../interfaces/props";
import Gematria from "../helpers/Gematria/Gematria";

export interface Occurence {
    existing: number[];
    missing: number[];
    occurence: number[];
}

type Name = Partial<Props>;

export interface NameLetter {
    letter: string;
    value: number;
}

class MissingNumbers implements Name, Occurence {
    public familyName: string;
    public firstName: string;
    public fullName: NameLetter[];
    public existing: number[];
    public missing: number[];
    public occurence: number[];

    constructor(firstName: string, familyName: string) {
        this.familyName = familyName;
        this.firstName = firstName;
        const fullName = [this.firstName, this.familyName].join('');
        const {existing, missing, occurence} = MissingNumbers.findOccurence(
            fullName,
        );

        this.fullName = this.getFullName(fullName);
        this.existing = existing;
        this.missing = missing;
        this.occurence = occurence;
    }

    public static findOccurence(name: string): Occurence {
        const numbers = name.split('').map((letter) => new Gematria(letter).small);

        const occurence: number[] = new Array(10).fill(0);

        numbers.forEach((num: number) => {
            occurence[num] = occurence[num] + 1;
        });

        delete occurence[0];

        const existing: number[] = [];
        const missing: number[] = [];

        occurence.forEach((num: number, index: number) => {
            if (num) {
                existing.push(index);
            } else {
                missing.push(index);
            }
        });

        return {
            existing,
            missing,
            occurence,
        };
    }

    public getFullName(name: string): NameLetter[] {
        return name.split('').map((letter) => {
            return {
                letter,
                value: new Gematria(letter).small,
            };
        });
    }

    public getOccurencce(num: number): number {
        if (([] as number[]).concat(this.existing, this.missing).indexOf(num) === -1) {
            return 0;
        }
        return this.occurence[num];
    }

    public isMissing(num: number): boolean {
        return ([] as number[]).concat(this.missing).indexOf(num) !== -1;
    }
}

export default MissingNumbers;
