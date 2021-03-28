import {language} from "../contexts/LanguageContext";

export const dictionaryEntries = {
    [language.HEBREW]: new Map([
        ['home', 'בית'],
        ['avi', 'אבי'],
        ['language', 'שפה'],
        ['hebrew', 'עברית'],
        ['english', 'אנגלית'],
        ['russian', 'רוסית'],
        ['hebrew (עברית)', 'עברית'],
        ['english (english)', 'אנגלית (english)'],
        ['russian (русский)', 'רוסית (русский)'],
        ['edit user details', 'ערוך פרטי משתמש'],
        ['user details', 'פרטי משתמש'],
        ['display name', 'שם תצוגה'],
        ['website', 'אתר'],
        ['email', 'כתובת דוא״ל'],
        ['save', 'שמור'],
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
        ['home', 'home'],
        ['english (english)', 'english'],
    ]),
    [language.RUSSIAN]: new Map([
        ['home', 'домашняя страница'],
        ['russian (русский)', 'русский'],
    ]),
};