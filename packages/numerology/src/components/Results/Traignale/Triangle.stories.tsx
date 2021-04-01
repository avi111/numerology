import {default as TriangleComponent} from "./Traingle";
import {language} from "../../../contexts/LanguageContext";
import React from "react";

export default {
    title: 'Result/Triangle',
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
        triangle={{
            sumTriangle: 2,
            birthDay: 2,
            birthYear: 4,
            firstName: 5,
            destiny: 3,
            power: 6,
            birthMonth: 5
        }}
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