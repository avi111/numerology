import {Box, Typography} from "@material-ui/core";
import React from "react";

const Title = ({title}: {title: string | JSX.Element}) => {
    return (
        <Box display="flex" alignItems="center">
            <Typography
                variant="h6">{title}</Typography>
        </Box>
    )
}

export default Title;