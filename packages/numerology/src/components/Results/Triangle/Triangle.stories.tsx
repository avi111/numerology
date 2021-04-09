import {default as TriangleComponent} from "./Triangle";
import {language} from "../../../contexts/LanguageContext";
import React from "react";
import {profile} from "../testData/profile";

const Story = {
    title: 'Result/Components/Triangle',
    component: TriangleComponent,
    argTypes: {
        loggedIn: {
            table: {
                disable: true
            }
        }
    }
}

export default Story;

const Template = (args: { hebrewDate: boolean; width: number }) => (
    <TriangleComponent
        triangle={profile.triangle}
        hebrewDate={args.hebrewDate}
        width={args.width}/>
)

export const Triangle = Template.bind({});

// @ts-ignore
Triangle.args = {
    loggedIn: true,
    lang: language.HEBREW,
    hebrewDate: true,
    width: 200
}