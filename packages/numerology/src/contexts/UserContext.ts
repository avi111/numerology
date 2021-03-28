import {createContext} from "react";
import firebase from "firebase";
import {userDetailsProps} from "../components/FormComponents/UserDetails/interface";

export type IUser = firebase.User | null | undefined

export interface IUserContext {
    user: IUser;
    setUser: (user: IUser) => void,
    userDetails: Partial<userDetailsProps>,
    setUserDetails: (userDetails: Partial<userDetailsProps>) => void,
    login: () => void,
    logout: () => void,
}

export const UserContext = createContext<IUserContext>({} as IUserContext);