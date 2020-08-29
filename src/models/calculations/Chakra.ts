import MinimalInput from '@/interfaces/minimalInput';
import IChakra, {
    ChakraNames,
    ChakraNumbers,
    ChakraNums,
    Chakras,
    formulaChakra,
    TableChakra,
} from '@/interfaces/IChakra';
import MainTriangle from '@/models/calculations/mainTriangle';
import Name from '@/models/calculations/name';
import {
    fireNumbers,
    getSefirah,
    goodNumbers,
    karmaticNumbers,
    masterNumbers,
    meanings,
    ZodiacSigns,
} from '@/consts/chakra';
import Gimatria from '@/models/helpers/gimatria';
import FirstName from '@/models/calculations/triangle/firstName';
import getZodiacSign from '@/models/calculations/zodiac';
import _uniq from 'lodash/uniq';

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
        return _uniq(Object.values(this.values).flat());
    }

    public getFireNumbers(): ChakraNums {
        const self = this;

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
            const gimatriaSumSums = new Gimatria(sumSums + '');

            return [
                sumValues,
                new Gimatria(sumValues + '').small,
                sumChakras,
                new Gimatria(sumChakras + '').small,
                gimatriaSumSums.getBig(true),
                gimatriaSumSums.small,
            ];
        }

        return [];
    }

    public getChakras(): IChakra {
        const chakras = {} as IChakra;

        const self = this;

        this.calculate();
        Object.keys(meanings).forEach((chakra) => {
            // @ts-ignore
            chakras[chakra] = {
                sefirah: getSefirah(self.getNum(chakra)),
                value: self.getChakra(chakra),
            } as Chakras;
        });

        return chakras;
    }

    public getNum(chakra: string) {
        // @ts-ignore
        return ChakraNumbers[chakra];
    }

    public calculateValues(values: Partial<typeof ChakraNumbers>): void {
        Object.keys(values).forEach((key) => {
            // @ts-ignore
            const num = values[key];
            let returnValue = [];
            if ([...karmaticNumbers, ...masterNumbers].indexOf(num) !== -1) {
                returnValue = _uniq([num, new Gimatria(num + '').small]);
            } else {
                returnValue = [new Gimatria(num + '').small];
            }

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
            // @ts-ignore
            solarPlexus: triangle.objects.destiny.isKarmatic || triangle.objects.destiny.isMaster
                || triangle.destiny,
            throat: name.ehevi,
            // @ts-ignore
            crown: triangle.objects.birthDay.isKarmatic || triangle.objects.birthDay.isMaster
                || triangle.birthDay,
            universe: ZodiacSigns.get(this.zodiacSign as string),
            // @ts-ignore
            super: triangle.objects.firstName.isKarmatic || triangle.objects.firstName.isMaster
                || triangle.firstName,
        };

        values.heart = values.solarPlexus && values.sex && (
            Math.abs(values.solarPlexus - values.sex)
        );
        values.thirdEye = values.solarPlexus && values.sex && (
            new Gimatria(values.solarPlexus + '').small +
            new Gimatria(values.sex + '').small
        );
        values.ID = values.base && values.solarPlexus && values.crown &&
            (
                new Gimatria(values.base + '').small +
                new Gimatria(values.solarPlexus + '').small +
                new Gimatria(values.crown + '').small
            );

        this.calculateValues(values);
    }

    public getChakra(chakra: string) {
        // @ts-ignore
        const returnValue = this.getNum(chakra) + new Gimatria(this.values[chakra][0] + '').small;
        if ([...karmaticNumbers, ...masterNumbers].indexOf(returnValue) !== -1) {
            const values = [returnValue, new Gimatria(returnValue + '').small];
            return _uniq(values);
        } else {
            return [new Gimatria(returnValue + '').small];
        }
    }

    public getTable(): TableChakra[] {
        const {chakras, values} = this;
        return Object.keys(ChakraNumbers).map((key) => {
            return {
// @ts-ignore
                chakra: ChakraNames[key],
// @ts-ignore
                formulaChakra: formulaChakra[key],
// @ts-ignore
                numberChakra: values[key],
// @ts-ignore
                sefirah: getSefirah(ChakraNumbers[key]),
// @ts-ignore
                formulaSefirah: [ChakraNumbers[key], '+', ChakraNames[key], 'number'],
// @ts-ignore
                numberSefirah: chakras[key],
            };
        });
    }

}

export default Chakra;
