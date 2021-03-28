import React, {useContext, useEffect, useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";
import {userDetailsProps} from "../components/FormComponents/UserDetails/interface";
import {login, logout} from "../api/usersApi/connect";
import {services} from "../firebase";
import {AppContext} from "../contexts/AppContext";

export const UserProvider = ({children}: {
    children: any;
}) => {
    const appContext = useContext(AppContext);
    const [user, setUser] = useState<IUser>();
    const [userDetails, setUserDetails] = useState<Partial<userDetailsProps>>({});

    useEffect(() => {
        if (user?.uid) {
            services.firestore().collection("userData").doc(user?.uid).get().then(snapshot => {
                const details = snapshot.data();
                setUserDetails({
                    ...details,
                    email: user?.email
                } as Partial<userDetailsProps>)
            });
        } else {
            setUserDetails({});
        }
    }, [user])

    useEffect(() => {
        const empty = userDetails && Object.keys(userDetails).length === 0;
        appContext.setMounted(!empty);
    }, [userDetails, appContext])
    return <UserContext.Provider
        value={{
            user,
            setUser,
            userDetails,
            setUserDetails,
            login,
            logout
        } as IUserContext}>{children}</UserContext.Provider>;
}