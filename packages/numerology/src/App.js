import './App.css'
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Profile} from "./numerologyEngine";
import {
    Box,
    Container,
} from '@material-ui/core';
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Hamburger from "./components/Hamburger";
import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
    const props = {
        birthDate: new Date('1980-9-16'),
        familyName: 'לבקוביץ',
        fatherName: 'יעקב',
        fatherNameAtBirthOfPatient: '',
        firstName: 'אבי',
        firstNameAtBirth: '',
        gender: 'male',
        motherName: 'טובה',
        motherNameAtBirthOfPatient: '',
        birthHour: false,
    };

    const profile = new Profile(props);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Router>
                    <Box display="flex">
                        <Hamburger/>
                        <SimpleBottomNavigation/>
                    </Box>
                    <div>
                        <Switch>
                            <Route path="/profile">
                                3
                            </Route>
                            <Route path="/couple">
                                2
                            </Route>
                            <Route path="/">
                                <p>{JSON.stringify(profile.props.firstName)}</p>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </ThemeProvider>
    );
}

export default App;
