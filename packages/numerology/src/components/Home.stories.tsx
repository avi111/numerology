import React from 'react';
import {Meta} from '@storybook/react';
import Home from "./Home";
import {language} from "../contexts/LanguageContext";

export default {
    title: 'Pages/Home',
    component: Home
} as Meta;


const Template = () => <Home/>;

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