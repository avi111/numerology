import {Avatar as MUIAvatar, Box} from "@material-ui/core";
import React from "react";

export interface IAvatar {
    className: string | undefined,
    value: string
}

export const Avatar = ({
                              className,
                              value
                          }: IAvatar) => {
    return (
        <Box>
            <MUIAvatar className={className}>{value}</MUIAvatar>
        </Box>
    )
}