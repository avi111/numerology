import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from "react-router-dom";
import {Box, Typography} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import {IsLoggedIn} from "../../services/auth";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 500
    },
});

const SimpleBottomNavigation = observer(() => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <Box display="flex">
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}
            >
                <Link to="/"><BottomNavigationAction showLabel label={<Typography>Home</Typography>} icon={<RestoreIcon/>}/></Link>
                <IsLoggedIn>
                    <Link to="/profile"><BottomNavigationAction showLabel label={<Typography>Profile</Typography>} icon={<FavoriteIcon/>}/></Link>
                    <Link to="/couple"><BottomNavigationAction showLabel label={<Typography>Couple</Typography>} icon={<FavoriteIcon/>}/></Link>
                </IsLoggedIn>
            </BottomNavigation>
        </Box>
    );
});

export default SimpleBottomNavigation;