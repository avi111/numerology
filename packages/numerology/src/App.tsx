import './App.css'
import React from "react";
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
import Home from "./components/Home";

init();


const App = observer(() => {
    const {uiStores: {globalView}, dataStores: {usersStore}} = useStores();

    services.auth().onAuthStateChanged(function (user) {
        if (user) {
            usersStore.user = user;
            globalView.updateView(Views.LoggedIn);
        } else {
            usersStore.user = null;
        }
    });

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
                                <Home/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Container>
        </ThemeProvider>
    );
});

export default App;
