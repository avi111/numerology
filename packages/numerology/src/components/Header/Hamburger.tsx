import React from "react";
import {Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {useStores} from "../../stores/helpers/use-stores";
import {Views} from "../../stores/ui/global-view";
import DehazeIcon from '@material-ui/icons/Dehaze';

const Hamburger = () => {
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const {uiStores: {globalView}, dataStores: {usersStore}} = useStores();

    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor: string) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {globalView.currentView === Views.LoggedOut && (
                    <ListItem button onClick={usersStore.login}>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-in-alt"/>
                            </ListItemIcon>
                            <ListItemText primary="Sign in"/>
                        </React.Fragment>
                    </ListItem>
                )}
                {globalView.currentView === Views.LoggedIn && (
                    <ListItem button>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-out-alt"/>
                            </ListItemIcon>
                            <ListItemText primary="Sign Out"/>
                        </React.Fragment>
                    </ListItem>
                )}
            </List>
        </div>
    );

    const icons = {
        left: <DehazeIcon/>
    }

    const anchor = 'left';
    return (
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{icons[anchor]}</Button>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </React.Fragment>
    );
}

export default Hamburger