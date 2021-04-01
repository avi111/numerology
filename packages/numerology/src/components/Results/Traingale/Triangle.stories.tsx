import {default as TriangleComponent} from "./Traingle";
import {language} from "../../../contexts/LanguageContext";
import React from "react";
import {MainTriangle} from "@maya259/numerology-engine";
import {profile} from "../testData/profile";

export default {
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