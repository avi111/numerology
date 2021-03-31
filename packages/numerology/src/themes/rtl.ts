import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';

// A custom theme for this app
const rtl = createMuiTheme({
    direction: "rtl",
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
    typography: {
        fontWeightBold: 700
    },
    overrides: {
        MuiInputLabel: {
            root: {
                left: "initial",
                right: 0
            },
            formControl: {
                left: "initial",
                right: 0
            }
        },
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                    direction: "rtl",
                },
                "*": {
                    textAlign: "right"
                }
            },
        },
    },
});

export default rtl;