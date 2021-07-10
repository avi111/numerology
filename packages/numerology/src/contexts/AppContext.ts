import {createContext} from "react";
import {Strategy} from "../models/form/strategy";

export interface IAppContext {
    mounted: {state: boolean, msg?:string};
    setMounted: (state: {state: boolean, msg?:string}) => void;
    lastResult: {result: any, strategy: Strategy} | null;
    setLastResult: (result: {result: any, strategy: Strategy} | null) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);