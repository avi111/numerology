import React, {useContext} from "react";
import {Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import DehazeIcon from '@material-ui/icons/Dehaze';
import {observer} from "mobx-react-lite";
import {IsLoggedIn, IsLoggedOut} from "../../services/auth";
import {UserContext} from "../../contexts/UserContext";

const Hamburger = observer(() => {
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const userContext = useContext(UserContext);
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
                <IsLoggedIn>
                    <ListItem button onClick={userContext.login}>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-in-alt"/>
                            </ListItemIcon>
                            <ListItemText primary="Sign in"/>
                        </React.Fragment>
                    </ListItem>
                </IsLoggedIn>
                <IsLoggedOut>
                    <ListItem button onClick={userContext.logout}>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-out-alt"/>
                            </ListItemIcon>
                            <ListItemText primary="Sign Out"/>
                        </React.Fragment>
                    </ListItem>
                </IsLoggedOut>
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
});

export default Hamburger