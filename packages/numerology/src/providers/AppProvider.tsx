import React, {useState} from "react";
import {AppContext} from "../contexts/AppContext";

export const AppProvider = ({children}: {
    children: any;
}) => {
    const [mounted, setMounted] = useState<boolean>(false);
    return <AppContext.Provider
        value={{
            mounted,
            setMounted
        }}>{children}</AppContext.Provider>;
}