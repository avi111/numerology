import {Box, Typography} from "@material-ui/core";
import React from "react";

const Title = ({title, inline = false}: { title: string | JSX.Element, inline?: boolean }) => {
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