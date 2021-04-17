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
    const [enableEditContents, setEnableEditContents] = useState<boolean>();
    const [userDetails, setUserDetails] = useState<Partial<userDetailsProps> | null>(null);
    useEffect(() => {
        if (user?.uid) {
            services.firestore().collection("userData").doc(user?.uid).get().then(snapshot => {
                const details = snapshot.data();
                const {
                    displayName,
                    language,
                    website,
                    email,
                    contents,
                    admin
                } = details as userDetailsPayload;
                setUserDetails({
                    displayName,
                    language,
                    website,
                    email,
                    contents,
                    admin
                } as Partial<userDetailsProps>)
                language && langContext.setCurrentLanguage(language)

                if (displayName) {
                    appContext.setMounted({state: true});
                }
            });

        } else {
            setUserDetails(null);
        }
    }, [user, langContext])

    const isAdmin = userDetails?.admin;
    const canEditContents = (isAdmin || enableEditContents)
    return <UserContext.Provider
        value={{
            user,
            setUser,
            userDetails,
            setUserDetails,
            enableEditContents,
            setEnableEditContents,
            isAdmin,
            canEditContents,
            login,
            logout
        } as IUserContext}>{children}</UserContext.Provider>;
}