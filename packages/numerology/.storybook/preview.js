import {muiTheme} from 'storybook-addon-material-ui'

import theme from "../src/theme";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/solid.css";

export const decorators = [
    muiTheme([theme])
];

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}