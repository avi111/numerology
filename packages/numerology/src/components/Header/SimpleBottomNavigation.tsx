import React from 'react';
import {Box} from "@material-ui/core";
import {IsLoggedIn, IsLoggedOut} from "../../services/auth";
import {BaseBottomNavigationAction} from './BaseBottomNavigationAction';
import {BaseBottomNavigation} from './BaseBottomNavigation';

const SimpleBottomNavigation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box display="flex">
            <IsLoggedIn>
                <BaseBottomNavigation {...{value, setValue}}>
                    <BaseBottomNavigationAction {...{to: "profile", label: "profile"}} />
                    <BaseBottomNavigationAction {...{to: "business", label: "business"}} />
                    <BaseBottomNavigationAction {...{to: "couple", label: "couple"}} />
                </BaseBottomNavigation>
            </IsLoggedIn>
            <IsLoggedOut>
                <BaseBottomNavigation {...{value, setValue}}/>
            </IsLoggedOut>
        </Box>
    );
}

export default SimpleBottomNavigation;