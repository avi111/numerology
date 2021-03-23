import BottomNavigation from "@material-ui/core/BottomNavigation";
import RestoreIcon from "@material-ui/icons/Restore";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import { BaseBottomNavigationAction } from "./BaseBottomNavigationAction";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 500
    },
});

export const BaseBottomNavigation = ({
                                  children,
                                  value,
                                  setValue
                              }: { children?: any, value: number, setValue: (value: number) => void }) => {
    const classes = useStyles();
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BaseBottomNavigationAction {...{label: "home", icon: <RestoreIcon/>}} />
            {children}
        </BottomNavigation>
    )
}