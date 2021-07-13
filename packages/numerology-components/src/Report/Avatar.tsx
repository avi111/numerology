import {Avatar as MUIAvatar, Box} from "@material-ui/core";
import * as React from "react";

export interface IAvatar {
    className: string | undefined,
    value: string
}

export const Avatar: React.FC<IAvatar> = ({
                              className,
                              value
                          }) => {
    return (
        <Box>
            <MUIAvatar className={className}>{value}</MUIAvatar>
        </Box>
    )
}