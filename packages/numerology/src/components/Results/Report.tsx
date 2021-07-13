import {ClassNameMap} from "@material-ui/core/styles/withStyles";
import React, {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import {Report as RReport} from "@maya259/components"

export interface IReport {
    word: string,
    value: string,
    content: string,
    classes?: ClassNameMap,
    margin?: number
}

export const Report = ({
                           word,
                           value,
                           classes = {},
                           content,
                           margin = 4
                       }: IReport) => {
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;
    return (
        <RReport {...{
            classes,
            value,
            word: getWord(word),
            content: getWord(content)
        }} />
    );

}