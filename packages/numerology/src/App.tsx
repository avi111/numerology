import './App.css'
import React, {useContext, useState} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import {Box, CircularProgress, Container,} from '@material-ui/core';
import SimpleBottomNavigation from "./components/Header/SimpleBottomNavigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hamburger from "./components/Header/Hamburger";
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Form2, {forms} from "./components/Form";
import Form from "./components/FormComponents/Form";
import {observer} from "mobx-react-lite";
import {services} from "./firebase";
import Home from "./components/Home";
import {UserContext} from "./contexts/UserContext";

const App = () => {
    const [mounted, setMounted] = useState(false);
    const userContext = useContext(UserContext);
    services.auth().onAuthStateChanged(function (user) {
        if (user) {
            userContext.setUser(user);
        } else {
            userContext.setUser(null);
        }
        setMounted(true);
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
                                    <Form/>
                                </Route>
                                <Route path="/couple">
                                    <Form2 form={forms.PROFILE}/>
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

export default observer(App);