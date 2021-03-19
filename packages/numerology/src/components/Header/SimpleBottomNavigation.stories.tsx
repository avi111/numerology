import React from 'react';
import {Meta} from '@storybook/react';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import RouterHelper from "../../stories/RouterHelper";
import LoginHelper from "../../stories/LoginHelper";

export default {
    title: 'Header/SimpleBottomNavigation',
    component: SimpleBottomNavigation
} as Meta;

const Template = (args: { loggedIn: any; }) => {
    return (
        <RouterHelper>
            <LoginHelper {...{args}}>
                <SimpleBottomNavigation/>
            </LoginHelper>
        </RouterHelper>
    )
};

export const LoggedIn = Template.bind({});
// @ts-ignore
LoggedIn.args = {
    loggedIn: true
}

export const LoggedOut = Template.bind({});
// @ts-ignore
LoggedOut.args = {
    loggedIn: false
}