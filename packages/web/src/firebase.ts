import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDCu7Yqa-Nt7Mhm-1HSGGIQtxZcHKbVGfk",
    authDomain: "numerology-ae61d.firebaseapp.com",
    databaseURL: "https://numerology-ae61d.firebaseio.com",
    projectId: "numerology-ae61d",
    storageBucket: "numerology-ae61d.appspot.com",
    messagingSenderId: "756589978042",
    appId: "1:756589978042:web:3df0af7f497c0eb9357d83",
    measurementId: "G-XCSNKJSXGP"
};

class Firebase {
    private static instance: typeof firebase;
    static getInstance() {
        if(!Firebase.instance) {
            Firebase.instance = firebase;
            firebase.initializeApp(firebaseConfig);
        } else {
            return Firebase.instance;
        }
    }
}
export const init = () => {
    return Firebase.getInstance();
}

const instance = () => {
    return Firebase.getInstance();
}

export default instance();