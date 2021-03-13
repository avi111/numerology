import './App.css'
import React, {useEffect} from "react";
import CssBaseline from '@material-ui/core/CssBaseline';

import {Box, Container,} from '@material-ui/core';
import SimpleBottomNavigation from "./components/Header/SimpleBottomNavigation";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Hamburger from "./components/Header/Hamburger";
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles';
import Form2, {forms} from "./components/Form";
import Form from "./components/FormComponents/Form";
import {useStores} from "./stores/helpers/use-stores";
import {Views} from "./stores/ui/global-view";
import {observer} from "mobx-react-lite";
import {init, services} from "./firebase";

init();


function App() {
    const {uiStores: {globalView}, dataStores: {usersStore}} = useStores();

    const getCurrentView = () => {
        if (globalView.currentView === Views.LoggedOut) {
            return 'logged out';
        } else {
            return 'logged in';
        }

        return null;
    }

    useEffect(() => {
        services.auth().onAuthStateChanged(function (user) {
            if (user) {
                usersStore.user = user;
            } else {
                usersStore.user = null;
            }
        });
    })

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
                                <Form/>
                            </Route>
                            <Route path="/couple">
                                <Form2 form={forms.PROFILE}/>
                            </Route>
                            <Route path="/">
                                {getCurrentView()}
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </ThemeProvider>
    );
}

export default observer(App);
