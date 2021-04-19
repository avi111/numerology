import React from 'react';
import NameLettersComponent from './NameLetters';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story =  {
    title: "Result/Components/NameLetters",
    component: NameLettersComponent
};

export default Story;

const Template = () => <NameLettersComponent {...{profile}}/>;

export const NameLetters = Template.bind({});

// @ts-ignore
NameLetters.args = {
    loggedIn: true,
    lang: language.HEBREW
}