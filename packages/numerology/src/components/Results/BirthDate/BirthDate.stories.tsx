import React from 'react';
import {DateTypes, default as BirthDateComponent} from './BirthDate';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";

const Story = {
    title: 'Result/Components/Birthdate',
    component: BirthDateComponent,
    argTypes: {
        loggedIn: {
            table: {
                disable: true
            }
        },
        date: {
            control: {
                name: 'dateType',
                type: 'select',
                description: 'date type',
                options: DateTypes,
                defaultValue: DateTypes.GREGORIAN
            }
        },
    }
};

export default Story;

const Template = ({date}: { date: DateTypes }) => {
    return (
        <BirthDateComponent  {...{profile, date, showWhenNull: true}} />
    )
}

export const BirthDate = Template.bind({});

// @ts-ignore
BirthDate.args = {
    loggedIn: true,
    lang: language.HEBREW,
    date: DateTypes.GREGORIAN,
}
