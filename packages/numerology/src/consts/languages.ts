import {direction, language, languageProps} from "../contexts/LanguageContext";

export const languages: Map<language, languageProps> = new Map(
    [
        [
            language.HEBREW,
            {
                engName: "hebrew",
                originName: "עברית",
                direction: direction.RTL,
                flag: "il"
            }
        ],
        [
            language.ENGLISH,
            {
                engName: "english",
                originName: "english",
                direction: direction.LTR,
                flag: "gb"
            }
        ],
        [
            language.RUSSIAN,
            {
                engName: "russian",
                originName: "русский",
                direction: direction.LTR,
                flag: "ru"
            }
        ]
    ]
)