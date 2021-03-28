import firebase from "firebase";

export const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    firebase.auth().useDeviceLanguage();
    await firebase.auth().signInWithRedirect(provider);
}

export const logout = async () => {
    await firebase.auth().signOut();
}