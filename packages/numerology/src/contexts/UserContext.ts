import {createContext} from "react";
import firebase from "firebase";

export type IUser = firebase.User | null | undefined

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void,
    login: () => void,
    logout: () => void,
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    await firebase.auth().signInWithRedirect(provider);
}

export const logout = async () => {
    await firebase.auth().signOut();
}