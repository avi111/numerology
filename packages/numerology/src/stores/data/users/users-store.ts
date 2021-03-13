import {action, observable} from "mobx";
import firebase from "firebase";

export interface Error {
    code: string;
    message: string;
    email: string;
    credential: firebase.auth.AuthCredential
}

export default class UsersStore {
    @observable user: firebase.User | null | undefined;
    @observable credential: firebase.auth.AuthCredential | null | undefined;
    @observable error: Error | undefined | null;

    @action
    async login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().useDeviceLanguage();
        await firebase.auth().signInWithRedirect(provider);

        // try {
        //     const result = await firebase.auth().getRedirectResult();
        //     if (result.credential) {
        //         this.credential = result.credential;
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }
}
