import React from 'react';
import { language } from '../../../contexts/LanguageContext';
import MissingNumbersComponent from './MissingNumbers';
import {profile} from "../testData/profile";

export default {
    title: "Result/Components/MissingNumbers",
    component: MissingNumbersComponent
};

const Template = () => <MissingNumbersComponent {...{profile}}/>;

export const MissingNumbers = Template.bind({});

// @ts-ignore
MissingNumbers.args = {
    loggedIn: true,
    lang: language.HEBREW
}