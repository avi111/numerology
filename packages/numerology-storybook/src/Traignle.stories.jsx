import React from 'react';

import {Triangle} from "@maya259/components";
import MainTriangle from "@maya259/numerology-engine/Calculations/mainTriangle";

export default {
    title: 'UI Components/Triangle',
    component: Triangle,
};

export const CivilDate = (() => <Triangle {...{
    triangle: new MainTriangle(
        new Date('1980-9-16'),
        'אבי',
        'לבקוביץ',
    ),
    width: 200,
    hebrewDate: false,
    words: {
        destiny: "גורל",
        firstName: "שם פרטי",
        birthDay: "יום הולדת",
    }
}}/>).bind({})

export const HebDate = (() => <Triangle {...{
    triangle: new MainTriangle(
        new Date('1980-9-16'),
        'אבי',
        'לבקוביץ',
    ),
    width: 200,
    hebrewDate: true,
    words: {
        destiny: "גורל",
        firstName: "שם פרטי",
        birthDay: "יום הולדת",
    }
}}/>).bind({})