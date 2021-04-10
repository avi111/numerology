import {createContext} from "react";
import {dictionaryKeys} from "../consts/dictionary";

export enum language {
    HEBREW = "he_IL",
    ENGLISH = "en_US",
    RUSSIAN = "ru_RU"
}

export enum direction {
    RTL="rtl",
    LTR="ltr"
}
export interface languageProps {
    engName: string;
    originName: string;
    direction: direction;
    flag: string;
}

export interface ILanguageContext {
    dictionary: Map<dictionaryKeys | string, string>;
    setCurrentLanguage: (lang: language)=>void;
    currentLanguage: language;
    getWord: (word: string) => string;
    getDirection: () => direction;
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);