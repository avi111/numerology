import ltr from "../src/themes/ltr";
import rtl from "../src/themes/rtl";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import LanguageHelper from "../src/stories/LanguageHelper";
import {direction, language} from "../src/contexts/LanguageContext";
import RouterHelper from "../src/stories/RouterHelper";
import LoginHelper from "../src/stories/LoginHelper";
import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {languages} from "../src/consts/languages";
import {CssBaseline} from "@material-ui/core";

export const themes = {
    [direction.LTR]: ltr,
    [direction.RTL]: rtl
}

export const decorators = [
    (Story, parameters) => {
        const {args} = parameters;
        const theme = themes[languages.get(args.lang)?.direction || 'rtl']

        return <LanguageHelper {...{args}}>
            <RouterHelper>
                <LoginHelper {...{args}}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Story/>
                    </ThemeProvider>
                </LoginHelper>
            </RouterHelper>
        </LanguageHelper>;
    }
];

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    // controls: {expanded: true},
    args: {
        lang: language.HEBREW,
        loggedIn: true
    },
    argTypes: {
        lang: {
            control: {
                name: 'language',
                type: 'select',
                description: 'ui language',
                options: language,
                defaultValue: language.HEBREW
            }
        },
        loggedIn: {
            control: {
                name: 'is logged in',
                type: "boolean",
                description: 'display as logged in',
                defaultValue: true
            }
        }
    }
}
