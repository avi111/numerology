import {Box, Typography} from "@material-ui/core";
import {ClassNameMap} from "@material-ui/core/styles/withStyles";
import React, {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";

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
        <Box m={margin}>
            <Typography variant="h6"
                        classes={{root: classes.root}}>
                {getWord(word)} - {value}
            </Typography>
            <Typography>{getWord(content)}</Typography>
        </Box>
    )
}