import React, {useEffect, useState} from "react";
import {direction, ILanguageContext, language, LanguageContext} from "../contexts/LanguageContext";
import {languages} from "../consts/languages";
import {dictionaryEntries, dictionaryKeys} from "../consts/dictionary";

export const LanguageProvider = ({children}: {
    children: any;
}) => {
    const [currentLanguage, setCurrentLanguage] = useState<language>((localStorage.getItem('language') as language) || language.HEBREW);
    const [dictionary, setDictionary] = useState<Map<dictionaryKeys, string>>(new Map());

    const getWord: (word: dictionaryKeys) => string = word => {
        return (dictionary.get((word as unknown as string).toLowerCase() as unknown as dictionaryKeys) || word) as string;
    }

    useEffect(() => {
        setDictionary(dictionaryEntries[currentLanguage] as unknown as Map<dictionaryKeys, string>)
        localStorage.setItem('language', currentLanguage);
    }, [currentLanguage]);

    const getDirection = () => languages.get(currentLanguage)?.direction || direction.LTR;

    return <LanguageContext.Provider
        value={{
            currentLanguage,
            setCurrentLanguage,
            dictionary,
            getWord,
            getDirection
        } as unknown as ILanguageContext}>{children}</LanguageContext.Provider>;
}