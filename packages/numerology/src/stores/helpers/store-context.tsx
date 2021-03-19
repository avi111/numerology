import {createContext} from "react";
import RootStore from "../root-store";
import {createStore} from "./create-store";

export const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;