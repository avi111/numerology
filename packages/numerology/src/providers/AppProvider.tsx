import React, {useState} from "react";
import {AppContext} from "../contexts/AppContext";

export const AppProvider = ({children}: {
    children: any;
}) => {
    const [mounted, setMounted] = useState<{state: boolean, msg?:string}>({state: false, msg: "loading user details"});
    return <AppContext.Provider
        value={{
            mounted,
            setMounted
        }}>{children}</AppContext.Provider>;
}