import {IsLoggedIn, IsLoggedOut} from "../services/auth";
import React, {useEffect, useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";

const LoginHelper = ({args: {loggedIn}, children}: { args: { loggedIn: boolean }, children: JSX.Element }) => {
    const Logged = loggedIn ? IsLoggedIn : IsLoggedOut;

    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (loggedIn) {
            setUser({} as IUser);
        }
    }, [loggedIn])

    return (
        <UserContext.Provider value={{user, setUser} as IUserContext}>
            <Logged>
                {children}
            </Logged>
        </UserContext.Provider>
    )
}

export default LoginHelper;