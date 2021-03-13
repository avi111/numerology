import './App.css'
import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {Profile} from "./numerologyEngine";

import {
    Box,
    Container,
} from '@material-ui/core';
import SimpleBottomNavigation from "./components/Header/SimpleBottomNavigation";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Hamburger from "./components/Header/Hamburger";
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';
import {gender, props} from "@maya259/numerology-engine";
import Form2, {forms} from "./components/Form";
import Form from "./components/FormComponents/Form";

function App() {
    const inputProps: props = {
        birthDate: new Date('1980-9-16'),
        familyName: 'לבקוביץ',
        fatherName: 'יעקב',
        fatherNameAtBirthOfPatient: '',
        firstName: 'אבי',
        firstNameAtBirth: '',
        gender: gender.MALE,
        motherName: 'טובה',
        motherNameAtBirthOfPatient: '',
        birthHour: false,
    };

    const profile = new Profile(inputProps);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Router>
                    <Box display="flex">
                        <Hamburger/>
                        <SimpleBottomNavigation/>
                    </Box>
                    <div>
                        <Switch>
                            <Route path="/profile">
                                <Form />
                            </Route>
                            <Route path="/couple">
                                <Form2 form={forms.PROFILE} />
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
