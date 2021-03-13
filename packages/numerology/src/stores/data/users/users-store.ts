import {observable} from "mobx";
import firebase from "firebase";

export default class UsersStore {
    @observable
    user?: firebase.User;
}
