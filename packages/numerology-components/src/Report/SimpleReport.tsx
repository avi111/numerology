import {Box, Typography} from "@material-ui/core";
import React from "react";
import Title from "./Title";

export interface ISimpleReport {
    content: string;
    title?: string;
    inline: boolean
}

const SimpleReport: React.FC<ISimpleReport> = ({
                                                   content,
                                                   title,
                                                   inline = false
                                               }) => {
    return (
        <Box className="SimpleResult">
            <Box mb={4} display={inline ? "inline" : undefined}>
                {(title) && <Title
                    {...{
                        title,
                        inline
                    }}
                />}
                {content && <Typography component={inline ? "span" : "p"}>{content}</Typography>}
            </Box>
        </Box>
    )
}

export default SimpleReport