import React, {useEffect, useState} from "react";
import {ILanguageContext, language, LanguageContext} from "../contexts/LanguageContext";

export const LanguageProvider = ({children}: {
    children: any;
}) => {
    const [currentLanguage, setCurrentLanguage] = useState<language>(language.HEBREW);
    const [dictionary, setDictionary] = useState<Map<string, string>>(new Map());

    const getWord: (word: string) => string = word => dictionary.get(word.toLowerCase()) || word;

    useEffect(() => {
        const entries = {
            [language.HEBREW]: new Map([['home', 'בית']]),
            [language.ENGLISH]: new Map([['home', 'home']]),
            [language.RUSSIAN]: new Map([['home', 'домашняя страница']]),
        };
        setDictionary(entries[currentLanguage] as Map<string, string>)
    }, [currentLanguage]);

    return <LanguageContext.Provider
        value={{
            currentLanguage,
            setCurrentLanguage,
            dictionary,
            getWord
        } as ILanguageContext}>{children}</LanguageContext.Provider>;
}