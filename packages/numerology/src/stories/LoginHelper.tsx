import {IsLoggedIn, IsLoggedOut} from "../services/auth";
import React, {useEffect, useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";

const LoginHelper = ({args, children}: { args: { loggedIn: boolean }, children: JSX.Element }) => {
    const Logged = args.loggedIn ? IsLoggedIn : IsLoggedOut;
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        if (args.loggedIn) {
            setUser({} as IUser);
        }
    }, [args.loggedIn])

    return (
        <UserContext.Provider value={{user, setUser} as IUserContext}>
            <Logged>
                {children}
            </Logged>
        </UserContext.Provider>
    )
}

export default LoginHelper;