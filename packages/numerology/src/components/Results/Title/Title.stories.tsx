import {default as TitleComponent} from "./Title";
import {language} from "../../../contexts/LanguageContext";
import React from "react";
import {profile} from "../testData/profile";

const Story = {
    title: 'Result/Components/Title',
    component: TitleComponent,
    argTypes: {
        loggedIn: {
            table: {
                disable: true
            }
        }
    }
}

export default Story;

const Template = () => <TitleComponent {...{profile}} />

export const Title = Template.bind({});

// @ts-ignore
Title.args = {
    loggedIn: true,
    lang: language.HEBREW
}