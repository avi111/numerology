import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import React, {useContext} from "react";
import {language, LanguageContext} from "../../contexts/LanguageContext";
import "flag-icon-css/sass/flag-icon.scss";
import {languages} from "../../consts/languages";

export const LanguageMenu = () => {
    const {setCurrentLanguage, getWord} = useContext(LanguageContext);

    const switchLanguage = (lang: language) => {
        return setCurrentLanguage(lang);
    }

    return (
        <React.Fragment>
            {
                Array.from(languages.keys()).map(lang => {
                    const {originName, flag, engName = ""} = languages.get(lang) || {};
                    return (
                        <ListItem key={lang} button onClick={() => switchLanguage(lang)}>
                            <React.Fragment>
                                <ListItemIcon>
                                    <span className={`flag-icon flag-icon-${flag} flag-icon-squared`}></span>
                                </ListItemIcon>
                                <ListItemText
                                    primary={originName === getWord(engName) ? originName : `${originName} (${getWord(engName)})`}/>
                            </React.Fragment>
                        </ListItem>
                    )
                })
            }
        </React.Fragment>
    )
}