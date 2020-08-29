import IChakra from '@/interfaces/IChakra';

const numbers = Object.keys(Array(9).fill({})).map((n) => parseInt(n, 10) + 1);
export const fireNumbers = [1, 11, 22, 3, 5, 8, 9];
export const masterNumbers = [9, 11, 22];
export const karmaticNumbers = [13, 14, 16, 19, 15];
export const goodNumbers = [1, 9, 11, 12];

type Numbers = typeof numbers[number];
type Ten = Numbers & 10;
type Fire = typeof fireNumbers[number];
type Master = typeof masterNumbers[number];
type Karmatic = typeof karmaticNumbers[number];
type Bad = Karmatic;

const allNumbers = [
    ...karmaticNumbers,
    ...masterNumbers,
    ...numbers,
];

type meaningfulNumbers = {
    [key in keyof IChakra]: Map<number, string[]>;
};

const meanings: meaningfulNumbers = {} as meaningfulNumbers;

const chakras = Object.keys({
    ID: undefined,
    base: undefined,
    crown: undefined,
    heart: undefined,
    sex: undefined,
    solarPlexus: undefined,
    super: undefined,
    thirdEye: undefined,
    throat: undefined,
    universe: undefined,
} as unknown as IChakra);

enum Meanings {
    BAD_WAY = 'affects in a bad way',
    GOOD_WAY = 'affects in a good way',
    DEAL_WITH_SOLAR = 'will help to deal with bad numbers in Solar Plexus chakra',
    HARD = 'hard number',
    GOOD = 'good number',
    BAD = 'bad number',
    UNBALANCED = 'indicates an unbalanced map',
    POSITIVE = 'generally good, important to be on the positive side',
    DISTURB = 'as a karmatic number it\'s disturbing',
    HELP = 'will help to the person',
    VERY_HARD = 'very hard number',
    VERY_GOOD = 'very good number',
    BIG_EFFECT = 'very big effect',
    WANNA_SEE = 'number we\'d want to see',
    LIFE_SUCCESSFUL = 'helps to make life successful',
    LUCK = 'big luck',
}


// getWord('affects in a bad way')
// getWord('affects in a good way')
// getWord('will help to deal with bad numbers in Solar Plexus chakra')
// getWord('hard number')
// getWord('good number')
// getWord('bad number')
// getWord('indicates an unbalanced map')
// getWord('generally good) important to be on the positive side')
// getWord('as a karmatic number it\'s disturbing')
// getWord('will help to the person')
// getWord('very hard number')
// getWord('very good number')
// getWord('very big effect')
// getWord('number we\'d want to see')
// getWord('helps to make life successful')
// getWord('big luck')


const setMeaning = (map: Map<number, string[]>, num: number, meaning: string) => {
    map.set(num, [...(map.get(num) || []), meaning]);
};

chakras.forEach((chakra) => {
    const map = new Map<number, string[]>();

    allNumbers.forEach((num) => {
        map.set(num, []);
    });

    // karmaticNumbers.forEach((num) => setMeaning(map, num, Meanings.BAD_WAY));
    // goodNumbers.forEach((num) => setMeaning(map, num, Meanings.GOOD_WAY));

    // @ts-ignore
    meanings[chakra] = map;
});

karmaticNumbers.forEach((num) => setMeaning(meanings.base, num, Meanings.HARD));
fireNumbers.forEach((num) => setMeaning(meanings.base, num, Meanings.WANNA_SEE));

[2].forEach((num) => setMeaning(meanings.sex, num, Meanings.HARD));
[1, 8, 5, 3].forEach((num) => setMeaning(meanings.sex, num, Meanings.WANNA_SEE));
[1, 8].forEach((num) => setMeaning(meanings.sex, num, Meanings.GOOD_WAY));

[2, 7, 8, 11].forEach((num) => setMeaning(meanings.solarPlexus, num, Meanings.BAD));
[1, 9].forEach((num) => setMeaning(meanings.solarPlexus, num, Meanings.GOOD));

[7, 2].forEach((num) => setMeaning(meanings.throat, num, Meanings.BAD_WAY));
[5, 3, 9, 1, 8].forEach((num) => setMeaning(meanings.throat, num, Meanings.LIFE_SUCCESSFUL));
[1, 8].forEach((num) => setMeaning(meanings.throat, num, Meanings.GOOD_WAY));

[0].forEach((num) => setMeaning(meanings.thirdEye, num, Meanings.LUCK));
[2, 7, 8].forEach((num) => setMeaning(meanings.thirdEye, num, Meanings.BAD_WAY));

goodNumbers.forEach((num) => setMeaning(meanings.crown, num, Meanings.VERY_GOOD));
[2, 7].forEach((num) => setMeaning(meanings.crown, num, Meanings.VERY_HARD));

allNumbers.forEach((num) => setMeaning(meanings.ID, num, Meanings.POSITIVE));
karmaticNumbers.forEach((num) => setMeaning(meanings.ID, num, Meanings.DISTURB));

[1, 22].forEach((num) => setMeaning(meanings.universe, num, Meanings.HELP));
[2, 7].forEach((num) => setMeaning(meanings.universe, num, Meanings.VERY_HARD));

karmaticNumbers.forEach((num) => setMeaning(meanings.super, num, Meanings.UNBALANCED));
[1, 8].forEach((num) => setMeaning(meanings.super, num, Meanings.GOOD_WAY));

const ZodiacSigns = new Map<string, number>();
ZodiacSigns.set('Aries', 9);
ZodiacSigns.set('Taurus', 33);
ZodiacSigns.set('Gemini', 5);
ZodiacSigns.set('Cancer', 2);
ZodiacSigns.set('Leo', 1);
ZodiacSigns.set('Virgo', 4);
ZodiacSigns.set('Libra', 6);
ZodiacSigns.set('Scorpio', 22);
ZodiacSigns.set('Sagittarius', 3);
ZodiacSigns.set('Capricorn', 8);
ZodiacSigns.set('Aquarius', 11);
ZodiacSigns.set('Pisces', 7);

// getWord('Aries')
// getWord('Taurus')
// getWord('Gemini')
// getWord('Pisces')
// getWord('Aquarius')
// getWord('Capricorn')
// getWord('Scorpio')
// getWord('Sagittarius')
// getWord('Libra')
// getWord('Virgo')
// getWord('Leo')
// getWord('Cancer')

const Sefirah = [
    'Keter',
    'Chokhmah',
    'Binah',
    'Chesed',
    'Gevurah',
    'Tiferet',
    'Netzach',
    'Hod',
    'Yesod',
    'Malkuth',
];

// getWord('Keter')
// getWord('Chokhmah')
// getWord('Binah')
// getWord('Chesed')
// getWord('Gevurah')
// getWord('Tiferet')
// getWord('Netzach')
// getWord('Hod')
// getWord('Yesod')
// getWord('Malkuth')


const getSefirah = (num: Ten) => {
    return Sefirah[num - 1];
};

export {
    Sefirah,
    getSefirah,
    ZodiacSigns,
    meanings,
};

