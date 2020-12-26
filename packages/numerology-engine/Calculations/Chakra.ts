import _uniq from 'lodash/uniq';
import {
    fireNumbers,
    getSefirah,
    goodNumbers,
    karmaticNumbers,
    masterNumbers,
    meanings,
    ZodiacSigns
} from "../consts/chakra";
import MinimalInput from "../interfaces/minimalInput";
import IChakra, {
    ChakraNames,
    ChakraNumbers,
    ChakraNums,
    Chakras,
    formulaChakra,
    TableChakra
} from "../interfaces/IChakra";
import Gematria from "../helpers/Gematria/Gematria";
import getZodiacSign from "./zodiac";
import MainTriangle from "./mainTriangle";
import Name from "./name";
import FirstName from "./firstName";

const zodiacSigns = Array.from(ZodiacSigns.keys());

export type Fire = typeof fireNumbers[number];
export type Master = typeof masterNumbers[number];
export type Karmatic = typeof karmaticNumbers[number];

class Chakra implements MinimalInput {
    public birthDate: Date;
    public firstName: string;
    public lastName: string;
    private zodiacSign?: typeof zodiacSigns[number];
    private chakras: IChakra = {} as IChakra;
    private values: ChakraNums = {} as ChakraNums;
    private fireNumbers?: ChakraNums = {} as ChakraNums;
    private goodEffectNumbers: number[] = [];
    private badEffectNumbers: number[] = [];
    private help: ChakraNums = {} as ChakraNums;
    private sixNumbers: number[] = [];

    constructor(birthDate: Date, firstName: string, lastName: string) {
        this.birthDate = birthDate;
        this.firstName = firstName;
        this.lastName = lastName;
        this.zodiacSign = getZodiacSign(birthDate);
        this.chakras = this.getChakras();
        this.fireNumbers = this.getFireNumbers();
        this.goodEffectNumbers = this.getGoodNumbers();
        this.badEffectNumbers = this.getBadNumbers();
        this.help = this.getHelpNumbers();
        this.sixNumbers = this.getSixNumbers();
    }

    public allNumbers(): number[] {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return _uniq(Object.values(this.values).flat());
    }

    public getFireNumbers(): ChakraNums {
        const filter = (values: number[]) => values
            .filter((v) => fireNumbers.indexOf(v) !== -1);
        return {
            sex: filter(this.values.sex),
            throat: filter(this.values.throat),
            solarPlexus: filter(this.values.solarPlexus),
            universe: filter(this.values.universe),
        } as ChakraNums;
    }

    public getGoodNumbers(): number[] {
        const all = this.allNumbers();
        return all.filter((num) => goodNumbers.indexOf(num) !== -1).sort();
    }

    public getBadNumbers(): number[] {
        const all = this.allNumbers();
        return all.filter((num) => karmaticNumbers.indexOf(num) !== -1).sort();
    }

    public getHelpNumbers(): ChakraNums {
        const chakraNums = {} as ChakraNums;

        if (this.chakras) {
            const result = (chakra: Chakras) => (([1, 8]
                .indexOf(Math.min(...[...chakra.value])) !== -1) && chakra.value) || [];
            chakraNums.sex = result(this.chakras.sex);
            chakraNums.throat = result(this.chakras.throat);
            chakraNums.super = result(this.chakras.super);
        }

        return chakraNums;
    }

    public getSixNumbers(): number[] {
        if (this.chakras && this.values) {
            const sumChakras = Object.values(this.chakras)
                .map((chakra) => chakra.value)
                .reduce((a, b) => a + b[b.length - 1], 0);
            const sumValues = Object.values(this.values)
                .map((chakra) => chakra)
                .reduce((a, b) => a + b[b.length - 1], 0);
            const sumSums = sumChakras + sumValues;
            const GematriaSumSums = new Gematria(sumSums + '');

            return [
                sumValues,
                new Gematria(sumValues + '').small,
                sumChakras,
                new Gematria(sumChakras + '').small,
                GematriaSumSums.getBig(true),
                GematriaSumSums.small,
            ];
        }

        return [];
    }

    public getChakras(): IChakra {
        const chakras = {} as IChakra;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.calculate();
        Object.keys(meanings).forEach((chakra) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            chakras[chakra] = {
                sefirah: getSefirah(self.getNum(chakra)),
                value: self.getChakra(chakra),
            } as Chakras;
        });

        return chakras;
    }

    public getNum(chakra: string) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return ChakraNumbers[chakra];
    }

    public calculateValues(values: Partial<typeof ChakraNumbers>): void {
        Object.keys(values).forEach((key) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const num = values[key];
            let returnValue = [];
            if ([...karmaticNumbers, ...masterNumbers].indexOf(num) !== -1) {
                returnValue = _uniq([num, new Gematria(num + '').small]);
            } else {
                returnValue = [new Gematria(num + '').small];
            }

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            this.values[key] = returnValue;
        });
    }

    public calculate() {
        const {birthDate, firstName, lastName} = this;
        const triangle = new MainTriangle(
            birthDate,
            firstName,
            lastName,
        );

        const name = new Name(lastName, firstName);

        const values: Partial<typeof ChakraNumbers> = {
            base: name.itzurim,
            sex: new FirstName(firstName + lastName).result,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            solarPlexus: triangle.objects.destiny.isKarmatic || triangle.objects.destiny.isMaster
                || triangle.destiny,
            throat: name.ehevi,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            crown: triangle.objects.birthDay.isKarmatic || triangle.objects.birthDay.isMaster
                || triangle.birthDay,
            universe: ZodiacSigns.get(this.zodiacSign as string),
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            super: triangle.objects.firstName.isKarmatic || triangle.objects.firstName.isMaster
                || triangle.firstName,
        };

        values.heart = values.solarPlexus && values.sex && (
            Math.abs(values.solarPlexus - values.sex)
        );
        values.thirdEye = values.solarPlexus && values.sex && (
            new Gematria(values.solarPlexus + '').small +
            new Gematria(values.sex + '').small
        );
        values.ID = values.base && values.solarPlexus && values.crown &&
            (
                new Gematria(values.base + '').small +
                new Gematria(values.solarPlexus + '').small +
                new Gematria(values.crown + '').small
            );

        this.calculateValues(values);
    }

    public getChakra(chakra: string) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const returnValue = this.getNum(chakra) + new Gematria(this.values[chakra][0] + '').small;
        if ([...karmaticNumbers, ...masterNumbers].indexOf(returnValue) !== -1) {
            const values = [returnValue, new Gematria(returnValue + '').small];
            return _uniq(values);
        } else {
            return [new Gematria(returnValue + '').small];
        }
    }

    public getTable(): TableChakra[] {
        const {chakras, values} = this;
        return Object.keys(ChakraNumbers).map((key) => {
            return {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                chakra: ChakraNames[key],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                formulaChakra: formulaChakra[key],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                numberChakra: values[key],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                sefirah: getSefirah(ChakraNumbers[key]),
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                formulaSefirah: [ChakraNumbers[key], '+', ChakraNames[key], 'number'],
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                numberSefirah: chakras[key],
            };
        });
    }

}

export default Chakra;
