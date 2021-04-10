import React, {useEffect, useState} from "react";
import {direction, ILanguageContext, language, LanguageContext} from "../contexts/LanguageContext";
import {dictionaryEntries, dictionaryKeys} from "../consts/dictionary";
import {languages} from "../consts/languages";

const LanguageHelper = ({args: {lang}, children}: { args: { lang: language }, children: JSX.Element }) => {
    const [currentLanguage, setCurrentLanguage] = useState<language>(lang || language.HEBREW);
    const [dictionary, setDictionary] = useState<Map<dictionaryKeys | string, string>>(new Map());

    const getWord: (word: string) => string = word => (dictionary && dictionary.get(word.toLowerCase())) || word;

    useEffect(() => {
        if (lang) {
            setCurrentLanguage(lang);
        }
    }, [lang])

    useEffect(() => {
        setDictionary(dictionaryEntries[currentLanguage] as Map<dictionaryKeys | string, string>)
    }, [currentLanguage]);

    const getDirection = () => languages.get(currentLanguage)?.direction || direction.LTR;

    return (
        <LanguageContext.Provider value={{
            currentLanguage,
            setCurrentLanguage,
            dictionary,
            getWord,
            getDirection
        } as ILanguageContext}>
                {children}
        </LanguageContext.Provider>
    )
}

export default LanguageHelper;