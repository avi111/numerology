import {EHEVI_LETTERS, REGULAR_LETTERS, SUFFIX_LETTERS} from "../../consts/letters";

class Letters {
    private readonly letter: string;

    constructor(letter: string) {
        this.letter = letter;
    }

    public static isRegular(letter: string): boolean {
        return REGULAR_LETTERS.indexOf(letter) !== -1;
    }

    public static isSuffix(letter: string): boolean {
        return SUFFIX_LETTERS.indexOf(letter) !== -1;
    }

    public static convert(letter: string) {
        if (Letters.isSuffix(letter)) {
            return Letters.str_replace(SUFFIX_LETTERS, REGULAR_LETTERS, letter);
        } else {
            return letter;
        }
    }

    public static str_replace(findArray: string[], replaceArray: string[], str: string): string {
        const newToken = (i: any) => {
            return replaceArray[findArray.indexOf(i)];
        };
        const regexp = new RegExp('(' + (findArray.map((i) => i.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')).join('|')) + ')', 'g');
        return str.replace(regexp, newToken as unknown as string);
    }

    public isItzur(): boolean {
        return !this.isEhevi();
    }

    public isEhevi(): boolean {
        return EHEVI_LETTERS.indexOf(this.letter) !== -1;
    }
}

export default Letters;
