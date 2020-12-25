import {Sefirah} from '@/consts/chakra';

export interface Chakras {
    value: number[];
    sefirah: typeof Sefirah[number];
}

export interface ChakraNums {
    base: number[];
    sex: number[];
    solarPlexus: number[];
    heart: number[];
    throat: number[];
    thirdEye: number[];
    crown: number[];
    ID: number[];
    universe: number[];
    super: number[];
}

interface IChakra {
    base: Chakras;
    sex: Chakras;
    solarPlexus: Chakras;
    heart: Chakras;
    throat: Chakras;
    thirdEye: Chakras;
    crown: Chakras;
    ID: Chakras;
    universe: Chakras;
    super: Chakras;
}

export default IChakra;

export const ChakraNumbers = {
    base: 10,
    sex: 9,
    solarPlexus: 8,
    heart: 7,
    throat: 6,
    thirdEye: 5,
    crown: 4,
    ID: 3,
    universe: 2,
    super: 1,
};

export const ChakraNames = {
    base: 'base',
    sex: 'sex',
    solarPlexus: 'solar plexus',
    heart: 'heart',
    throat: 'throat',
    thirdEye: 'third eye',
    crown: 'crown',
    ID: 'ID',
    universe: 'universe',
    super: 'super',
};

export interface TableChakra {
    chakra: string;
    formulaChakra: string;
    numberChakra: number[];
    sefirah: string;
    formulaSefirah: string[];
    numberSefirah: Chakras;
}

export interface TableChakraTranslated {
    chakra: string;
    formulaChakra: string;
    numberChakra: string;
    sefirah: string;
    formulaSefirah: string;
    numberSefirah: string;
}

export const formulaChakra = {
    base: 'itzurim in the full name',
    sex: 'full name number',
    solarPlexus: 'destiny number',
    heart: 'solar plexus number minus sex number',
    throat: 'ehevi in the full name',
    thirdEye: 'solar plexus number plus sex number',
    crown: 'birth day number',
    ID: 'base number plus solar plexus number plus crown number',
    universe: 'astrologic zodiac sign',
    super: 'first name number',
};
