import firebase from 'firebase/app'
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";

// export const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MESSAGING_SENDER_ID
// };

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

const {auth, storage, firestore, functions} = firebase;

export const services = {auth, storage, firestore, functions, firebase: instance()}

export default instance();