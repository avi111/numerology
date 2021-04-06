import React from 'react';
import {default as BirthDateComponent} from './BirthDate';
import {language} from "../../../contexts/LanguageContext";
import {profile} from "../testData/profile";
import {Typography} from "@material-ui/core";

const Story = {
    title: 'Result/Components/Birthdate',
    component: BirthDateComponent,
    argTypes: {
        loggedIn: {
            table: {
                disable: true
            }
        }
    }
};

export default Story;

const Template = ({lang}: { lang: language }) => {
    if (lang !== language.HEBREW) {
        lang = language.ENGLISH;
    }

    return (
        <React.Fragment>
            <Typography>
                השפה קובעת אם מדובר בתאריך עברי או לועזי
            </Typography>
            <hr />
        <BirthDateComponent  {...{profile, lang, showWhenNull: true}} />
        </React.Fragment>
    )
}

export const BirthDate = Template.bind({});

// @ts-ignore
BirthDate.args = {
    loggedIn: true,
    lang: language.ENGLISH
}
