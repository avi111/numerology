import {createContext} from "react";

export interface IAppContext {
    mounted: boolean;
    setMounted: (state: boolean) => void
}

export const AppContext = createContext<IAppContext>({} as IAppContext);