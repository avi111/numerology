import {IsLoggedIn, IsLoggedOut} from "../services/auth";
import React, {useEffect, useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";
import {userDetailsProps} from "../components/FormComponents/UserDetails/interface";
import {language} from "../contexts/LanguageContext";

const LoginHelper = ({args: {loggedIn, lang}, children}: { args: { loggedIn: boolean, lang: language }, children: JSX.Element }) => {
    const Logged = loggedIn ? IsLoggedIn : IsLoggedOut;

    const [user, setUser] = useState<IUser>();
    const [userDetails, setUserDetails] = useState<Partial<userDetailsProps> | null>(null);

    useEffect(() => {
        if (loggedIn) {
            setUser({
                displayName: "avi",
                email: "avi111@gmail.com"
            } as IUser);
            setUserDetails({
                language: lang,
                displayName: "avi",
                email: "avi111@gmail.com",
                website: "levkovich.co.il"
            })
        }
    }, [loggedIn, lang])

    return (
        <UserContext.Provider value={{user, setUser, userDetails, setUserDetails} as IUserContext}>
            <Logged>
                {children}
            </Logged>
        </UserContext.Provider>
    )
}

export default LoginHelper;