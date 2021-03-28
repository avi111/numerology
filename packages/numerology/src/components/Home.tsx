import React, {useContext} from "react";
import {IsLoggedIn, IsLoggedOut} from "../services/auth";
import {LanguageContext} from "../contexts/LanguageContext";
import {UserContext} from "../contexts/UserContext";

const Home = () => {
    const {getWord} = useContext(LanguageContext);
    const {userDetails} = useContext(UserContext);

    const translate: (word: string | null | undefined) => string = word => (word || "").split(" ").map(w => getWord(w)).join(" ");
    return (
        <React.Fragment>
            <IsLoggedIn>{getWord("Welcome")}, {translate(userDetails?.displayName)}</IsLoggedIn>
            <IsLoggedOut>logged out</IsLoggedOut>
        </React.Fragment>
    );
}

export default Home;