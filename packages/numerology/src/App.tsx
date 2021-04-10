import './App.css'
import React, {useContext, useEffect} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import {Box, CircularProgress, Container,} from '@material-ui/core';
import SimpleBottomNavigation from "./components/Header/SimpleBottomNavigation";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Hamburger from "./components/Header/Hamburger";
import ltr from './themes/ltr';
import rtl from './themes/rtl';
import {ThemeProvider} from '@material-ui/core/styles';
import {services} from "./firebase";
import Home from "./components/Home";
import {UserContext} from "./contexts/UserContext";
import ProfileForm from "./components/FormComponents/Profile/ProfileForm";
import {direction, LanguageContext} from "./contexts/LanguageContext";
import {UserDetailsWrapper} from "./components/FormComponents/UserDetails/UserDetails";
import {AppContext} from "./contexts/AppContext";
import EditContents from "./components/EditContents/EditContents";

const themes = {
    [direction.LTR]: ltr,
    [direction.RTL]: rtl
}

const App = () => {
    const appContext = useContext(AppContext);
    const userContext = useContext(UserContext);
    const langContext = useContext(LanguageContext);
    const theme = themes[langContext.getDirection()]

    useEffect(() => {
        services.auth().onAuthStateChanged(async (user) => {
            if (user) {
                userContext.setUser(user);
            } else {
                userContext.setUser(null);
            }
        });

        setTimeout(()=>{
            if(!appContext.mounted) {
                appContext.setMounted(true);
            }
        },1000)
    }, [langContext, userContext, appContext])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {appContext.mounted ?
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
                                <Route path="/user">
                                    <UserDetailsWrapper/>
                                </Route>
                                <Route
                                    render={() =>
                                        userContext.canEditContents
                                            ? <EditContents/>
                                            : <Redirect
                                                to={`/`}
                                            />}
                                    path="/contents">

                                </Route>
                                <Route path="/" exact>
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