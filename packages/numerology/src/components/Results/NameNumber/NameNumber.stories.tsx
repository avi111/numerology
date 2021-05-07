import React from 'react';
import { language } from '../../../contexts/LanguageContext';
import NameNumberComponent from './NameNumber';
import {profile} from "../testData/profile";

export default {
    title: "Result/Components/NameNumber",
    component: NameNumberComponent
};

const Template = () => <NameNumberComponent {...{profile}}/>;

export const NameNumber = Template.bind({});

// @ts-ignore
NameNumber.args = {
    loggedIn: true,
    lang: language.HEBREW
}