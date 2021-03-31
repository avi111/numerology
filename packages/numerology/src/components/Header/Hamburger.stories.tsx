import React from 'react';
import Hamburger from './Hamburger';
import {language} from "../../contexts/LanguageContext";
import {Meta} from "@storybook/react";

export default {
    title: 'Header/Hamburger',
    component: Hamburger,
    args: {
        loggedIn: true,
        lang: language
    }
} as Meta;


const Template = () => <Hamburger/>

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