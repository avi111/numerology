import React from "react";
import {Box, Typography} from "@material-ui/core";
import {ClassNameMap} from "@material-ui/core/styles/withStyles";

export interface IReport {
    word: string,
    value: string,
    content: string,
    margin?: number,
    classes?: ClassNameMap,
}

export const Report: React.FC<IReport> = ({
                                              word,
                                              value,
                                              content,
                                              margin = 4,
                                              classes
                                          }) => {
    return (
        <Box m={margin}>
            <Typography variant="h6" classes={{root: classes.root}}>
                {word} - {value}
            </Typography>
            <Typography>{content}</Typography>
        </Box>
    )
}

export default Report;