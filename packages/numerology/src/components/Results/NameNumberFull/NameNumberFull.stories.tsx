import React from 'react';
import { language } from '../../../contexts/LanguageContext';
import NameNumberFullComponent from './NameNumberFull';
import {profile} from "../testData/profile";

export default {
    title: "Result/Components/NameNumberFull",
    component: NameNumberFullComponent
};

const Template = () => <NameNumberFullComponent {...{profile}}/>;

export const NameNumberFull = Template.bind({});

// @ts-ignore
NameNumberFull.args = {
    loggedIn: true,
    lang: language.HEBREW
}