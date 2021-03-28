import React, {useContext, useEffect, useState} from "react";
import {direction, ILanguageContext, language, LanguageContext} from "../contexts/LanguageContext";
import {languages} from "../consts/languages";
import {dictionaryEntries} from "../consts/dictionary";
import {UserContext} from "../contexts/UserContext";
import {updateUserData} from "../api/usersApi/updateUserData";
import {prepareProps} from "../components/FormComponents/UserDetails/UserDetails";
import {userDetailsProps} from "../components/FormComponents/UserDetails/interface";

export const LanguageProvider = ({children}: {
    children: any;
}) => {
    const userContext = useContext(UserContext);
    const [currentLanguage, setCurrentLanguage] = useState<language>(language.HEBREW);
    const [dictionary, setDictionary] = useState<Map<string, string>>(new Map());

    const getWord: (word: string) => string = word => dictionary.get(word.toLowerCase()) || word;

    useEffect(() => {
        setDictionary(dictionaryEntries[currentLanguage] as Map<string, string>)
        if(userContext.userDetails) {
            userContext.userDetails.language = currentLanguage;
            updateUserData(prepareProps(userContext.userDetails as userDetailsProps))?.then(() => {
                console.log(`language updated: ${languages.get(currentLanguage)?.originName}`)
            });
        }
    }, [currentLanguage, userContext.userDetails]);

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