import {createContext} from "react";

export interface IAppContext {
    mounted: {state: boolean, msg?:string};
    setMounted: (state: {state: boolean, msg?:string}) => void
}

export const AppContext = createContext<IAppContext>({} as IAppContext);