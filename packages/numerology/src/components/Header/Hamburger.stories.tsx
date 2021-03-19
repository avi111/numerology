import React from 'react';

import Hamburger from './Hamburger';
import LoginHelper from "../../stories/LoginHelper";

export default {
    title: 'Header/Hamburger',
    component: Hamburger
};


const Template = (args: { loggedIn: any; }) => {
    return (
        <LoginHelper {...{args}}>
            <Hamburger/>
        </LoginHelper>
    )
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