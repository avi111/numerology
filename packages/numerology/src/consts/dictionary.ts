import {language} from "../contexts/LanguageContext";

export enum dictionaryKeys {
    "home" = "home",
    "language" = "language",
    "hebrew" = "hebrew",
    "english" = "english",
    "russian" = "russian",
    "hebrew (עברית)" = "hebrew (עברית)",
    "english (english)" = "english (english)",
    "russian (русский)" = "russian (русский)",
    "edit user details" = "edit user details",
    "user details" = "user details",
    "display name" = "display name",
    "website" = "website",
    "email" = "email",
    "save" = "save",
    "welcome" = "welcome",
    "profile" = "profile",
    "submit" = "submit",
    "sign in" = "sign in",
    "sign out" = "sign out",
    "male" = "male",
    "female" = "female",
    "gender" = "gender",
    "first name" = "first name",
    "family name" = "family name",
    "father name" = "father name",
    "mother name" = "mother name",
    "birth date" = "birth date",
    "birth day" = "birth day",
    "birth year" = "birth year",
    "destiny" = "destiny",
    "no data" = "no data",
    "hebrew date" = "hebrew date",
    "numerological map" = "numerological map",
    "your birth date numbers" = "your birth date numbers",
    "edit contents" = "edit contents",
    "enable edit contents" = "enable edit contents",
    "sync contents" = "sync contents",
    "contents were refreshed" = "contents were refreshed",
    "syncing contents" = "syncing contents",
    "loading user details" = "loading user details",
    "name letters" = "name letters",
    "your name letters meaning" = "your name letters meaning",
    "your first name number meaning" = "your first name number meaning",
    "first name number" = "first name number",
    "your ambition in life" = "your ambition in life",
    "your full name number meaning" = "your full name number meaning",
    "full name number" = "full name number",
    "consonants" = "consonants",
    "meaning of consonant letters in your name" = "meaning of consonant letters in your name",
    "how others see you" = "how others see you",
    "ehevi" = "ehevi",
    "meaning of ehevi letters in your name" = "meaning of ehevi letters in your name",
    "you soul's desire" = "you soul's desire"

}

export const dictionaryEntries = {
        [language.HEBREW]: new Map<dictionaryKeys | string, string>([
            [dictionaryKeys.home, 'בית'],
            [dictionaryKeys.language, 'שפה'],
            [dictionaryKeys["hebrew"], 'עברית'],
            [dictionaryKeys["english"], 'אנגלית'],
            [dictionaryKeys["russian"], 'רוסית'],
            [dictionaryKeys["hebrew (עברית)"], 'עברית'],
            [dictionaryKeys["english (english)"], 'אנגלית (english)'],
            [dictionaryKeys["russian (русский)"], 'רוסית (русский)'],
            [dictionaryKeys["edit user details"], 'ערוך פרטי משתמש'],
            [dictionaryKeys["user details"], 'פרטי משתמש'],
            [dictionaryKeys["display name"], 'שם תצוגה'],
            [dictionaryKeys["website"], 'אתר'],
            [dictionaryKeys["email"], 'כתובת דוא״ל'],
            [dictionaryKeys["save"], 'שמור'],
            [dictionaryKeys["welcome"], 'ברוכים הבאים'],
            [dictionaryKeys["profile"], 'פרופיל'],
            [dictionaryKeys["submit"], 'שליחה'],
            [dictionaryKeys["sign in"], 'התחבר'],
            [dictionaryKeys["sign out"], 'התנתק'],
            [dictionaryKeys["male"], 'זכר'],
            [dictionaryKeys["female"], 'נקבה'],
            [dictionaryKeys["gender"], 'מין'],
            [dictionaryKeys["first name"], 'שם פרטי'],
            [dictionaryKeys["family name"], 'שם משפחה'],
            [dictionaryKeys["father name"], 'שם האב'],
            [dictionaryKeys["mother name"], 'שם האם'],
            [dictionaryKeys["birth date"], 'תאריך לידה'],
            [dictionaryKeys["birth day"], 'יום לידה'],
            [dictionaryKeys["birth year"], 'שנת לידה'],
            [dictionaryKeys["destiny"], 'גורל'],
            [dictionaryKeys["no data"], 'אין נתונים'],
            [dictionaryKeys["hebrew date"], 'תאריך עברי'],
            [dictionaryKeys["numerological map"], 'מפה נומרולוגית'],
            [dictionaryKeys["your birth date numbers"], 'מספרי תאריך הלידה שלך'],
            [dictionaryKeys["edit contents"], 'עריכת תכנים'],
            [dictionaryKeys["enable edit contents"], 'אפשר עריכת תכנים'],
            [dictionaryKeys["sync contents"], "סנכרן תכנים"],
            [dictionaryKeys["contents were refreshed"], "התכנים סונכרו"],
            [dictionaryKeys["syncing contents"], "מסנכרן תכנים"],
            [dictionaryKeys["loading user details"], "טוען פרטי משתמש"],
            [dictionaryKeys["your name letters meaning"], "פירוש אותיות שמך"],
            [dictionaryKeys["name letters"], "אותיות השם"],
            [dictionaryKeys["your first name number meaning"], "פירוש מספר שמך הפרטי"],
            [dictionaryKeys["first name number"], "מספר שם פרטי"],
            [dictionaryKeys["your full name number meaning"], "פירוש שמך המלא"],
            [dictionaryKeys["full name number"], "מספר שם מלא"],
            [dictionaryKeys["your ambition in life"], "השאיפה שלך בחיים"],
            [dictionaryKeys["consonants"], "עיצורים"],
            [dictionaryKeys["meaning of consonant letters in your name"], "פירוש אותיות העיצורים בשמך"],
            [dictionaryKeys["how others see you"], "איך הסביבה רואה אותך"],
            [dictionaryKeys["ehevi"], "אהו\"י"],
            [dictionaryKeys["meaning of ehevi letters in your name"], "פירוש אותיות אהו\"י בשמך"],
            [dictionaryKeys["you soul's desire"], "רצון הנשמה שלך"],

        ]),
        [language.ENGLISH]:
            new Map<dictionaryKeys, string>([
                [dictionaryKeys.home, 'home'],
                [dictionaryKeys["english (english)"], 'english'],
            ]),
        [language.RUSSIAN]:
            new Map<dictionaryKeys, string>([
                [dictionaryKeys.home, 'домашняя страница'],
                [dictionaryKeys['russian (русский)'], 'русский'],
            ]),
    }
;