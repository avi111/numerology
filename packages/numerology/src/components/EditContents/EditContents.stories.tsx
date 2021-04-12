import React from 'react';
import EditContentsComponent from './EditContents';
import {language} from "../../contexts/LanguageContext";

const Story = {
    title: "Forms/EditContents",
    component: EditContentsComponent
};

export default Story;

const Template = () => <EditContentsComponent/>;

export const EditContents = Template.bind({});

// @ts-ignore
EditContents.args = {
    loggedIn: true,
    lang: language.HEBREW
}