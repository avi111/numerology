import React, {useContext, useEffect, useState} from "react";
import {IUser, IUserContext, UserContext} from "../contexts/UserContext";
import {userDetailsPayload, userDetailsProps} from "../components/FormComponents/UserDetails/interface";
import {login, logout} from "../api/usersApi/connect";
import {services} from "../firebase";
import {AppContext} from "../contexts/AppContext";
import {LanguageContext} from "../contexts/LanguageContext";

export const UserProvider = ({children}: {
    children: any;
}) => {
    const langContext = useContext(LanguageContext);
    const appContext = useContext(AppContext);
    const [user, setUser] = useState<IUser>();
    const [userDetails, setUserDetails] = useState<Partial<userDetailsProps> | null>(null);

    useEffect(() => {
        if (user?.uid) {
            services.firestore().collection("userData").doc(user?.uid).get().then(snapshot => {
                const details = snapshot.data();
                const {displayName, language, website} = details as userDetailsPayload;
                setUserDetails({
                    displayName,
                    language,
                    website,
                    email: user?.email
                } as Partial<userDetailsProps>)
            });
        } else {
            setUserDetails(null);
        }
    }, [user])

    useEffect(() => {
        const empty = userDetails && Object.keys(userDetails).length === 0;
        if(empty){
            appContext.setMounted(false);
        } else {
            appContext.setMounted(true);
        }
    }, [userDetails, appContext, langContext.currentLanguage])

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