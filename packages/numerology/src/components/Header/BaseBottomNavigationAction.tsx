import FavoriteIcon from "@material-ui/icons/Favorite";
import React, {useContext} from "react";
import {LanguageContext} from "../../contexts/LanguageContext";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        textTransform: "capitalize"
    },
});

export const BaseBottomNavigationAction = ({
                                        to = "",
                                        label,
                                        icon = <FavoriteIcon/>
                                    }: { to?: string, label: string, icon?: JSX.Element }) => {
    const {getWord} = useContext(LanguageContext);
    const classes = useStyles();

    return (
        <BottomNavigationAction
            component={Link}
            to={`/${label.toLowerCase() || ""}`}
            showLabel={true}
            label={<Typography className={classes.root}>{getWord(label)}</Typography>}
            icon={icon}/>
    );
}