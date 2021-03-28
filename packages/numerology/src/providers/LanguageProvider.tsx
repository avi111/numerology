import React, {useEffect, useState} from "react";
import {direction, ILanguageContext, language, LanguageContext} from "../contexts/LanguageContext";
import {languages} from "../consts/languages";
import {dictionaryEntries} from "../consts/dictionary";

export const LanguageProvider = ({children}: {
    children: any;
}) => {
    const [currentLanguage, setCurrentLanguage] = useState<language>((localStorage.getItem('language') as language) || language.HEBREW);
    const [dictionary, setDictionary] = useState<Map<string, string>>(new Map());

    const getWord: (word: string) => string = word => dictionary.get(word.toLowerCase()) || word;

    useEffect(() => {
        setDictionary(dictionaryEntries[currentLanguage] as Map<string, string>)
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
        } as ILanguageContext}>{children}</LanguageContext.Provider>;
}