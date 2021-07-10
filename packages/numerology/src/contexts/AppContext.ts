import {createContext} from "react";
import {IExportDoc, Strategy} from "@maya259/numerology-export";

export interface IAppContext {
    mounted: { state: boolean, msg?: string };
    setMounted: (state: { state: boolean, msg?: string }) => void;
    lastResult: { result: IExportDoc, strategy: Strategy } | null;
    setLastResult: (result: { result: IExportDoc, strategy: Strategy } | null) => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);