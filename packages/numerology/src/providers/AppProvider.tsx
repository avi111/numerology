import React, {useState} from "react";
import {AppContext} from "../contexts/AppContext";
import {Strategy} from "../models/form/strategy";

export const AppProvider = ({children}: {
    children: any;
}) => {
    const [mounted, setMounted] = useState<{state: boolean, msg?:string}>({state: false, msg: "loading user details"});
    const [lastResult, setLastResult] = useState<{result: any, strategy: Strategy} | null>(null);

    return <AppContext.Provider
        value={{
            lastResult,
            setLastResult,
            mounted,
            setMounted
        }}>{children}</AppContext.Provider>;
}