import {language} from "../contexts/LanguageContext";

export const dictionaryEntries = {
    [language.HEBREW]: new Map([
        ['home', 'בית'],
        ['avi', 'אבי'],
        ['hebrew', 'עברית'],
        ['english', 'אנגלית'],
        ['russian', 'רוסית'],
        ['levkovich', 'לבקוביץ'],
        ['welcome', 'ברוכים הבאים'],
        ['profile', 'פרופיל'],
        ['submit', 'שליחה'],
        ['sign in', 'התחבר'],
        ['sign out', 'התנתק'],
        ['male', 'זכר'],
        ['gender', 'מין'],
        ['first name', 'שם פרטי'],
        ['family name', 'שם משפחה'],
        ['father name', 'שם האב'],
        ['mother name', 'שם האם'],
        ['birth date', 'תאריך לידה']
    ]),
    [language.ENGLISH]: new Map([
        ['home', 'home']
    ]),
    [language.RUSSIAN]: new Map([
        ['home', 'домашняя страница']
    ]),
};