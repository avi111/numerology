import React from "react";
import {Box, Typography } from "@material-ui/core";

export interface IReport {
    word: string,
    value: string,
    content: string,
    margin?: number
}

export const Report: React.FC<IReport> = ({
                           word,
                           value,
                           content,
                           margin = 4
                       }) => {
    return (
        <Box m={margin}>
            <Typography variant="h6">
                {word} - {value}
            </Typography>
            <Typography>{content}</Typography>
        </Box>
    )
}

export default Report;