import React from 'react';
import PersonalYearHiddenComponent from './PersonalYearHidden';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/PersonalYearHidden",
    component: PersonalYearHiddenComponent
};

export default Story;

const Template = () => <PersonalYearHiddenComponent {...{profile}}/>;

export const PersonalYearHidden = Template.bind({})

// @ts-ignore
PersonalYearHidden.args = {
    loggedIn: true,
    lang: language.HEBREW
}