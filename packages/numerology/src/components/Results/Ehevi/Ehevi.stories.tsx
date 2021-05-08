import React from 'react';
import EheviComponent from './Ehevi';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/Ehevi",
    component: EheviComponent
};

export default Story;

const Template = () => <EheviComponent {...{profile}}/>;

export const Ehevi = Template.bind({});

// @ts-ignore
Ehevi.args = {
    loggedIn: true,
    lang: language.HEBREW
}