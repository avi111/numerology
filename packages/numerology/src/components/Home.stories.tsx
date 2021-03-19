import React from 'react';
import {Meta} from '@storybook/react';
import Home from "./Home";
import LoginHelper from "../stories/LoginHelper";

export default {
    title: 'Pages/Home',
    component: Home
} as Meta;


const Template = (args: { loggedIn: any; }) => {
    return (
        <LoginHelper {...{args}}>
            <Home/>
        </LoginHelper>
    );
}

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