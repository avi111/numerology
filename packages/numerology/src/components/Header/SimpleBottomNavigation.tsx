import React from 'react';
import {Box} from "@material-ui/core";
import {IsLoggedIn, IsLoggedOut} from "../../services/auth";
import {BaseBottomNavigationAction} from './BaseBottomNavigationAction';
import {BaseBottomNavigation} from './BaseBottomNavigation';
import {useLocation} from 'react-router-dom'
import {Autorenew} from "@material-ui/icons";

const SimpleBottomNavigation = ({functions}: {functions?: {[key: string]: () => void}}) => {
    const [value, setValue] = React.useState(0);
    const location = useLocation();

    const invoke = (key: string) => functions && functions[key] && functions[key]();
    return (
        <Box display="flex">
            <IsLoggedIn>
                <BaseBottomNavigation {...{value, setValue}}>
                    <BaseBottomNavigationAction {...{to: "profile", label: "profile"}} />
                    <BaseBottomNavigationAction {...{to: "business", label: "business"}} />
                    <BaseBottomNavigationAction {...{to: "couple", label: "couple"}} />
                    {location.pathname === '/contents' &&
                    <BaseBottomNavigationAction {...{
                        onClick: () => invoke("sync contents"),
                        label: "sync contents",
                        to: '/',
                        icon: <Autorenew/>
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