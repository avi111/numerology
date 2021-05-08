import React from 'react';
import ConsonantsComponent from './Consonants';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/Consonants",
    component: ConsonantsComponent
};

export default Story;

const Template = () => <ConsonantsComponent {...{profile}}/>;

export const Consonants = Template.bind({});

// @ts-ignore
Consonants.args = {
    loggedIn: true,
    lang: language.HEBREW
}