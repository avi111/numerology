import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from "react-router-dom";
import {Box} from "@material-ui/core";
import {useStores} from "../../stores/helpers/use-stores";
import {Views} from "../../stores/ui/global-view";
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
                <BottomNavigationAction label={<Link to="/">Home</Link>} icon={<Link to="/"><RestoreIcon/></Link>}/>
                <IsLoggedIn>
                    <BottomNavigationAction label={<Link to="/profile">Profile</Link>}
                                            icon={<Link to="/profile"><FavoriteIcon/></Link>}/>
                    <BottomNavigationAction label={<Link to="/couple">Couple</Link>}
                                            icon={<Link to="/couple"><FavoriteIcon/></Link>}/>
                </IsLoggedIn>
            </BottomNavigation>
        </Box>
    );
});

export default SimpleBottomNavigation;