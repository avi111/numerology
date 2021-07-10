import React, {useContext} from 'react';
import {Box} from "@material-ui/core";
import {IsLoggedIn, IsLoggedOut} from "../../services/auth";
import {BaseBottomNavigationAction} from './BaseBottomNavigationAction';
import {BaseBottomNavigation} from './BaseBottomNavigation';
import {useLocation} from 'react-router-dom'
import {Autorenew, Description, Person, SupervisorAccount, Work} from "@material-ui/icons";
import {AppContext} from "../../contexts/AppContext";
import {actionNames} from "../../consts/actions";
import {actions} from "../../actions";
import {LanguageContext} from "../../contexts/LanguageContext";
import {UserContext} from "../../contexts/UserContext";

const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);
    const location = useLocation();
    const appContext = useContext(AppContext)
    const langContext = useContext(LanguageContext)
    const userContext = useContext(UserContext)

    const a = actions({appContext, langContext, userContext})
    const invoke = (key: actionNames) => a && a[key] && a[key]();

    return (
        <Box display="flex">
            <IsLoggedIn>
                <BaseBottomNavigation {...{value, setValue}}>
                    <BaseBottomNavigationAction {...{to: "profile", label: "profile", icon: <Person/>}} />
                    <BaseBottomNavigationAction {...{to: "business", label: "business", icon: <Work/>}} />
                    <BaseBottomNavigationAction {...{to: "couple", label: "couple", icon: <SupervisorAccount/>}} />
                    {location.pathname === '/contents' &&
                    <BaseBottomNavigationAction {...{
                        onClick: () => invoke(actionNames.SYNC_CONTENTS),
                        label: "sync contents",
                        to: '/',
                        icon: <Autorenew/>
                    }} />
                    }
                    {appContext.lastResult?.result &&
                    <BaseBottomNavigationAction {...{
                        onClick: () => invoke(actionNames.EXPORT),
                        label: "export",
                        icon: <Description/>
                    }} />
                    }
                </BaseBottomNavigation>
            </IsLoggedIn>
            <IsLoggedOut>
                <BaseBottomNavigation {...{value, setValue}}/>
            </IsLoggedOut>
        </Box>
    );
}

export default SimpleBottomNavigation;