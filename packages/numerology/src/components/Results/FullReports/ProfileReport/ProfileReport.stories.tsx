import React from 'react';
import {default as ProfileReportComponent} from './ProfileReport';
import {language} from "../../../../contexts/LanguageContext";
import {profile} from "../../testData/profile";

const Story = {
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

export default Story;

const Template = () => {
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