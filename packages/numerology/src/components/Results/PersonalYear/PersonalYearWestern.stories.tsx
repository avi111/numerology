import React from 'react';
import PersonalYearWesternComponent from './PersonalYearWestern';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/PersonalYearWestern",
    component: PersonalYearWesternComponent
};

export default Story;

const Template = () => <PersonalYearWesternComponent {...{profile}}/>;

export const PersonalYearWestern = Template.bind({})

// @ts-ignore
PersonalYearWestern.args = {
    loggedIn: true,
    lang: language.HEBREW
}