import React from 'react';
import { language } from '../../../contexts/LanguageContext';
import MatchNameBirthComponent from './MatchNameBirth';
import {profile} from "../testData/profile";

export default {
    title: "Result/Components/MatchNameBirth",
    component: MatchNameBirthComponent
};

const Template = () => <MatchNameBirthComponent {...{profile}}/>;

export const MatchNameBirth = Template.bind({});

// @ts-ignore
MatchNameBirth.args = {
    loggedIn: true,
    lang: language.HEBREW
}