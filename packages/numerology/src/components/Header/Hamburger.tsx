import React, {useContext} from "react";
import {Button, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import clsx from "clsx";
import {IsLoggedIn, IsLoggedOut} from "../../services/auth";
import {UserContext} from "../../contexts/UserContext";
import {direction, LanguageContext} from "../../contexts/LanguageContext";
import {languages} from "../../consts/languages";
import {Link} from "react-router-dom";
import {BorderColor, Dehaze, Person} from "@material-ui/icons";

const Hamburger = () => {
    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });

    const userContext = useContext(UserContext);
    const langContext = useContext(LanguageContext);
    const {getWord} = langContext;
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
        right: false
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
                <IsLoggedOut>
                    <ListItem button onClick={userContext.login}>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-in-alt"/>
                            </ListItemIcon>
                            <ListItemText primary={getWord("Sign in")}/>
                        </React.Fragment>
                    </ListItem>
                </IsLoggedOut>
                <IsLoggedIn>
                    <ListItem button onClick={userContext.logout}>
                        <React.Fragment>
                            <ListItemIcon>
                                <i className="fas fa-sign-out-alt"/>
                            </ListItemIcon>
                            <ListItemText primary={getWord("Sign Out")}/>
                        </React.Fragment>
                    </ListItem>
                    <ListItem button component={Link} to="/user">
                        <React.Fragment>
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary={getWord("Edit user details")}/>
                        </React.Fragment>
                    </ListItem>
                    {(userContext.userDetails?.admin || userContext.enableEditContents) && <ListItem button component={Link} to="/contents">
                        <React.Fragment>
                            <ListItemIcon>
                                <BorderColor/>
                            </ListItemIcon>
                            <ListItemText primary={getWord("Edit contents")}/>
                        </React.Fragment>
                    </ListItem>}
                </IsLoggedIn>
            </List>
        </div>
    );

    const icons = {
        left: <Dehaze/>,
        right: <Dehaze/>
    }

    const anchor = languages.get(langContext.currentLanguage)?.direction === direction.LTR ?
        'left' :
        'right';

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