import {Box, Typography} from "@material-ui/core";
import * as React from "react";

export interface ITitle {
    title: string | JSX.Element,
    inline?: boolean
}

const Title: React.FC<ITitle> = ({title, inline = false}) => {
    return inline ? (
        <Box component="span" fontWeight={700}>
            <Typography component="span">{title}</Typography>
        </Box>
    ) : (
        <Box display="flex" alignItems="center">
            <Typography
                variant="h6">
                {title}
            </Typography>
        </Box>
    )
}

export default Title;