import './App.css'
import React, {useContext, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import {Box, CircularProgress, Container,} from '@material-ui/core';
import SimpleBottomNavigation from "./components/Header/SimpleBottomNavigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hamburger from "./components/Header/Hamburger";
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';
import firebase, {services} from "./firebase";
import Home from "./components/Home";
import {UserContext} from "./contexts/UserContext";
import ProfileForm from "./components/FormComponents/Profile/ProfileForm";
import {language, LanguageContext} from "./contexts/LanguageContext";

const App = () => {
    const [mounted, setMounted] = useState(false);
    const userContext = useContext(UserContext);
    const langContext = useContext(LanguageContext);

    services.auth().onAuthStateChanged(async (user) => {
        if (user) {
            userContext.setUser(user);
        } else {
            userContext.setUser(null);
        }
        setMounted(true);


        const {claims} = await firebase?.auth().currentUser?.getIdTokenResult() || {};
        const lang = claims?.language || language.HEBREW;
        langContext.setCurrentLanguage(lang);
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {mounted ?
                <Container maxWidth="sm">
                    <Router>
                        <Box display="flex">
                            <Hamburger/>
                            <SimpleBottomNavigation/>
                        </Box>
                        <div>
                            <Switch>
                                <Route path="/profile">
                                    <ProfileForm/>
                                </Route>
                                <Route path="/business">
                                    BusinessForm
                                </Route>
                                <Route path="/couple">
                                    CoupleForm
                                </Route>
                                <Route path="/">
                                    <Home/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </Container>
                : <Box width="100vw" height="100vh" display="flex" justifyContent="center"
                       alignItems="center"><CircularProgress/></Box>}
        </ThemeProvider>
    );
}

export default App;