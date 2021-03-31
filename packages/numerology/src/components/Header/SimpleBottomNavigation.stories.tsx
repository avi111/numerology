import React from 'react';
import {Meta} from '@storybook/react';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import {language} from "../../contexts/LanguageContext";

export default {
    title: 'Header/SimpleBottomNavigation',
    component: SimpleBottomNavigation
} as Meta;

const Template = () => <SimpleBottomNavigation/>;

export const LoggedIn = Template.bind({});
export const LoggedOut = Template.bind({});
// @ts-ignore
LoggedIn.args = {
    loggedIn: true,
    lang: language.HEBREW
}

// @ts-ignore
LoggedOut.args = {
    loggedIn: false,
    lang: language.HEBREW
}