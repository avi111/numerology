import React from "react";
import {observer} from "mobx-react-lite";
import {IsLoggedIn, IsLoggedOut} from "../services/auth";

const Home = observer(() => {

    return (
        <React.Fragment>
            <IsLoggedIn>logged in</IsLoggedIn>
            <IsLoggedOut>logged out</IsLoggedOut>
        </React.Fragment>
    );
});

export default Home;