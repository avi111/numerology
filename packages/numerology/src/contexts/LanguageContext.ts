import {createContext} from "react";

export enum language {
    HEBREW = "he_IL",
    ENGLISH = "en_US",
    RUSSIAN = "ru_RU"
}

export interface languageProps {
    key: language;
    engName: string;
    originName: string;
}

export interface ILanguageContext {
    dictionary: Map<string, string>;
    setCurrentLanguage: (lang: language)=>void;
    currentLanguage: language;
    getWord: (word: string) => string;
}

export const LanguageContext = createContext<ILanguageContext>({} as ILanguageContext);