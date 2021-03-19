import React, {useContext} from "react";
import {UserContext} from "../contexts/UserContext";

// @ts-ignore
export const IsLoggedIn = ({children}) => {
    const userContext = useContext(UserContext);
    return <>{userContext.user && children }</>;
}

// @ts-ignore
export const IsLoggedOut = ({children}) => {
    const userContext = useContext(UserContext);
    return <>{!userContext.user && children }</>;
}