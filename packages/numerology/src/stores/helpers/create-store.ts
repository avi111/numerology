import RootStore from "../root-store";
import {wrapRoot} from "mobx-easy";

export interface RootEnv {
  isDev: boolean;
}

export const createStore = () => {
  const env = {
    isDev: process.env.NODE_ENV === 'development'
  };

  const rootStore = wrapRoot({
    RootStore: RootStore,
    env
  });

  return rootStore as RootStore;
};
