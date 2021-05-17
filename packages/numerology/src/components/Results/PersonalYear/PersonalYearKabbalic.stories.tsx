import React from 'react';
import PersonalYearKabbalicComponent from './PersonalYearKabbalic';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/PersonalYearKabbalic",
    component: PersonalYearKabbalicComponent
};

export default Story;

const Template = () => <PersonalYearKabbalicComponent {...{profile}}/>;

export const PersonalYearKabbalic = Template.bind({})

// @ts-ignore
PersonalYearKabbalic.args = {
    loggedIn: true,
    lang: language.HEBREW
}