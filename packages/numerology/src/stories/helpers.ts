import {language} from "../contexts/LanguageContext";

export const Bound = (Template: (args: any) => JSX.Element, loggedIn: boolean) => {
    Template.bind({});
    // @ts-ignore
    Template.args = {
        loggedIn,
        lang: language.HEBREW
    }
}