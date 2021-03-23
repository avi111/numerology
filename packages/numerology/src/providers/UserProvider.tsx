import React, {useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";

export const UserProvider = ({children}: {
    children: any;
}) => {
    const [user, setUser] = useState<IUser>();
    return <UserContext.Provider value={{user, setUser} as IUserContext}>{children}</UserContext.Provider>;
}