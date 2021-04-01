import React from 'react';
import {default as ProfileReportComponent} from './ProfileReport';
import {language} from "../../../../contexts/LanguageContext";
import {gender, Profile} from "@maya259/numerology-engine";
import {profile} from "../../testData/profile";

export default {
    title: "Result/Reports",
    component: ProfileReportComponent,
    argTypes: {
        loggedIn: {
            table: {
                disable: true
            }
        },
        profile: {
            table: {
                disable: true
            }
        }
    }
};

const Template = (args: { hebrewDate: boolean; width: number }) => {
    return (
        <ProfileReportComponent profile={profile}/>
    );
}

export const ProfileReport = Template.bind({});

// @ts-ignore
ProfileReport.args = {
    loggedIn: true,
    lang: language.HEBREW
}