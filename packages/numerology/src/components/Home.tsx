import React from "react";
import {IsLoggedIn, IsLoggedOut} from "../services/auth";

const Home = () => {
    return (
        <React.Fragment>
            <IsLoggedIn>logged in</IsLoggedIn>
            <IsLoggedOut>logged out</IsLoggedOut>
        </React.Fragment>
    );
}

export default Home;