import RootStore from "../root-store";
import {wrapRoot} from "mobx-easy";
import UserService from "../../services/userService";

export interface RootEnv {
  UserService: UserService;
  isDev: boolean;
}

export const createStore = () => {
  const env = {
    todoService: new UserService(),
    isDev: process.env.NODE_ENV === 'development'
  };

  const rootStore = wrapRoot({
    RootStore: RootStore,
    env
  });

  return rootStore as RootStore;
};
